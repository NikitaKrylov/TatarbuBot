from pydantic import BaseModel
from datetime import datetime


class UserOutDTO(BaseModel):
    id: int
    tg_user_id: int
    tg_chat_id: int
    rang: int = 0
    joined_at: datetime
    last_active: datetime


class UserCreateDTO(BaseModel):
    tg_user_id: int
    tg_chat_id: int
