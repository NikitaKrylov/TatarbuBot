from celery import Celery


app = Celery('hello', broker='redis://redis:6379/0')


@app.task
def test_task():
    print('test_task')


# app.conf.beat_schedule = {
#     'add-every-30-seconds': {
#         'task': 'src.workers.app.test_task',
#         'schedule': 10.0
#     },
# }
# app.conf.timezone = 'UTC'