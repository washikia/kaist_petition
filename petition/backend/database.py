# backend/database.py

from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import declarative_base

# Define the database URL. For SQLite, it's the path to the file.
# "sqlite+aiosqlite" tells SQLAlchemy to use the aiosqlite driver.
# The database file will be created in the same directory.
SQLALCHEMY_DATABASE_URL = "sqlite+aiosqlite:///./petition.db"

# Create the async engine
engine = create_async_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# Create a sessionmaker that will be used to create new sessions
# We use autocommit=False and autoflush=False for async context
SessionLocal = async_sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for our declarative models
Base = declarative_base()

# Dependency to get a database session
async def get_db():
    async with SessionLocal() as db:
        yield db