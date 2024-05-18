from pydantic_settings import BaseSettings


class Config(BaseSettings):
    bot_token: str
    api_url: str
    web_app_base_url: str

    def reg_route(self):
        return self.web_app_base_url + '/reg'

    def main_route(self):
        # TODO rewrite main_route
        return self.web_app_base_url + '/something'

    def quiz_route(self, quiz_id: int):
        # TODO rewrite show_quiz_route
        return self.web_app_base_url + f'/quizzes/{quiz_id}'

    def lesson_list_route(self):
        # TODO rewrite lesson_list_route
        return self.web_app_base_url + 'lessons'

    def lesson_detail_route(self, lesson_id: int):
        # TODO rewrite lesson_route
        return self.lesson_list_route() + f'/lessons/{lesson_id}'

    def profile_route(self):
        # TODO rewrite profile_route
        return self.web_app_base_url + '/profile'


config = Config(_env_file='bot.env')
