from fastapi import APIRouter, UploadFile, File

router = APIRouter()

@router.post("/upload")
async def uploadFile(file: UploadFile = File()):
    content = await file.read()
    return content