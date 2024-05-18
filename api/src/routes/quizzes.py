import logging
from io import BytesIO

import aiohttp
from fastapi import APIRouter, UploadFile, File
from googletrans import Translator

from src.schemas.quizzes import QuizOutDTO, QuizCreateDTO, UserAnswerCreateDTO, UserAnswerOutDTO
from src.repository.quizzes import QuizRepository, UserAnswerRepository, AnswerRepository
from src.services.audio import speach_to_text

router = APIRouter(
    prefix="/quizzes",
    tags=['Quizzes']
)

quiz_repository = QuizRepository()
user_answers_repository = UserAnswerRepository()
answers_repository = AnswerRepository()


@router.get('/all', response_model=list[QuizOutDTO])
async def get_all_quizzes(offset: int = 0, limit: int = 100):
    return await quiz_repository.get_all(offset, limit)


@router.get('/{quiz_id}', response_model=QuizOutDTO | None)
async def get_quiz(quiz_id: int):
    return await quiz_repository.get_by_id(quiz_id)


@router.post('/{quiz_id}/image')
async def change_quiz_image(quiz_id: int, image: UploadFile):
    await quiz_repository.set_quiz_image(quiz_id, image)


@router.post('/{quiz_id}/audio')
async def change_quiz_audio(quiz_id: int, audio: UploadFile):
    await quiz_repository.set_quiz_audio(quiz_id, audio)


@router.post('', response_model=QuizOutDTO | None)
async def create_quiz(data: QuizCreateDTO):
    return await quiz_repository.create(data)


@router.delete('/{quiz_id}')
async def delete_quiz(quiz_id: int):
    await quiz_repository.delete(quiz_id)


@router.post('/{quiz_id}/audio/apply')
async def apply_quiz_answer_with_audio(quiz_id: int, tg_user_id: int,  audio_file: UploadFile = File()):
    file_bytes = await audio_file.read()
    return await user_answers_repository.apply_quiz_answer_with_audio(file_bytes, quiz_id, tg_user_id)


@router.post('/{quiz_id}/apply', response_model=UserAnswerOutDTO)
async def apply_quiz_answer(quiz_id: int, data: UserAnswerCreateDTO):
    return await user_answers_repository.apply_quiz_answer(data)


@router.post('/{quiz_id}/answers/{answer_id}/image')
async def change_quiz_answer_image(quiz_id: int, answer_id: int, file: UploadFile):
    await answers_repository.set_answer_image(answer_id, file)


@router.post('/{quiz_id}/answers/{answer_id}/audio', response_model=UserAnswerOutDTO)
async def change_quiz_answer_audio(quiz_id: int, answer_id: int, file: UploadFile):
    await answers_repository.set_answer_audio(answer_id, file)


@router.post('test_trans')
async def test_trans(audio_file: UploadFile = File()):
    file = await audio_file.read()
    tt_text = await speach_to_text(file)
    translator = Translator()
    translator.detect(tt_text)
    translated_text = translator.translate(tt_text, dest='ru')
    return translated_text.text

