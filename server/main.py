from fastapi import FastAPI, Depends
from typing import List
from src.database import SessionLocal, engine
from src import models

import nltk
nltk.download('stopwords', './static')
nltk.download('punkt', './static')

models.Base.metadata.create_all(bind=engine)

# dependency that tries to obtain a connection to the database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

app = FastAPI()
import src.routes