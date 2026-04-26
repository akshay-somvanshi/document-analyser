from fastapi import APIRouter, UploadFile, File
from backend.db.supabase import getSupabase
from google import genai
from google.genai import types

client = genai.Client()

router = APIRouter()

supabase = getSupabase()

@router.post("/upload")
async def uploadFile(file: UploadFile = File()):
    try:
        content = await file.read()
        # Decode bytes to string for Supabase text column
        text_content = content.decode("utf-8", errors="ignore")

        file_name = file.filename

        prompt = f"""Summarise the following document in 2-3 bullet points.

        Document: {text_content}
        """

        response = client.models.generate_content(
            model="gemini-3-flash-preview",
            contents=prompt,
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(
                    thinking_level=types.ThinkingLevel.LOW # For fast and low latency response
                )
            ),
        )

        summary = response.text
        
        response = (
            supabase.table("documents")
            .insert({
                "file_name": file_name, 
                "raw_text": text_content,
                "summary": summary
            })
            .execute()
        )

        # Return the generated ID
        new_id = response.data[0].get("id") if response.data else None
        return {"message": "File processed successfully", "summary": summary}
    
    except Exception as e:
        print(f"Error processing file: {e}")
        return {"error": str(e)}, 500

@router.get("/")
async def getDocumentSummary():
    try:
        response = (
            supabase.table("documents")
            .select("id, file_name, summary")
            .execute()
        )
        return {"documents": response.data}
    except Exception as e:
        return {"error": str(e)}, 500
