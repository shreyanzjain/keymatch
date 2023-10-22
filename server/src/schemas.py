from pydantic import BaseModel
from typing import List
from datetime import datetime

class JobBase(BaseModel):
    title: str
    description: str
    company: str

class JobCreate(JobBase):
    pass

class KeywordBase(BaseModel):
    keyword: str

class KeywordCreate(KeywordBase):
    job_id: int

class Keyword(KeywordBase):
    id: int
    job_id: int

    class Config:
        from_attributes = True

class Job(JobBase):
    id: int
    created_at: datetime
    keywords: List[str] = []

    class Config:
        from_attributes = True

class JobKeywords(BaseModel):
    job_id: int
    keywords: List[str]

    class Config:
        from_attributes = True