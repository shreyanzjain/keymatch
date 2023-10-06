from sqlalchemy.orm import Session
from fastapi import HTTPException
from src import schemas, models

def get_keywords_by_job_id(job_id: int, db: Session):
    keywords = db.query(models.Keywords.keyword).filter(models.Keywords.job_id == job_id).all()
    return [keyword for (keyword,) in keywords]