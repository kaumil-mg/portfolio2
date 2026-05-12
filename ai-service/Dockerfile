FROM python:3.10-slim

# Install system dependencies required for OpenCV and the ncnn binary
RUN apt-get update && apt-get install -y \
    libgl1 \
    libglib2.0-0 \
    wget \
    unzip \
    libvulkan1 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Create ncnn directory and download the Linux executable
RUN mkdir -p realesrgan_ncnn
RUN wget https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-ubuntu.zip -O realesrgan.zip \
    && unzip realesrgan.zip -d realesrgan_ncnn \
    && rm realesrgan.zip \
    && chmod +x realesrgan_ncnn/realesrgan-ncnn-vulkan

# Copy application files
COPY . .

# Expose the port (Hugging Face Spaces uses 7860 by default)
EXPOSE 7860

# Run the FastAPI server
# We use shell form to allow environment variable expansion if provided by the host (like Render)
CMD uvicorn main:app --host 0.0.0.0 --port ${PORT:-7860}
