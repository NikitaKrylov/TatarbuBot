from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from src.routes.users import router as users_router
from src.routes.quizzes import router as quiz_router
from src.routes.lessons import router as lessons_router
from src.routes.words import router as words_router
from src.database.db import init_models
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Before server started
    #	await MySQLTools.check_connection()
    #	RedisTools.check_connection()
    # await healthcheck()
    # await init_models()
    print('database reseted')
    yield
    # After server has shuted down
    # logging.info('Server shutting down.\n\n\n')

app = FastAPI(root_path="/api", lifespan=lifespan)
origins = [
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:3000',
    '*'
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

app.mount("/media", StaticFiles(directory="media/"), name="media")

app.include_router(users_router)
app.include_router(quiz_router)
app.include_router(words_router)
app.include_router(lessons_router)

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)


