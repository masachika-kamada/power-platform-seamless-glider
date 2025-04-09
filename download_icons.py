import os
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup


def get_favicon_url(site_url):
    response = requests.get(site_url)
    soup = BeautifulSoup(response.text, "html.parser")
    icon_link = soup.find("link", rel=lambda x: x and "icon" in x.lower())
    if icon_link:
        icon_url = icon_link.get("href")
        return urljoin(site_url, icon_url)
    return None


def download_favicon(favicon_url, save_path):
    response = requests.get(favicon_url, stream=True)
    if response.status_code == 200:
        with open(save_path, "wb") as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)
        print(f"Favicon saved to {save_path}")
    else:
        print("Failed to download favicon")


def main():
    site_urls = {
        "ppac":           "https://admin.powerplatform.microsoft.com/",
        "power_apps":     "https://make.powerapps.com/",
        # "power_automate": "https://make.powerautomate.com/",
        "power_pages":    "https://make.powerpages.microsoft.com/",
        "copilot_studio": "https://copilotstudio.microsoft.com/",

    }
    for site_name, site_url in site_urls.items():
        print(f"{site_name}: {site_url}")
        favicon_url = get_favicon_url(site_url)
        if favicon_url:
            print(f"Favicon URL: {favicon_url}")
            os.makedirs("resources", exist_ok=True)
            filename = f"resources/{site_name}.ico"
            print(f"Filename: {filename}")
            download_favicon(favicon_url, filename)
        else:
            print("Favicon not found")


if __name__ == "__main__":
    main()
