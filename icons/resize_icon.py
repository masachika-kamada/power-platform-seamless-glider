from PIL import Image


def resize_icon(input_path, output_path, size):
    img = Image.open(input_path).convert("RGBA")
    img = img.resize(size, Image.LANCZOS)
    img.save(output_path)


def main():
    input_path = "icon.png"
    sizes = [
        (16, 16),
        (48, 48),
        (128, 128),
    ]
    output_paths = [
        "icon16.png",
        "icon48.png",
        "icon128.png",
    ]
    for size, output_path in zip(sizes, output_paths):
        resize_icon(input_path, output_path, size)


if __name__ == "__main__":
    main()
