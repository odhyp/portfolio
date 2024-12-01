+++
draft = false
pinned = true
disableComments = false
title = "Automatic Web Scraping With Selenium and Github Actions"
slug = "automatic"
date = 2023-10-20
tags = ["python", "automation", "web-scraping", "selenium", "github-actions"]
cover = "https://repository-images.githubusercontent.com/498160631/1079d475-e70c-45b8-b8f3-30f60d80a5ab"
+++

In the digital age, the ability to collect data automatically from websites can be incredibly powerful. Web scraping is a technique used to extract data from websites programmatically. When combined with automation tools like Selenium and GitHub Actions, you can create a robust system for continuous data collection and processing. This blog post will guide you through setting up an automated web scraping system using Selenium for scraping and GitHub Actions for scheduling and automation.

## Introduction

Web scraping allows you to gather information from web pages for analysis or other purposes. Selenium is a popular tool for automating web interactions, which makes it ideal for web scraping tasks. GitHub Actions, on the other hand, enables you to automate workflows, including scheduling and running your scraping tasks on a regular basis. This combination provides a powerful solution for maintaining up-to-date datasets with minimal manual effort.

## Setting Up Your Environment

Before you can start web scraping, you need to set up your development environment. You'll need Python installed, along with Selenium and GitHub Actions.

### Installing Required Packages

First, install the required Python packages. Open a terminal and run:

```bash
pip install selenium
```

Additionally, you'll need a web driver for Selenium. For Chrome, download [ChromeDriver](https://sites.google.com/chromium.org/driver/) and ensure it’s in your system's PATH.

## Writing the Web Scraping Script

Let's create a simple Python script that uses Selenium to scrape data from a website. For this example, we'll scrape quotes from [Quotes to Scrape](http://quotes.toscrape.com/).

Create a file named `scrape_quotes.py` and add the following code:

```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time
import csv

# Set up Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")  # Run in headless mode

# Path to your ChromeDriver
service = Service('path/to/chromedriver')  # Update the path as necessary
driver = webdriver.Chrome(service=service, options=chrome_options)

# URL to scrape
url = 'http://quotes.toscrape.com/'
driver.get(url)

# Scrape data
quotes = driver.find_elements(By.CLASS_NAME, 'quote')

with open('quotes.csv', 'w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerow(['Quote', 'Author', 'Tags'])

    for quote in quotes:
        text = quote.find_element(By.CLASS_NAME, 'text').text
        author = quote.find_element(By.CLASS_NAME, 'author').text
        tags = ', '.join([tag.text for tag in quote.find_elements(By.CLASS_NAME, 'tag')])
        writer.writerow([text, author, tags])

driver.quit()
```

This script uses Selenium to navigate to the Quotes to Scrape website, extracts quotes, authors, and tags, and saves them to a CSV file.

## Automating the Scraping with GitHub Actions

To automate the execution of your scraping script, use GitHub Actions. Create a GitHub repository and add the following files:

### `scrape.yml`

In your GitHub repository, create a directory named `.github/workflows` and add a file named `scrape.yml` with the following content:

```yaml
name: Web Scraping

on:
  schedule:
    - cron: "0 0 * * *" # Runs every day at midnight UTC
  workflow_dispatch:

jobs:
  scrape:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Python
        uses: actions/setup-python@v3
        with:
          python-version: "3.x"

      - name: Install dependencies
        run: |
          pip install selenium

      - name: Download ChromeDriver
        run: |
          wget https://chromedriver.storage.googleapis.com/114.0.5735.90/chromedriver_linux64.zip
          unzip chromedriver_linux64.zip
          chmod +x chromedriver
          sudo mv chromedriver /usr/local/bin/

      - name: Run scraping script
        run: |
          python scrape_quotes.py

      - name: Upload CSV
        uses: actions/upload-artifact@v3
        with:
          name: quotes
          path: quotes.csv
```

### Explanation

- **Schedule**: The `cron` syntax specifies when the action should run. In this example, the action runs every day at midnight UTC.
- **Checkout code**: This step checks out your repository code.
- **Set up Python**: This step sets up Python in the GitHub Actions runner.
- **Install dependencies**: Installs Selenium using pip.
- **Download ChromeDriver**: Downloads and sets up ChromeDriver to work with Selenium.
- **Run scraping script**: Executes your scraping script.
- **Upload CSV**: Uploads the resulting CSV file as an artifact for later access.

## Running and Testing

1. Push your `scrape_quotes.py` and `.github` directory to your GitHub repository.
2. Go to the **Actions** tab of your repository on GitHub to see the workflow in action.
3. You can manually trigger the workflow or wait for the scheduled time to see the automated scraping in action.

## Conclusion

In this blog post, we've demonstrated how to set up an automated web scraping system using Selenium and GitHub Actions. By combining these powerful tools, you can efficiently collect and process data from websites on a regular basis, automating tasks that would otherwise require manual effort.

Feel free to expand on this setup by adding more complex scraping logic, handling different types of data, or incorporating additional automation steps. Happy scraping!
