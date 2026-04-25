from fastapi import FastAPI
from backend.api.v1 import router as fileRouter
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(fileRouter)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message" : "Application is running"}
