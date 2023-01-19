from fastapi import FastAPI, Depends, HTTPException
from router.authentication import router
from schemas import User
from hashing import Hash
from database import users
from schemas import users_serializer
from oauth2 import get_current_user
from fastapi.middleware.cors import CORSMiddleware
import schemas
import pickle
from fastapi.security import OAuth2PasswordRequestForm
import jwttoken


app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:3000",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def index():
    return {'detail': 'HomePage'}


@app.get("/protected")
def index(get_current_user: schemas.User = Depends(get_current_user)):
    return "You are logged in!!"


@app.get("/private")
def index(get_current_user: schemas.User = Depends(get_current_user)):
    return "You are logged in!!"


@app.post("/user")
async def create_user(request: User):
    hashed_password = Hash.bcrypt(request.password)
    request.password = hashed_password
    _id = users.insert_one(dict(request))
    user = users_serializer(users.find({"_id": _id.inserted_id}))
    return user


@app.get("/model")
def run_model():
    pickled_model = pickle.load(open('./model.pkl', 'rb'))
    ans = pickled_model.predict([[1.,   3.,   4., 348.,   1.,   3.,   0.,  44.,   2.,   3.,   2.,
                                  0.,   1.,   1.,  17.,   0.,   1.,   1.,   3.]])
    return ans


@app.post("/login")
def login(request: dict):
    # print(request["username"])
    # print(request["password"])
    # return request
    user = users_serializer(users.find({"username": request["username"]}))
    if not user:
        raise HTTPException(status_code=404, detail="Invalid Credentials")
    if not Hash.verify(user[0]["password"], request["password"]):
        raise HTTPException(status_code=404, detail="Wrong Password")
    # print(user)

    # return user
    access_token = jwttoken.create_access_token(
        data={"sub": user[0]["username"]}
    )
    # print(access_token)
    return {"access_token": access_token, "token_type": "bearer", "user": user}
