from fastapi import APIRouter, UploadFile, File
from src.schemas.lessons import LessonCreateDTO, LessonOutDTO
from src.repository.lessons import LessonsRepository


router = APIRouter(
    prefix='/lessons',
    tags=['Lessons']
)

repository = LessonsRepository()


@router.get('/all', response_model=list[LessonOutDTO])
async def get_all_lessons():
    return await repository.all()


@router.get('/{lesson_id}', response_model=LessonOutDTO | None)
async def get_lesson(lesson_id: int):
    return await repository.get_by_id(lesson_id)


@router.post('')
async def create_lesson_with_quizzes(lesson: LessonCreateDTO):
    return await repository.create(lesson)



@router.post('/{lesson_id}/image')
async def set_lesson_image(lesson_id: int, image_file: UploadFile = File(...)):
    return await repository.set_lesson_image(lesson_id, image_file)