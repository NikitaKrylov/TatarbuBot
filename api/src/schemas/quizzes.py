from datetime import datetime

from pydantic import BaseModel

from src.database.models import QuizType


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
    use_audio_answer: bool
    image: str | None
    audio: str | None
    explanation: str | None
    quiz_type: QuizType


class QuizCreateDTO(BaseQuizDTO):
    answers: list[AnswerCreateDTO]


class QuizOutDTO(BaseQuizDTO):
    id: int
    answers: list[AnswerOutDTO]


class UserAnswerCreateDTO(BaseModel):
    quiz_id: int
    answer_id: int
    user_id: int


class UserAnswerOutDTO(BaseModel):
    user_id: int
    answer_id: int | None
    quiz_id: int | None
    quiz_type: str
    is_correct: bool


class UserAnswerWithAudioCreateDTO(BaseModel):
    pass





