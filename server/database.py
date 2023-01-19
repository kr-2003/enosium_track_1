from settings import settings
from pymongo import MongoClient
conn = MongoClient(settings.MONGO_URL)

db = conn.enosium_database

users = db["users"]
