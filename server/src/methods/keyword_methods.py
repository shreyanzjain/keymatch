from sqlalchemy.orm import Session
from fastapi import HTTPException
from src.methods import job_methods
from src import schemas, models

def get_keywords_by_job_id(job_id: int, db: Session):
    keywords = db.query(models.Keywords.keyword).filter(models.Keywords.job_id == job_id).all()
    return [keyword[0] for keyword in keywords]

def get_all_keywords(db: Session):
    jobs = job_methods.get_all_jobs(db)
    job_keywords_list: list = []
    for job in jobs:
        job_keywords = get_keywords_by_job_id(job.id, db)
        job_keywords_list.append({"job_id": job.id, "keywords": job_keywords})
    return job_keywords_list
    