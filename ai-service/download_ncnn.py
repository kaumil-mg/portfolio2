import os
import urllib.request
import zipfile
import platform

DIR_NAME = "realesrgan_ncnn"
WIN_URL = "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-windows.zip"
LINUX_URL = "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-ubuntu.zip"

if __name__ == "__main__":
    if not os.path.exists(DIR_NAME):
        os.makedirs(DIR_NAME)
    
    system = platform.system()
    url = WIN_URL if system == "Windows" else LINUX_URL
    zip_path = os.path.join(DIR_NAME, "realesrgan.zip")
    
    print(f"Downloading RealESRGAN ncnn vulkan binary for {system}...")
    urllib.request.urlretrieve(url, zip_path)
    
    print("Extracting...")
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(DIR_NAME)
        
    os.remove(zip_path)
    print("Done! Executable is ready.")
