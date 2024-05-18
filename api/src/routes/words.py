from fastapi import APIRouter

from src.repository.words import WordsRepository
from src.schemas.words import WordOutDTO, WordCreateDTO

router = APIRouter(
    prefix='/words',
    tags=['Words']
)

repository = WordsRepository()


@router.get('/all', response_model=list[WordOutDTO])
async def get_all_words():
    return await repository.all()


@router.get("/random", response_model=WordOutDTO)
async def get_random_word():
    return await repository.random_word()


@router.post("", response_model=WordOutDTO)
async def create_word(word: WordCreateDTO):
    return await repository.create(word)


