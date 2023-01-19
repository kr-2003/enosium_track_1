from fastapi import APIRouter, HTTPException, Depends
from schemas import Login, users_serializer
from hashing import Hash
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from database import users
import jwttoken
router = APIRouter(
    tags=["Authentication"]
)



