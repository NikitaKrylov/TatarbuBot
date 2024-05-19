import asyncio
import logging
from aiogram import Bot, Dispatcher, types, F
from aiogram.filters.command import CommandStart, Command
from aiogram.types.web_app_info import WebAppInfo
from aiogram.types.menu_button_web_app import MenuButtonWebApp
from aiogram.types.inline_keyboard_button import InlineKeyboardButton
from aiogram.types.inline_keyboard_markup import InlineKeyboardMarkup
from src.shared.config import config
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton
from src.repository.api import APIRepository
from src.routes.trains import router as trains_router
from aiogram.enums.parse_mode import ParseMode
from aiogram.fsm.context import FSMContext
from aiogram.types.input_file import FSInputFile


bot = Bot(token=config.bot_token)
dp = Dispatcher()
api = APIRepository(config.api_url)

logging.basicConfig(level=logging.INFO)

web_app_main = WebAppInfo(url=config.web_app_base_url)
web_app_reg = WebAppInfo(url=config.reg_route())

start_photo = FSInputFile("static/start_photo.jpg")


@dp.message(CommandStart())
async def cmd_start(message: types.Message):
    inline_keyboard = InlineKeyboardMarkup(
        inline_keyboard=[[
            InlineKeyboardButton(text='📝 Заполнить', web_app=web_app_reg),
        ]]
    )
    reply_kb = ReplyKeyboardMarkup(
        keyboard=[[
            KeyboardButton(text='К уроку', web_app=web_app_main)
        ]],
        resize_keyboard=True
    )
    existed_user = await api.get_user_by_tg_id(message.from_user.id)
    logging.info(str(existed_user))
    if existed_user:
        return await message.answer(f'Привет, {message.from_user.first_name or message.from_user.username}, я уже знаю тебя. Нажми на кнопку, если хочешь обновить данные о себе.', reply_markup=reply_kb)

    created_user = await api.create_user({
        'tg_user_id': message.from_user.id,
        'tg_chat_id': message.chat.id,
    })
    logging.info(str(created_user))

    await message.answer_photo(start_photo, f'*Привет\\, {message.from_user.first_name or message.from_user.username}\\!* \nХочешь выучить *Татарский*\\? Наше web app приложение поможет тебе с этой затеей\\, ты будешь изучать язык и попутно погружаться в историю и культуру республики Татарстан\\. А чтобы обучение тебе не наскучило\\, мы добавили уникальную фишку \\- изучение языка посредствам как народных\\, так и современных песен\\. Бери микрофон в руки и быстрее изучать Татарский\\!', parse_mode=ParseMode.MARKDOWN_V2, reply_markup=reply_kb)
    return await message.answer(f'Ну что\\, готов приступить к обучению\\? Скорее *жми кнопку* 👇🏼\\, начнем c небольшого интервью\\.', reply_markup=inline_keyboard, parse_mode=ParseMode.MARKDOWN_V2)


@dp.callback_query(F.data == 'cancel')
async def process_cancel_state(callback: types.CallbackQuery, state: FSMContext):
    if state:
        await state.clear()

    await callback.message.delete()
    await callback.answer()


# Запуск процесса поллинга новых апдейтов
async def main():
    dp.include_router(trains_router)
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
