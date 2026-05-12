from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
import uvicorn
from pipeline import enhance_image_local

app = FastAPI(title="Kaumil AI Image Enhancer Service")

# Configure CORS so the Next.js frontend can communicate with it
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://192.168.1.4:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "AI Image Enhancer Service is Running locally!"}

@app.post("/api/v1/enhance")
async def enhance_endpoint(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File provided is not an image.")
        
    try:
        # Read the file contents
        contents = await file.read()
        
        # Run local enhancement pipeline
        enhanced_bytes = enhance_image_local(contents)
        
        # Return the enhanced image directly as a PNG response
        return Response(content=enhanced_bytes, media_type="image/png")
        
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        print(f"Server Error: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error during enhancement.")

if __name__ == "__main__":
    print("Starting local AI service on http://127.0.0.1:8000")
    uvicorn.run(app, host="127.0.0.1", port=8000)
