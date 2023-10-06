from pydantic import BaseModel
from typing import List
from datetime import datetime

class JobBase(BaseModel):
    title: str
    description: str
    company: str

class JobCreate(JobBase):
    createdAt: datetime

class Job(JobBase):
    id: int
    created_at: str
    keywords: List[str]

    class Config:
        from_attributes = True