from datetime import datetime

from pydantic import BaseModel


class BaseAnswerDTO(BaseModel):

    text: str | None
    audio: str | None
    image: str | None
    is_correct: bool


class AnswerCreateDTO(BaseAnswerDTO):
    pass


class AnswerOutDTO(BaseAnswerDTO):
    id: int
    quiz_id: int


class BaseQuizDTO(BaseModel):
    name: str
    tooltip: str | None
    multiple_answers: bool
    image: str | None
    audio: str | None
    explanation: str | None


class QuizCreateDTO(BaseQuizDTO):
    answers: list[AnswerCreateDTO]


class QuizOutDTO(BaseQuizDTO):
    id: int
    answers: list[AnswerOutDTO]


class BaseUserAnswerDTO(BaseModel):
    quiz_id: int
    answer_id: int


class UserAnswerCreateDTO(BaseUserAnswerDTO):
    pass


class UserAnswerOutDTO(BaseUserAnswerDTO):
    created_at: datetime
    is_correct: bool



