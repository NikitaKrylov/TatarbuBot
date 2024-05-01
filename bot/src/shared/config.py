from pydantic_settings import BaseSettings


class Config(BaseSettings):
    bot_token: str
    api_url: str
    web_app_base_url: str


config = Config(_env_file='bot.env')

