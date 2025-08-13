# backend/routers/admin.py

import os
from fastapi import APIRouter, Depends, HTTPException, status, Header
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text, select
from typing import List

from backend import models, schemas
from backend.database import get_db

# Create a new router for admin-specific endpoints
router = APIRouter(
    prefix="/api/admin",  # All routes will start with /api/admin
    tags=["Admin"]        # Group them under "Admin" in the API docs
)

# This is a special "dependency" function. Any endpoint that includes it
# will first run this check. It looks for a secret key in the request headers.
async def verify_admin_key(x_admin_key: str = Header(None)):
    # Get the key from the environment. Return an error if it's not set.
    ADMIN_KEY = os.getenv("ADMIN_SECRET_KEY")
    if not ADMIN_KEY:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="Admin secret key not configured on server."
        )

    # Check if the provided key matches the one on the server.
    if x_admin_key != ADMIN_KEY:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, 
            detail="Invalid or missing admin key."
        )
    return True

# --- Endpoint 1: Get ALL Signatures (including anonymous) ---
@router.get(
    "/signatures", 
    response_model=List[schemas.Signature], # Use the full Signature schema
    dependencies=[Depends(verify_admin_key)] # This SECURES the endpoint
)
async def get_all_signatures(db: AsyncSession = Depends(get_db)):
    """
    Get a complete list of all signatories. Requires a valid 'x-admin-key' 
    in the request header. This is for admin use only.
    """
    result = await db.execute(select(models.Signatory).order_by(models.Signatory.id))
    all_signatures = result.scalars().all()
    return all_signatures

# --- Endpoint 2: Reset the Database ---
@router.post(
    "/reset-database", 
    status_code=status.HTTP_204_NO_CONTENT,
    dependencies=[Depends(verify_admin_key)] # This SECURES the endpoint
)
async def reset_database(db: AsyncSession = Depends(get_db)):
    """
    Deletes ALL records from the signatories table. This is a destructive
    action. Requires a valid 'x-admin-key' in the request header.
    """
    # Using text() is a safe way to execute raw SQL DELETE statements.
    await db.execute(text(f"DELETE FROM {models.Signatory.__tablename__}"))
    await db.commit()
    print("--- ADMIN ACTION: Database has been reset ---")
    # A 204 response has no body, so we return nothing.
    return