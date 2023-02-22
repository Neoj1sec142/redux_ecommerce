import json
import os
import requests


def download_image(image_url, image_filename):
    response = requests.get(image_url)
    if response.status_code == 200:
        with open(image_filename, 'wb') as f:
            f.write(response.content)


def download_product_images(products, image_dir):
    for product in products:
        fields = product.get('fields')
        image_url = fields.get('image')
        if image_url:
            image_filename = os.path.join(image_dir, os.path.basename(image_url))
            download_image(image_url, image_filename)


if __name__ == '__main__':
    # Load products from JSON file
    with open('./seed.json') as f:
        products = json.load(f)

    # Download product images to a directory
    image_dir = 'product_images'
    os.makedirs(image_dir, exist_ok=True)
    download_product_images(products, image_dir)