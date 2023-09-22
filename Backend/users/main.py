import asyncpg
from fastapi import FastAPI, Body, Depends
import uvicorn
from app.model import PostSchema
from app.model import PostSchema, UserSchema, UserLoginSchema
from app.auth.jwt_handler import signJWT
from app.auth.jwt_bearer import JwtBearer
from decouple import config

posts = [
    {
        "id": 1,
        "title": "tigers 🐯",
        "text": "Tigers are the largest living cat species and a members of the genus Panthera"
    },
    {
        "id": 2,
        "title": "penguins 🐧",
        "text": "Penguins are a group of aquatic filghtless birds",
    },
    {
      "id": 3,
      "title": "koalas 🐨",
        "text": "Koala is arboreal herbivorous native to Astralia",
    }
]

users = []

app = FastAPI()
PASSWORD = config("Password_database")

@app.on_event("startup")
async def startup():
    app.db_pool = await asyncpg.create_pool(
        user="quera", password=PASSWORD, database="quera",
        host="localhost")
    async with app.db_pool.acquire() as connection:
        await connection.execute('''
        CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
        )
        ''')

@app.on_event("shutdown")
async def shutdown():
    await app.db_pool.close()

@app.get("/")
async def read_root():
    async with app.db_pool.acquire() as connection:
        result = await connection.fetch("SELECT 1")
        return {"result": result[0][0]}

#1 Get - for testing
@app.get("/", tags=['test'])
async def root():
    return {"message": "Hello World"}

#2 Get Posts
@app.get("/posts", tags=["posts"])
def get_posts():
    return {"data": posts}


#3 Get single post {id}
@app.get("/posts/{id}", tags=[posts])
def get_one_post(id: int):
    if id > len(posts):
        return{
            "error": "Post with this ID does not exist!"
        }

    for post in posts:
        if post["id"] == id:
            return {
                "data": post
            }

#4 Post a blog post [A handler for creating apost]
@app.post("/posts", dependencies=[Depends(JwtBearer)], tags=["posts"])
def add_post(post: PostSchema):
    post.id = len(posts) + 1
    posts.append(post.dict())
    return {
        "info": "Post Added"
    }

#5 User Signup [ Create a new user ]
async def create_customer(connection, customer):
    query = '''
    INSERT INTO customer (username, first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id
    '''
    record = await connection.fetchrow(query, customer.username, customer.first_name, customer.last_name, customer.email, customer.password)
    return record['id']

@app.post("/user/signup", tags=["user"])
async def user_signup(customer: UserSchema = Body(default=None)):
    async with app.db_pool.acquire() as connection:
        customer_id = await create_customer(connection, customer)
    return signJWT(customer.email)

async def check_user(connection, data: UserLoginSchema):
    query = '''
    SELECT email, password FROM customer WHERE email=$1 AND password=$2
    '''
    result = await connection.fetchrow(query, data.email, data.password)
    if result is not None:
        return True
    return False

#6 User Login
@app.post("/user/login", tags=["user"])
async def user_login(data: UserLoginSchema = Body(default=None)):
    async with app.db_pool.acquire() as connection:
        if await check_user(connection, data):
            return signJWT(data.email)
        else:
            return {"error": "Invalid login details!"}
    
