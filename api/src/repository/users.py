from src.database.models import User
from src.repository.base_sqlalchemy import SQLAlchemyRepository
from src.schemas.users import UserOutDTO, UserCreateDTO


class UserRepository(SQLAlchemyRepository):
    model = User

    async def get_user(self, tg_user_id: int):
        return await self.get_object(
            User.tg_user_id == tg_user_id,
            UserOutDTO
        )

    async def create(self, data: UserCreateDTO):
        return await self.create_object(
            data,
            UserOutDTO
        )

    async def get_all(self):
        return await self.get_all_objects(UserOutDTO)

    async def delete(self, tg_user_id: int):
        await self.delete_object(self.model.tg_user_id == tg_user_id)