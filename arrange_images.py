from PIL import Image
import os


def main():
    folder_path = "resources"

    image_paths = []

    for filename in os.listdir(folder_path):
        if filename.endswith((".png", ".jpg", ".jpeg", ".ico")):
            image_paths.append(os.path.join(folder_path, filename))

    os.makedirs("arranged", exist_ok=True)
    target_size = (32, 32)

    for image_path in image_paths:
        img = Image.open(image_path).convert("RGBA")
        img = img.resize(target_size, Image.LANCZOS)
        filename = os.path.basename(image_path)
        name, ext = os.path.splitext(filename)
        new_filename = os.path.join("arranged", f"{name}.png")
        img.save(new_filename)


if __name__ == "__main__":
    main()
