import asyncio
import logging
from aiogram import Bot, Dispatcher, types
from aiogram.filters.command import CommandStart
from aiogram.types.web_app_info import WebAppInfo
from aiogram.types.menu_button_web_app import MenuButtonWebApp
from aiogram.types.inline_keyboard_button import InlineKeyboardButton
from aiogram.types.inline_keyboard_markup import InlineKeyboardMarkup
from src.shared.config import config
from src.repository.api import APIRepository
import json

bot = Bot(token=config.bot_token)
dp = Dispatcher()
api = APIRepository(config.api_url)

logging.basicConfig(level=logging.INFO)

web_app_info = WebAppInfo(url=config.web_app_base_url)


@dp.message(CommandStart())
async def cmd_start(message: types.Message):
    inline_keyboard = InlineKeyboardMarkup(
        inline_keyboard=[[
            InlineKeyboardButton(text='Тест', web_app=web_app_info),
            InlineKeyboardButton(text='Темы', web_app=web_app_info),
            InlineKeyboardButton(text='Задания', web_app=web_app_info),
        ]]
    )
    existed_user = await api.get_user_by_tg_id(message.from_user.id)
    logging.info(str(existed_user))
    if existed_user:
        return await message.answer(f'Привет, {message.from_user.first_name or message.from_user.username}, я уже знаю тебя.')

    created_user = await api.create_user({
        'tg_user_id': message.from_user.id,
        'tg_chat_id': message.chat.id,
    })
    logging.info(str(created_user))

    return await message.answer(f'Будем знакомы, {message.from_user.first_name or message.from_user.username}, иди учи татарский', reply_markup=inline_keyboard)


# Запуск процесса поллинга новых апдейтов
async def main():
    await bot.set_chat_menu_button(menu_button=MenuButtonWebApp(
        text="Lessons",
        web_app=web_app_info
    ))
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
