from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.database import SessionLocal, engine
from src import models

import nltk
nltk.data.path.insert(0, './static')

models.Base.metadata.create_all(bind=engine)

# dependency that tries to obtain a connection to the database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

app = FastAPI()

# wildcard cors setup
origins = ["*"]
app.add_middleware(CORSMiddleware, 
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"])

import src.routes