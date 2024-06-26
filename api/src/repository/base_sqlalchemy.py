from typing import Any, Type
from pydantic import BaseModel
from sqlalchemy import select, delete
from fastapi.exceptions import HTTPException
from src.database.db import async_session
from fastapi import status
from sqlalchemy.ext.asyncio import AsyncSession


class SQLAlchemyRepository:
    model = None

    async def get_object(self, session: AsyncSession,  expression: Any, model_schema: Type[BaseModel], joins: list[Any] = None,
                         allow_none: bool = True):
        query = select(self.model).where(expression)
        result = (await session.execute(query)).scalar_one_or_none()

        if result is None:
            if allow_none:
                return result
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Not Found')

        return model_schema.model_validate(result, from_attributes=True)

    async def create_object(self, session: AsyncSession, data: BaseModel, model_schema: Type[BaseModel]):
        _obj = self.model(**data.model_dump())
        session.add(_obj)
        await session.commit()
        await session.refresh(_obj)
        return model_schema.model_validate(_obj, from_attributes=True)

    async def get_all_objects(self, session: AsyncSession, model_schema: Type[BaseModel], joins: list[Any] = None):
        query = select(self.model)

        if joins:
            for join in joins:
                query = query.options(join)

        result = (await session.execute(query)).scalars()
        return [model_schema.model_validate(i, from_attributes=True) for i in result]

    async def get_or_create_object(self, session: AsyncSession, data: BaseModel, expression: Any, model_schema: Type[BaseModel], joins: list[Any] = None):
        query = select(self.model).where(expression)
        result = (await session.execute(query)).scalar_one_or_none()
        if result is not None:
            return False, model_schema.model_validate(result, from_attributes=True)

        _obj = self.model(**data.model_dump())
        session.add(_obj)
        await session.commit()
        await session.refresh(_obj)
        return True, model_schema.model_validate(_obj, from_attributes=True)

    async def delete_object(self, session: AsyncSession, expression: Any):
        stmp = delete(self.model).where(expression)
        await session.execute(stmp)
        await session.commit()
