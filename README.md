# Kaumil's Portfolio & AI Image Enhancer

A Next.js 15 portfolio website integrated with a custom Python FastAPI microservice for running advanced AI machine learning models (Real-ESRGAN upscaling) completely locally and via cloud.

## Features
- **Premium UI:** Dark mode, minimalist, high-end design using Framer Motion.
- **AI Image Enhancer:** A built-in drag-and-drop tool that uses real deep learning to upscale images up to 4x resolution while preserving transparency.
- **Microservice Architecture:** Complete separation of the frontend (Next.js) and the AI processing backend (Python FastAPI).

---

## How to Run Locally

You must start **two** servers simultaneously to use the full platform.

### 1. The Frontend (Next.js)
Open a terminal in the root directory and run:
```bash
npm install
npm run dev
```

### 2. The AI Backend (FastAPI + PyTorch)
Open a separate terminal, navigate to the `ai-service` directory, and run:
```bash
cd ai-service
pip install -r requirements.txt
python -m uvicorn main:app --reload
```
*Note: The first time you run this, make sure the model weights (`RealESRGAN_x4plus.pth`) are downloaded into the `ai-service/weights/` directory. You can run `python download_weights.py` to do this automatically.*

---

## Production Deployment Guide

Deploying this platform requires a **hybrid architecture**. You cannot host the AI backend on Vercel because Vercel has a 250MB size limit and 10-second timeout on serverless functions. PyTorch and the AI models require ~3GB of space and ~20 seconds of compute.

### Step 1: Deploy the Frontend to Vercel
1. Push this repository to GitHub.
2. Go to [Vercel.com](https://vercel.com/) and import the repository.
3. Keep the default Next.js build settings.
4. Add an Environment Variable in Vercel:
   - `NEXT_PUBLIC_AI_API_URL` = `[URL of your Python backend]` *(See Step 2)*
5. Click **Deploy**.

*(Note: You will need to update `UploadZone.tsx` to point to `process.env.NEXT_PUBLIC_AI_API_URL` instead of `http://127.0.0.1:8000` when going to production).*

### Step 2: Deploy the AI Backend to Hugging Face Spaces (or Render)
Because the backend needs heavy ML dependencies, it must be deployed as a Docker container.

**Deploying to Hugging Face Spaces (Free CPU & Generous GPU options):**
1. Create an account on [Hugging Face](https://huggingface.co/).
2. Create a new **Space**. Select **Docker** as the environment and **Blank** template.
3. Upload the contents of your `ai-service/` folder directly to the Space.
   - Specifically, ensure `Dockerfile`, `requirements.txt`, `main.py`, `pipeline.py`, and the `weights/` folder are uploaded.
4. Hugging Face will automatically build the Docker image and start your API.
5. Copy the Space's Direct URL and use it as your `NEXT_PUBLIC_AI_API_URL` in Vercel.

**Deploying to Render:**
1. Connect your GitHub to Render.com.
2. Create a new **Web Service**.
3. Point it to this repository, but set the **Root Directory** to `ai-service`.
4. Render will detect the `Dockerfile` and build the container automatically.
5. Make sure you select a tier that has enough RAM (at least 2GB) to load the models.
