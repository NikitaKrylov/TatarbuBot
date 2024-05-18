from pydantic import BaseModel


class WordOutDTO(BaseModel):
    id: int
    text: str
    translation: str
    transcription: str
    audio: str | None


class WordCreateDTO(BaseModel):
    text: str
    translation: str
    transcription: str
    audio: str | None

