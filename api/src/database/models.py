from datetime import datetime
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, BigInteger
from src.database.db import Base


class User(Base):
    __tablename__ = 'users'

    tg_user_id: Mapped[int] = mapped_column(BigInteger, index=True, unique=True)
    tg_chat_id: Mapped[int] = mapped_column(BigInteger, index=True)
    rang: Mapped[int] = mapped_column(default=0)
    joined_at: Mapped[datetime] = mapped_column(default=datetime.now)
    last_active: Mapped[datetime] = mapped_column(default=datetime.now)


class Quiz(Base):
    __tablename__ = 'quizzes'

    name: Mapped[str]
    tooltip: Mapped[str | None] = mapped_column(nullable=True, default=None)
    multiple_answers: Mapped[bool] = mapped_column(default=False)
    image: Mapped[str | None] = mapped_column(nullable=True, default=None)
    audio: Mapped[str | None] = mapped_column(nullable=True, default=None)
    explanation: Mapped[str | None] = mapped_column(nullable=True, default=None)

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

    quiz_id: Mapped[int] = mapped_column(ForeignKey('quizzes.id', ondelete='SET NULL'), nullable=True)
    answer_id: Mapped[int] = mapped_column(ForeignKey('quiz_answers.id', ondelete='SET NULL'), nullable=True)
    created_at: Mapped[datetime] = mapped_column(default=datetime.now)
