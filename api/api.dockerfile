FROM python:3.12.2

WORKDIR /api

COPY ./requirements.txt ./requirements.txt
RUN pip install -r requirements.txt

RUN mkdir -p ./logs
RUN mkdir static

COPY . .

CMD ["python3", "main.py"]
