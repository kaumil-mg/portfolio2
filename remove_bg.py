import sys
from rembg import remove
from PIL import Image

def process_image(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        input_image = Image.open(input_path)
        output_image = remove(input_image)
        output_image.save(output_path)
        print(f"Successfully saved transparent image to {output_path}")
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    input_path = "public/happy_boy.png"
    output_path = "public/happy_boy_transparent.png"
    process_image(input_path, output_path)
