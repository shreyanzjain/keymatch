from fastapi import FastAPI, Depends
from typing import List
from src.database import SessionLocal, engine
from sqlalchemy.orm import Session
from src import models, schemas
from src.methods import job_methods

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

@app.get('/api')
def home():
    return "Welcome to Keymatch"

@app.post('/api/create/job', response_model=schemas.Job)
def create_job(job: schemas.JobCreate, db: Session = Depends(get_db)):
    return job_methods.add_job(job, db)

@app.get('/api/read/jobs', response_model=List[schemas.Job])
def read_jobs(db: Session = Depends(get_db)):
    return job_methods.get_all_jobs(db)

@app.delete('/api/delete/job/{jobId}')
def delete_job(jobId: int, db: Session = Depends(get_db)):
    response = job_methods.delete_job(jobId, db)
    return response