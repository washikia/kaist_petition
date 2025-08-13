# backend/database.py
import os
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import declarative_base

# Get the database URL from the environment variable
DATABASE_URL = os.getenv("DATABASE_URL")

# If the URL is for postgres, we need to adapt it for async usage
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql+asyncpg://", 1)
    # We need to install asyncpg driver as well
else:
    # Fallback to local SQLite for development
    DATABASE_URL = "sqlite+aiosqlite:///./petition.db"


engine = create_async_engine(DATABASE_URL)

SessionLocal = async_sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

async def get_db():
    async with SessionLocal() as db:
        yield db