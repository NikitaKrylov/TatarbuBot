import json
from typing import Any
import logging
import aiohttp
from starlette.exceptions import HTTPException
from starlette import status


class APIRepository:
    def __init__(self, base_url: str):
        self.base_url = base_url

    async def _get(self, path: str, *args, **kwargs):
        async with aiohttp.ClientSession() as session:
            async with session.get(self.base_url + path) as response:
                response_data = await response.json()
                logging.info(f'GET {path} | {response.status} -> {response_data}')

                if response.status != 200:
                    raise HTTPException(status_code=response.status, detail=response_data)

                return response_data



    async def _post(self, path: str, data: Any, *args, **kwargs):
        logging.info(f"POST {path} data {data}")
        async with aiohttp.ClientSession() as session:
            async with session.post(self.base_url + path, json=data) as response:
                response_data = await response.json()
                logging.info(f'POST {path} | {response.status} -> {response_data}')

                if response.status != 200:
                    raise HTTPException(status_code=response.status, detail=response_data)

                return response_data

    async def create_user(self, data: Any):
        return await self._post('/users', data)

    async def get_user_by_tg_id(self, tg_user_id: int):
        return await self._get(f'/users/{tg_user_id}')

    async def get_all_users(self):
        return await self._get('/users/all')


