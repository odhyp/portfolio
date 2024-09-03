+++
draft = false
pinned = false
disableComments = false
title = "Using Github Actions for Continuous Integration in Data Manipulation Projects"
slug = "using-github-actions-for-continuous-integration-in-data-manipulation-projects"
date = 2024-03-24
tags = ["github-actions", "data-manipulation", "automation"]
cover = "https://res.cloudinary.com/endjin/image/upload/f_auto/q_80/assets/images/blog/2022/09/header-ci-with-github-actions.png"
+++

Continuous Integration (CI) is a crucial practice in modern software development, ensuring that code changes are automatically tested and integrated into the main branch. For data manipulation projects, CI can help automate the process of running tests, validating data, and ensuring that changes don't break your data pipelines. GitHub Actions is a powerful tool that allows you to automate these tasks directly within your GitHub repository. This blog post will guide you through setting up GitHub Actions for CI in a data manipulation project.

{{< toc >}}

## Introduction

Data manipulation projects often involve tasks such as data cleaning, transformation, and analysis. Ensuring that these processes work correctly and efficiently is crucial, especially when collaborating with a team. GitHub Actions enables you to automate testing and validation tasks, integrating them into your development workflow. In this tutorial, we will set up GitHub Actions to automatically run tests on a data manipulation project every time changes are pushed to the repository.

## Setting Up Your Environment

Before we dive into GitHub Actions, ensure you have a data manipulation project with tests set up. For this example, we’ll assume you have a Python project using Pandas for data manipulation and `pytest` for testing.

### Example Project Structure

Here’s a sample project structure:

```
data-manipulation-project/
├── data/
│   └── sample_data.csv
├── src/
│   ├── data_processing.py
│   └── __init__.py
├── tests/
│   ├── test_data_processing.py
│   └── __init__.py
├── .github/
│   └── workflows/
│       └── ci.yml
├── requirements.txt
└── README.md
```

### Sample Data and Code

- **`data/sample_data.csv`**: A sample CSV file used for testing.
- **`src/data_processing.py`**: Contains data manipulation functions.
- **`tests/test_data_processing.py`**: Contains tests for the functions in `data_processing.py`.

### Requirements File

Make sure you have a `requirements.txt` file listing your project dependencies:

```
pandas
pytest
```

## Creating a GitHub Actions Workflow

GitHub Actions workflows are defined in YAML files located in the `.github/workflows` directory of your repository. We’ll create a workflow that runs tests every time changes are pushed to the repository.

### Create Workflow File

Create a file named `ci.yml` in the `.github/workflows` directory with the following content:

```yaml
name: Continuous Integration

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Python
        uses: actions/setup-python@v3
        with:
          python-version: '3.x'

      - name: Install dependencies
        run: |
          pip install -r requirements.txt

      - name: Run tests
        run: |
          pytest
```

### Explanation

- **`name`**: Defines the name of the workflow.
- **`on`**: Specifies the events that trigger the workflow. In this case, the workflow runs on `push` and `pull_request` events to the `main` branch.
- **`jobs`**: Defines the jobs to run as part of the workflow.
  - **`test`**: The name of the job.
  - **`runs-on`**: Specifies the type of runner (e.g., `ubuntu-latest`).
  - **`steps`**: Defines the sequence of steps to execute.
    - **`Checkout code`**: Uses the `actions/checkout` action to clone the repository.
    - **`Set up Python`**: Uses the `actions/setup-python` action to set up the specified Python version.
    - **`Install dependencies`**: Installs project dependencies from `requirements.txt`.
    - **`Run tests`**: Runs tests using `pytest`.

## Writing Tests

Here’s a sample test file `tests/test_data_processing.py` for testing a function in `data_processing.py`:

```python
import pandas as pd
from src.data_processing import process_data

def test_process_data():
    # Load sample data
    df = pd.read_csv('data/sample_data.csv')
    
    # Apply data processing
    result = process_data(df)
    
    # Check expected results
    assert not result.empty, "The result should not be empty"
    assert 'expected_column' in result.columns, "The result should contain 'expected_column'"
```

## Running the Workflow

Once you push the `ci.yml` file to your GitHub repository, GitHub Actions will automatically start running the workflow on each push or pull request to the `main` branch. You can view the status and logs of your workflow in the **Actions** tab of your GitHub repository.

## Conclusion

In this blog post, we’ve demonstrated how to set up Continuous Integration for a data manipulation project using GitHub Actions. By automating the testing process, you ensure that your data manipulation code is validated with each change, improving code quality and collaboration efficiency.

With GitHub Actions, you can extend this setup to include additional tasks such as data validation, deployment, or integration with other tools. Automating these processes helps maintain a robust and reliable data manipulation workflow.

Happy coding and automating!

---