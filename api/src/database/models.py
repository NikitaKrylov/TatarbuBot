from datetime import datetime
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, BigInteger
from src.database.db import Base
from enum import Enum


class User(Base):
    __tablename__ = 'users'

    tg_user_id: Mapped[int] = mapped_column(BigInteger, index=True, unique=True, primary_key=True)
    tg_chat_id: Mapped[int] = mapped_column(BigInteger, index=True)
    rang: Mapped[int] = mapped_column(default=0)
    joined_at: Mapped[datetime] = mapped_column(default=datetime.now)
    last_active: Mapped[datetime] = mapped_column(default=datetime.now)


class QuizType(str, Enum):
    GRAMMAR = 'Грамматика'
    READING = 'Чтение'
    ACCENT = 'Ударения'


class Quiz(Base):
    __tablename__ = 'quizzes'

    name: Mapped[str]
    quiz_type: Mapped[QuizType]
    image: Mapped[str | None] = mapped_column(nullable=True, default=None)
    audio: Mapped[str | None] = mapped_column(nullable=True, default=None)
    explanation: Mapped[str | None] = mapped_column(nullable=True, default=None)
    use_audio_answer: Mapped[bool] = mapped_column(default=False)
    answers: Mapped[list['QuizAnswer']] = relationship(uselist=True, lazy='immediate')


class QuizAnswer(Base):
    __tablename__ = 'quiz_answers'

    quiz_id: Mapped[int] = mapped_column(ForeignKey('quizzes.id', ondelete='CASCADE'))
    text: Mapped[str | None] = mapped_column(nullable=True, default=None)
    audio: Mapped[str | None] = mapped_column(nullable=True, default=None)
    image: Mapped[str | None] = mapped_column(nullable=True, default=None)
    is_correct: Mapped[bool] = mapped_column(default=False)


class UserAnswer(Base):
    __tablename__ = 'user_answers'

    user_id: Mapped[int] = mapped_column(ForeignKey('users.tg_user_id', ondelete='CASCADE'))
    quiz_id: Mapped[int] = mapped_column(ForeignKey('quizzes.id', ondelete='SET NULL'), nullable=True)
    answer_id: Mapped[int] = mapped_column(ForeignKey('quiz_answers.id', ondelete='SET NULL'), nullable=True)
    is_correct: Mapped[bool]
    quiz_type: Mapped[QuizType]
    created_at: Mapped[datetime] = mapped_column(default=datetime.now)


class Lesson(Base):
    __tablename__ = 'lessons'

    content: Mapped[str]

    quiz_id: Mapped[int | None] = mapped_column(ForeignKey('quizzes.id', ondelete='SET NULL'), nullable=True)
    quiz: Mapped[Quiz] = relationship(uselist=False, lazy='immediate')

