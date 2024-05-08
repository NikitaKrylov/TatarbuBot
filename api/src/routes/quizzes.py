from fastapi import APIRouter, UploadFile
from src.schemas.quizzes import QuizOutDTO, AnswerOutDTO, QuizCreateDTO, AnswerCreateDTO, UserAnswerOutDTO, \
    UserAnswerCreateDTO
from src.repository.quizzes import QuizRepository, UserAnswerRepository, AnswerRepository

router = APIRouter(
    prefix="/quizzes",
    tags=['Quizzes']
)

quiz_repository = QuizRepository()
user_answers_repository = UserAnswerRepository()
answers_repository = AnswerRepository()


@router.get('/all', response_model=list[QuizOutDTO])
async def get_all_quizzes():
    return await quiz_repository.get_all()


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


@router.post('/answer')
async def apply_quiz_answer(answer_data: UserAnswerCreateDTO):
    return await user_answers_repository.apply_quiz_answer(answer_data)


@router.post('/{quiz_id}/answers/{answer_id}/image')
async def change_quiz_answer_image(quiz_id: int, answer_id: int, file: UploadFile):
    await answers_repository.set_answer_image(answer_id, file)


@router.post('/{quiz_id}/answers/{answer_id}/audio')
async def change_quiz_answer_audio(quiz_id: int, answer_id: int, file: UploadFile):
    await answers_repository.set_answer_audio(answer_id, file)



