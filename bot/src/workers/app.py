# import logging
# from datetime import datetime
#
# from celery import Celery
# from src.repository.api import APIRepository
# import asyncio
# from src.shared.config import config
# from main import bot
#
# app = Celery('hello', broker='redis://redis:6379/0')
# api = APIRepository(config.api_url)
#
# loop = asyncio.get_event_loop()
#
# async def notify_users():
#     users = await api.get_all_users()
#
#     for user in users:
#         try:
#             await bot.send_message(user['tg_chat_id'], "👺 Учи татарский, долбаеб ")
#         except Exception as e:
#             logging.exception(f'Cant sent message to user with id {user.get('tg_chat_id', -1)}', exc_info=True)
#
#     return users
#
#
# @app.task
# def test_task():
#     return loop.run_until_complete(notify_users())
#
#
# test_task.apply_async(eta=datetime(2024, 5, 19, 6, 15))
#
# # app.conf.beat_schedule = {
# #     'add-every-150-seconds': {
# #         'task': 'src.workers.app.test_task',
# #         'schedule': 300.0
# #     },
# # }
# app.conf.timezone = 'UTC'