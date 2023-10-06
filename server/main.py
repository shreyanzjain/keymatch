from fastapi import FastAPI
from src.database import SessionLocal, engine
from src import models, schemas, methods

models.Base.metadata.create_all(bind=engine)

# dependency that tries to obtain a connection to the database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

app = FastAPI()

@app.get('/')
def home():
    return "Welcome to Keymatch"