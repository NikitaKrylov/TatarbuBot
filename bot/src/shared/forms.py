from aiogram.fsm.state import State, StatesGroup


class PronunciationTrainForm(StatesGroup):
    voice = State()


