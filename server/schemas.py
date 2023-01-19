from pydantic import BaseModel
from typing import Optional

class Login(BaseModel):
    username: str
    password: str
    
    

class User(BaseModel):
    username: str
    password: str
    

def user_serializer(user) -> dict:
    return {
        "id": str(user["_id"]),
        "username": user["username"],
        "password": user["password"]
    }


def users_serializer(users) -> list:
    return [user_serializer(user) for user in users]

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None