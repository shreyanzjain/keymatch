from sqlalchemy.orm import Session
from src import schemas, models
from rake_nltk import Rake

def get_job():
    pass

def add_job(job: schemas.JobCreate, db: Session):
    new_job = models.Job(**job.model_dump())
    db.add(new_job)
    db.commit()
    db.refresh(new_job)
    extract_keywords(job.description, new_job.id, db)
    return new_job
    

def delete_job(jobId: int, db: Session):
    job = db.query(models.Job).filter(models.Job.id == jobId).first()
    if(job):
        db.delete(job)
        db.commit()
        return "Job Deleted Successfully"
    else:
        return "Job Does Not Exist!"

def update_job():
    pass

def get_all_jobs(db: Session):
    return db.query(models.Job).all()
    

def extract_keywords(desc: str, jobId: int, db: Session):
    r = Rake()
    r.extract_keywords_from_text(desc)
    for i in r.frequency_dist:
        keyword = models.Keywords(**schemas.KeywordCreate(keyword=i, job_id=jobId).model_dump())
        db.add(keyword)
        db.commit()
        db.refresh(keyword)