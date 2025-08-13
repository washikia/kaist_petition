# backend/main.py

from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from petition.backend import models
from petition.backend.database import engine
from petition.backend.routers import signature 

# ... (lifespan manager code remains the same) ...
@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Application startup: Creating database tables...")
    async with engine.begin() as conn:
        await conn.run_sync(models.Base.metadata.create_all)
    print("Application startup: Database tables created.")
    yield
    print("Application shutdown.")

app = FastAPI(lifespan=lifespan)

# --- INCLUDE THE ROUTER ---
# This line adds all the routes from signature.py to your main app
app.include_router(signature.router)

# --- CORS MIDDLEWARE ---
# ... (rest of the file is the same) ...
origins = [
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api")
def read_root():
    return {"message": "Hello from the FastAPI backend! The database is set up."}