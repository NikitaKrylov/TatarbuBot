from enum import Enum
from pydantic import BaseModel
from src.schemas.quizzes import QuizOutDTO, QuizCreateDTO


class LessonProcessStatus(str, Enum):
    DEFAULT = 'default'
    LOCKED = 'locked'
    TODO = 'todo'


class LessonOutDTO(BaseModel):
    id: int
    name: str
    knowledge: str
    status: LessonProcessStatus
    image: str | None = None
    quizzes: list[QuizOutDTO]


class LessonCreateDTO(BaseModel):
    name: str
    knowledge: str
    status: LessonProcessStatus




