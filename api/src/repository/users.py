from src.database.db import async_session
from src.database.models import User
from src.repository.base_sqlalchemy import SQLAlchemyRepository
from src.schemas.users import UserOutDTO, UserCreateDTO


class UserRepository(SQLAlchemyRepository):
    model = User

    async def get_user(self, tg_user_id: int):
        async with async_session() as session:
            return await self.get_object(
                session,
                User.tg_user_id == tg_user_id,
                UserOutDTO
            )

    async def create(self, data: UserCreateDTO):
        async with async_session() as session:
            return await self.create_object(
                session,
                data,
                UserOutDTO
            )

    async def get_all(self):
        async with async_session() as session:
            return await self.get_all_objects(session, UserOutDTO)

    async def delete(self, tg_user_id: int):
        async with async_session() as session:
            await self.delete_object(session, self.model.tg_user_id == tg_user_id)


