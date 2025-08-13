# backend/routers/signature.py

import secrets
from fastapi import APIRouter, Depends, HTTPException, status, BackgroundTasks
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from backend import models, schemas
from backend.database import get_db
from backend.email_service import send_verification_email

# APIRouter allows us to create a modular set of routes
router = APIRouter(
    prefix="/api/signature",  # All routes in this file will start with /api/signature
    tags=["Signatures"]       # Group these routes under "Signatures" in the docs
)

# --- The Core Signature Endpoint ---
@router.post("/", status_code=status.HTTP_201_CREATED, response_model=schemas.Signature)
async def create_signature(
    signature: schemas.SignatureCreate, 
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db)
):
    # 1. Validate the email domain
    if not signature.email.endswith("@kaist.ac.kr"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only KAIST email addresses are allowed."
        )

    # 2. Check for an existing signatory
    query = select(models.Signatory).where(models.Signatory.email == signature.email)
    result = await db.execute(query)
    existing_signatory = result.scalar_one_or_none()

    # --- REVISED LOGIC ---
    if existing_signatory:
        if existing_signatory.is_verified:
            # Case 1: Already verified. This is a hard conflict.
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="This email address has already signed and been verified."
            )
        else:
            # Case 2: Exists but not verified. Let's resend the verification.
            # This is "good" behavior, but we shouldn't return 201 Created.
            # We'll just update their token and let them know.
            # (We could also return a different status code like 200 OK with a message)
            existing_signatory.verification_token = secrets.token_urlsafe(32)
            db_signatory = existing_signatory
    else:
        # Case 3: New user. Create a new record.
        verification_token = secrets.token_urlsafe(32)
        db_signatory = models.Signatory(
            **signature.model_dump(),
            verification_token=verification_token,
            is_verified=False
        )
        db.add(db_signatory)

    await db.commit()
    await db.refresh(db_signatory)

    background_tasks.add_task(
        send_verification_email, 
        to_email=db_signatory.email, 
        token=db_signatory.verification_token
    )
    # -----------------------------------

    # If the user already existed but wasn't verified, we can't really return
    # a "201 Created". However, for the frontend's sake, returning the object
    # is still useful. This is a common API design choice.
    # The frontend won't know the difference, it will just proceed.
    return db_signatory


# --- The Verification Endpoint ---
@router.get("/verify/{token}", response_model=schemas.SignaturePublic)
async def verify_signature(token: str, db: AsyncSession = Depends(get_db)):
    """
    Verify a signature using a unique token.
    This endpoint is designed to be called when a user clicks the "magic link"
    sent to their email.
    """
    # 1. Find the signatory by the verification_token
    query = select(models.Signatory).where(models.Signatory.verification_token == token)
    result = await db.execute(query)
    signatory = result.scalar_one_or_none()

    # 2. Handle the case where the token is invalid or already used
    if not signatory:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Invalid or expired verification token."
        )

    # 3. If found, update the signatory's status
    signatory.is_verified = True
    signatory.verification_token = None # Security best practice: nullify token after use

    await db.commit()
    await db.refresh(signatory)

    # 4. Return a success message (in the form of the public signatory data)
    # The frontend can use this to display a "Welcome, [Name]!" message.
    print(f"--- SIGNATURE VERIFIED: {signatory.email} ---")
    return signatory



# --- The Public Data Endpoint ---
@router.get("/", response_model=list[schemas.SignaturePublic | schemas.SignaturePublicAnonymous])
async def get_verified_signatures(db: AsyncSession = Depends(get_db)):
    """
    Get a list of all verified signatories.
    This list is public-facing. It respects the anonymity preference of users.
    """
    # 1. Query the database for all signatories where is_verified is True
    # We order by creation date to show the most recent signatures first.
    query = select(models.Signatory).where(models.Signatory.is_verified == True).order_by(models.Signatory.created_at.desc())
    
    result = await db.execute(query)
    verified_signatories = result.scalars().all()

    # 2. Transform the data into a public-facing list
    public_list = []
    for sig in verified_signatories:
        if sig.is_anonymous:
            # If anonymous, use the anonymous schema
            public_list.append(schemas.SignaturePublicAnonymous.model_validate(sig))
        else:
            # If public, use the public schema
            public_list.append(schemas.SignaturePublic.model_validate(sig))
            
    return public_list