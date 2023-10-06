from src.database import Base
from sqlalchemy import Column, String, Date, Integer, ForeignKey, Text
from sqlalchemy.orm import relationship
from datetime import datetime

class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255))
    description = Column(Text)
    created_at = Column(Date, default=datetime.utcnow)

    keywords = relationship("Keywords", back_populates="job", cascade="all, delete")


class Keywords(Base):
    __tablename__ = "keywords"

    id = Column(Integer, primary_key=True, index=True)
    keyword = Column(String(30))

    job_id = Column(Integer, ForeignKey("jobs.id"))
    job = relationship("Job", back_populates="keywords")