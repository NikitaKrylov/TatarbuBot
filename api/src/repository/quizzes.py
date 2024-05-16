from src.database.db import async_session
from src.repository.base_sqlalchemy import SQLAlchemyRepository
from src.database.models import Quiz, QuizAnswer, UserAnswer, QuizType
from src.schemas.quizzes import QuizCreateDTO, AnswerCreateDTO, AnswerOutDTO, QuizOutDTO, UserAnswerCreateDTO, \
    UserAnswerOutDTO
from sqlalchemy import select, update, func, text
from starlette import status
from src.services.media import save_audio, save_image, delete_file


class QuizRepository(SQLAlchemyRepository):
    model = Quiz

    async def create(self, quiz: QuizCreateDTO) -> QuizOutDTO:
        async with async_session() as session:
            quiz_data = quiz.model_dump()
            quiz_data['answers'] = [QuizAnswer(**answer.model_dump()) for answer in quiz.answers]
            _quiz_db = Quiz(**quiz_data)
            session.add(_quiz_db)
            await session.commit()
            await session.refresh(_quiz_db)
            print(_quiz_db)
            return QuizOutDTO.model_validate(_quiz_db, from_attributes=True)

    async def get_all(self):
        async with async_session() as session:
            return await self.get_all_objects(
                session,
                QuizOutDTO
            )

    async def delete(self, _id: int):
        async with async_session() as session:
            await self.delete_object(
                session,
                self.model.id == _id
            )

    async def get_by_id(self, _id: int) -> QuizOutDTO | None:
        async with async_session() as session:
            return await self.get_object(
                session,
                self.model.id == _id,
                QuizOutDTO
            )

    async def set_quiz_image(self, quiz_id: int, file) -> None:
        quiz_db = await self.get_by_id(quiz_id)

        if not quiz_db:
            from http.client import HTTPException
            raise HTTPException(status.HTTP_404_NOT_FOUND, 'Quiz not found')

        if quiz_db.image:
            await delete_file(quiz_db.image[1:])

        file_path = await save_image(file)

        async with async_session() as session:
            stmp = update(self.model).values(image=file_path).where(self.model.id == quiz_id)
            await session.execute(stmp)
            await session.commit()

    async def set_quiz_audio(self, quiz_id: int, file):
        quiz_db = await self.get_by_id(quiz_id)

        if not quiz_db:
            from http.client import HTTPException
            raise HTTPException(status.HTTP_404_NOT_FOUND, 'Quiz not found')

        if quiz_db.audio:
            await delete_file(quiz_db.audio[1:])

        file_path = await save_audio(file)

        async with async_session() as session:
            stmp = update(self.model).values(audio=file_path).where(self.model.id == quiz_id)
            await session.execute(stmp)
            await session.commit()


class AnswerRepository(SQLAlchemyRepository):
    model = QuizAnswer

    async def get_by_id(self, _id: int) -> AnswerOutDTO | None:
        async with async_session() as session:
            return await self.get_object(
                session,
                self.model.id == _id,
                AnswerOutDTO
            )

    async def set_answer_image(self, answer_id: int, file) -> None:
        answer_db = await self.get_by_id(answer_id)

        if not answer_db:
            from http.client import HTTPException
            raise HTTPException(status.HTTP_404_NOT_FOUND, 'Related answer not found')

        if answer_db.image:
            await delete_file(answer_db.image[1:])

        file_path = await save_image(file)

        async with async_session() as session:
            stmp = update(self.model).values(image=file_path).where(self.model.id == answer_id)
            await session.execute(stmp)
            await session.commit()

    async def set_answer_audio(self, answer_id: int, file):
        answer_db = await self.get_by_id(answer_id)

        if not answer_db:
            from http.client import HTTPException
            raise HTTPException(status.HTTP_404_NOT_FOUND, 'Related answer not found')

        if answer_db.audio:
            await delete_file(answer_db.audio[1:])

        file_path = await save_audio(file)

        async with async_session() as session:
            stmp = update(self.model).values(audio=file_path).where(self.model.id == answer_id)
            await session.execute(stmp)
            await session.commit()


class UserAnswerRepository(SQLAlchemyRepository):
    model = UserAnswer

    async def apply_quiz_answer(self, answer_data: UserAnswerCreateDTO):
        async with async_session() as session:
            _obj = self.model(**answer_data.model_dump())
            session.add(_obj)
            await session.commit()
            await session.refresh(_obj)

            return await self._get_by_id(session, _obj.id)

    async def _get_by_id(self, session, _id: int):
        query = (
            select(UserAnswer.id, UserAnswer.quiz_id, UserAnswer.answer_id, UserAnswer.created_at, QuizAnswer.is_correct, Quiz.quiz_type, UserAnswer.user_id)
            .join(QuizAnswer, QuizAnswer.id == UserAnswer.answer_id)
            .join(Quiz, Quiz.id == UserAnswer.quiz_id)
        ).where(UserAnswer.id == _id)
        result = (await session.execute(query)).fetchone()

        if not result:
            return None

        return UserAnswerOutDTO(
            id=result[0],
            quiz_id=result[1],
            answer_id=result[2],
            created_at=result[3],
            is_correct=result[4],
            quiz_type=result[5],
            user_id=result[6],
        )

    async def get_by_id(self, _id: int):
        async with async_session() as session:
            return await self._get_by_id(session, _id)

    async def get_answers_statistic(self, tg_user_id: int, quiz_type: QuizType | None = None):
        async with async_session() as session:
            # query = (
            #     select(Quiz.quiz_type, func.count(QuizAnswer.is_correct)).select_from(UserAnswer)
            #     .join(QuizAnswer, QuizAnswer.id == UserAnswer.answer_id)
            #     .join(Quiz, Quiz.id == UserAnswer.quiz_id)
            #     .group_by(Quiz.quiz_type)
            #     .where(UserAnswer.user_id == tg_user_id)
            # )
            # 'SUM(CASE WHEN quiz_answers.is_correct THEN 1 ELSE 0 END) * 100.0 / COUNT(*)'
            query = f"""SELECT quizzes.quiz_type, SUM(CASE WHEN quiz_answers.is_correct THEN 1 ELSE 0 END) * 100.0 / COUNT(*) FROM user_answers
                join quizzes on quizzes.id = user_answers.quiz_id
                join quiz_answers on quiz_answers.id = user_answers.answer_id
                WHERE user_answers.user_id = {tg_user_id}
                GROUP BY quizzes.quiz_type
                """
            result = await session.execute(text(query))
            return {i[0]: i[1] for i in result.all()}



