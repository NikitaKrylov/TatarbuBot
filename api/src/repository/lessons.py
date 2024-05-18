from sqlalchemy import select, update
from starlette import status

from src.schemas.lessons import LessonOutDTO, LessonCreateDTO
from src.database.db import async_session
from src.database.models import Lesson, QuizAnswer
from src.repository.base_sqlalchemy import SQLAlchemyRepository
from src.database.models import Quiz
from src.services.media import delete_file, save_image


class LessonsRepository(SQLAlchemyRepository):
    model = Lesson

    async def all(self):
        async with async_session() as session:
            return await self.get_all_objects(
                session,
                LessonOutDTO
            )

    async def create(self, lesson: LessonCreateDTO):
        async with async_session() as session:
            _lesson_db = self.model(**lesson.model_dump())
            session.add(_lesson_db)
            await session.commit()
            await session.refresh(_lesson_db)
            return _lesson_db

    async def get_by_id(self, _id: int):
        async with async_session() as session:
            query = select(self.model).where(self.model.id == _id)
            result = (await session.execute(query)).scalar_one_or_none()
            return result

    async def set_lesson_image(self, _id: int, file):
        lesson_db = await self.get_by_id(_id)

        if not lesson_db:
            from http.client import HTTPException
            raise HTTPException(status.HTTP_404_NOT_FOUND, 'Lesson not found')

        if lesson_db.image:
            await delete_file(lesson_db.image[1:])

        file_path = await save_image(file)

        async with async_session() as session:
            stmp = update(self.model).values(image=file_path).where(self.model.id == _id)
            await session.execute(stmp)
            await session.commit()

