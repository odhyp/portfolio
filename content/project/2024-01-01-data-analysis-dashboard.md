+++
draft = false
featured = true
disableComments = false
title = "StreamlitApp: Data Analysis Dashboard"
slug = "data-analysis-dashboard"
date = 2024-09-03
categories = ["Python", "Pandas", "Streamlit"]
cover = "https://slidemodel.com/wp-content/uploads/20657-01-analytics-dashboard-powerpoint-template-3.jpg"
summary = "An interactive web application that allows users to upload datasets and perform various data analysis tasks"
codeUrl = "https://github.com/odhyp/portfolio"
liveUrl = "https://github.com/odhyp/portfolio"
docsUrl = ""
+++

Build an interactive web application that allows users to upload datasets and perform various data analysis tasks. The dashboard will use Streamlit for the web interface and Pandas for data manipulation and analysis.

{{< toc >}}

## Core Usage

This project will provide users with a user-friendly interface to explore and visualize their data. Users can upload CSV files, perform statistical analyses, generate plots, and filter data interactively. Streamlit will make it easy to create real-time updates and interactive features without requiring extensive web development knowledge.

```python
import pandas as pd

# Read data from a CSV file
data = pd.read_csv('data.csv')

# Perform basic analysis
mean = data['column_name'].mean()
print(f"Mean: {mean}")
```

## Contributing

Feel free to contribute by forking the project repo and request a PR. Please follow the [CONTRIBUTING](CONTRIBUTING.md) guideline.
