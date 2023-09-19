from fastapi import FastAPI, Body, Depends
import uvicorn
from app.model import PostSchema
from app.model import PostSchema, UserSchema, UserLoginSchema
from app.auth.jwt_handler import signJWT
from app.auth.jwt_bearer import JwtBearer

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
@app.post("user/signup", tags=["user"])
def user_signup(user: UserSchema=Body(default=None)):
    users.append(user)
    return signJWT(user.email)

def check_user(data: UserLoginSchema):
    for user in users:
        if user.email == data.email and user.password == data.password:
            return True
        return False

@app.post("/user/login", tags=["user"])
def user_login(user: UserLoginSchema = Body(default=None)):
    if check_user(user):
        return signJWT(user.email)
    else:
        return {
            "error": "Invalid login details!"
        }

