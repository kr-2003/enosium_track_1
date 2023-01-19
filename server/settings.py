from pydantic import BaseSettings


class Settings(BaseSettings):
    MONGO_URL: str = "mongodb+srv://enosium_database:enosium@cluster0.xt0wxbu.mongodb.net/?retryWrites=true&w=majority"

settings = Settings()