+++
draft = false
featured = true
disableComments = false
title = "Interactive Data Visualization Tool"
slug = "interactive-data-visualization-tool"
date = 2024-09-03
categories = ["Python", "Pandas", "Numpy", "Streamlit", "GithubActions"]
cover = "https://www.xenonstack.com/hubfs/interactive-data-visualization.png"
summary = "An interactive tool that allows users to upload datasets and create various types of visualizations"
codeUrl = "https://github.com/odhyp/portfolio"
liveUrl = "https://github.com/odhyp/portfolio"
docsUrl = ""
+++

Build an interactive tool that allows users to upload datasets and create various types of visualizations. The backend will use Python and Pandas for data processing, while Streamlit will provide an interactive web interface. GitHub Actions will automate testing and deployment.

{{< toc >}}

This project aims to create a tool that helps users visualize and understand their data through interactive charts and graphs. Users can upload data files, select different types of visualizations (e.g., bar charts, scatter plots), and customize their charts. Streamlit will make it easy to create an interactive experience, while GitHub Actions will ensure that updates and tests are handled automatically.

## Get Started

Pillow is a Python Imaging Library that simplifies working with images. This script resizes a batch of images to a specified resolution or aspect ratio:

```python
from PIL import Image
import os

input_folder = '/path/to/images'
output_folder = '/path/to/resized_images'
desired_size = (100, 100)

for filename in os.listdir(input_folder):
    with Image.open(os.path.join(input_folder, filename)) as img:
        img.thumbnail(desired_size)
        img.save(os.path.join(output_folder, filename))
```

## Example Usage

```python
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

smtp_server = 'smtp.example.com'
sender_email = 'your_email@example.com'
receiver_email = 'recipient@example.com'
password = 'your_password'

message = MIMEMultipart()
message['From'] = sender_email
message['To'] = receiver_email
message['Subject'] = 'Sample Email Subject'

body = 'This is a sample email message.'
message.attach(MIMEText(body, 'plain'))

with smtplib.SMTP(smtp_server, 587) as server:
    server.starttls()
    server.login(sender_email, password)
    server.sendmail(sender_email, receiver_email, message.as_string())
```

Need to send automated emails? Python’s smtplib library can help. This script sends emails programmatically.
