from datetime import datetime
from sqlalchemy.orm import Mapped, mapped_column
from src.database.db import Base
from sqlalchemy import BigInteger


class User(Base):
    __tablename__ = 'users'

    tg_user_id: Mapped[int] = mapped_column(BigInteger, index=True, unique=True)
    tg_chat_id: Mapped[int] = mapped_column(BigInteger, index=True)
    rang: Mapped[int] = mapped_column(default=0)
    joined_at: Mapped[datetime] = mapped_column(default=datetime.now)
    last_active: Mapped[datetime] = mapped_column(default=datetime.now)


