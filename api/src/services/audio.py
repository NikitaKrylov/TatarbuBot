import logging
from googletrans import Translator
import aiohttp
from fastapi import HTTPException
from starlette import status


async def speach_to_text(file: bytes) -> str:

    async with aiohttp.ClientSession() as session:
        async with session.post('https://tat-asr.api.translate.tatar/listening/',
                                data={'file': file}, ssl=False) as response:
            if response.status != 200:
                raise HTTPException(status.HTTP_400_BAD_REQUEST, 'Неполучилось обработать данные')
            data = await response.json()

            return data['text']


def tatar_to_russian(text: str):
    translator = Translator()
    return translator.translate(text, dest='ru')

