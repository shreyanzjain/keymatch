from main import app, get_db
from typing import List
from fastapi import UploadFile, HTTPException, Depends
from sqlalchemy.orm import Session
from src import schemas
from src.methods import job_methods, keyword_methods

@app.post('/api/create/job', response_model=schemas.Job, responses={
    200: {
        "description": "Successful"
    },
    404: {
        "description": "Resume Not Found"
    }
})
def create_job(job: schemas.JobCreate, db: Session = Depends(get_db)):
    return job_methods.add_job(job, db)

@app.get('/api/read/jobs', response_model=List[schemas.Job])
def read_jobs(db: Session = Depends(get_db)):
    return job_methods.get_all_jobs(db)

@app.delete('/api/delete/job/{jobId}', 
            responses={
                200: {
                    "description": "Successful"
                },
                404: {
                    "description": "No Job Found"
                }
            })
def delete_job(jobId: int, db: Session = Depends(get_db)):
    response = job_methods.delete_job(jobId, db)
    return response

@app.put('/api/upload/resume', 
         responses={200: {"description": "Successfully uploaded resume"}, 
                    415: {"description": "Unsupported Filetype"}
                    })

def upload_resume(file: UploadFile):
    if file.content_type != "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        raise HTTPException(415, "Unsupported filetype. Only '.docx' files are accepted!")  
    else:
        file_location = f"./static/resume.docx"
        with open(file_location, mode='wb') as new_file:
            new_file.write(file.file.read())
        return f"Upload successful, file stored at {file_location}"

@app.get('/api/read/{jobId}/keywords')
def get_keywords_by_job_id(jobId: int, db: Session = Depends(get_db)):
    return keyword_methods.get_keywords_by_job_id(jobId, db)