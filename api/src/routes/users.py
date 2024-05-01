from fastapi import APIRouter
from src.repository.users import UserRepository

from src.schemas.users import UserOutDTO, UserCreateDTO

router = APIRouter(
    prefix="/users",
)

user_repository = UserRepository()


@router.get('/all', response_model=list[UserOutDTO])
async def get_all_users():
    return await user_repository.get_all()


@router.get('/{tg_user_id}', response_model=UserOutDTO | None)
async def get_user(tg_user_id: int):
    return await user_repository.get_user(tg_user_id)


@router.post('', response_model=UserOutDTO)
async def create_user(data: UserCreateDTO):
    return await user_repository.create(data)


@router.delete('/{tg_user_id}')
async def delete_user(tg_user_id: int):
    await user_repository.delete(tg_user_id)
