import logging

from celery import Celery
from src.repository.api import APIRepository
import asyncio
from src.shared.config import config
from main import bot

app = Celery('hello', broker='redis://redis:6379/0')
api = APIRepository(config.api_url)

loop = asyncio.get_event_loop()

async def notify_users():
    users = await api.get_all_users()

    for user in users:
        await bot.send_message(user['tg_chat_id'], "👺 Учи татарский, долбаеб ")
    return users


@app.task
def test_task():
    return loop.run_until_complete(notify_users())


app.conf.beat_schedule = {
    'add-every-150-seconds': {
        'task': 'src.workers.app.test_task',
        'schedule': 150.0
    },
}
app.conf.timezone = 'UTC'