import os
import urllib.request

WEIGHTS_DIR = "weights"
MODEL_URL = "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth"
MODEL_PATH = os.path.join(WEIGHTS_DIR, "RealESRGAN_x4plus.pth")

if __name__ == "__main__":
    if not os.path.exists(WEIGHTS_DIR):
        os.makedirs(WEIGHTS_DIR)
        print(f"Created {WEIGHTS_DIR} directory.")

    if not os.path.exists(MODEL_PATH):
        print(f"Downloading RealESRGAN_x4plus.pth (approx 67MB)...")
        urllib.request.urlretrieve(MODEL_URL, MODEL_PATH)
        print(f"Downloaded successfully to {MODEL_PATH}")
    else:
        print(f"Model weights already exist at {MODEL_PATH}")
