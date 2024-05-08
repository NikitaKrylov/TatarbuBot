import logging

from aiogram import Router, F
from aiogram.filters.command import CommandStart, Command
from aiogram.types import Message, InlineKeyboardButton, InlineKeyboardMarkup
from aiogram.fsm.context import FSMContext
from src.shared.forms import PronunciationTrainForm

router = Router(name=__name__)


@router.message(Command('train'))
async def start_pronunciation_trainer(message: Message, state: FSMContext):
    cancel_keyboard = InlineKeyboardMarkup(
        inline_keyboard=[[
            InlineKeyboardButton(text='Отменить', callback_data='cancel')
        ]]
    )
    await message.answer('Запиши войс со следующей фрозой: \'Hello world\'', reply_markup=cancel_keyboard)
    await state.set_state(PronunciationTrainForm.voice)


# @router.message(PronunciationTrainForm.voice, F.is_not())
# async def process_invalid_pronunciation_trainer_voice(message: Message, state: FSMContext):
#     await message.reply('Пожалуйста, отправь войс')
#     await state.set_state(PronunciationTrainForm.voice)

@router.message(PronunciationTrainForm.voice)
async def process_pronunciation_trainer_voice(message: Message, state: FSMContext):
    logging.info(message.voice)
    await state.update_data(voice=message.voice)
    await state.clear()
    await message.answer('OK')
