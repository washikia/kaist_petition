# backend/schemas.py

from pydantic import BaseModel, EmailStr
from pydantic_settings import SettingsConfigDict

# ==========================================================
# THIS CLASS WAS MISSING - ADD IT HERE
# ==========================================================
# Schema for the data we expect when a user signs up.
class SignatureCreate(BaseModel):
    name: str
    email: EmailStr  # Pydantic will automatically validate this is a valid email format
    affiliation: str
    is_anonymous: bool = False
# ==========================================================


# Schema for the data we return to the public.
# This prevents sensitive data like email or tokens from being exposed.
class SignaturePublic(BaseModel):
    id: int
    name: str
    affiliation: str # Let's add affiliation here too for display

    # This is the modern way for Pydantic v2
    model_config = SettingsConfigDict(from_attributes=True)


class SignaturePublicAnonymous(BaseModel):
    id: int
    affiliation: str
    
    model_config = SettingsConfigDict(from_attributes=True)


# Now, this class can find SignatureCreate because it's defined above
class Signature(SignatureCreate):
    id: int
    is_verified: bool
    
    model_config = SettingsConfigDict(from_attributes=True)