from select import select
from random import choice
from src.database.db import async_session
from src.database.models import Word
from src.repository.base_sqlalchemy import SQLAlchemyRepository
from src.schemas.words import WordCreateDTO, WordOutDTO


class WordsRepository(SQLAlchemyRepository):
    model = Word

    async def random_word(self) -> WordOutDTO:
        async with async_session() as session:
            query = select(Word)
            result = await session.execute(query)
            return WordOutDTO.model_validate(choice(result.scalars()), from_attributes=True)

    async def create(self, data: WordCreateDTO) -> WordOutDTO:
        async with async_session() as session:
            return self.create_object(
                session,
                data,
                WordOutDTO
            )

    async def all(self):
        async with async_session() as session:
            return await self.get_all_objects(
                session,
                WordOutDTO
            )


