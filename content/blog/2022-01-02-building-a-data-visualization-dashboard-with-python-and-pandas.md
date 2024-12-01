+++
draft = false
pinned = true
disableComments = false
title = "Building a Data Visualization Dashboard With Python and Pandas"
slug = "building"
date = 2022-01-02
tags = ["python", "data-visualization", "pandas", "streamlit"]
cover = "https://miro.medium.com/v2/resize:fit:1400/1*mrpRJriKlzNeFLc3vE8xuQ.png"
+++

In today's data-driven world, the ability to visualize data effectively is crucial for making informed decisions and uncovering insights. Python, coupled with libraries like Pandas and visualization tools, offers powerful solutions for creating interactive and insightful data dashboards. In this blog post, we'll walk through the process of building a data visualization dashboard using Python and Pandas.

{{< toc >}}

## Introduction

A data visualization dashboard is a tool that allows users to interactively explore and analyze data through visualizations such as charts, graphs, and maps. Python's Pandas library is excellent for data manipulation, while libraries like Matplotlib and Seaborn provide the visualization capabilities needed to create a compelling dashboard. In this tutorial, we'll use these tools to build a simple, interactive dashboard.

## Setting Up the Environment

Before we start coding, ensure you have Python installed along with the necessary libraries. You can set up your environment by installing the required packages using pip:

```bash
pip install pandas matplotlib seaborn
```

## Preparing the Data

For our dashboard, we'll use a sample dataset. Let's use the famous Iris dataset, which is commonly used for practicing data analysis. This dataset includes information about iris flowers, such as their species and measurements.

Here's how to load and inspect the data using Pandas:

```python
import pandas as pd

# Load the dataset
data_url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
df = pd.read_csv(data_url)

# Display the first few rows of the dataset
print(df.head())
```

## Creating Visualizations

With the data loaded, we can now create visualizations. We'll use Matplotlib and Seaborn for this purpose. Let's start by creating a few basic plots:

### Distribution Plot

A distribution plot shows the distribution of a single variable. For example, we can visualize the distribution of sepal lengths:

```python
import seaborn as sns
import matplotlib.pyplot as plt

# Create a distribution plot
plt.figure(figsize=(10, 6))
sns.histplot(df['sepal_length'], kde=True)
plt.title('Distribution of Sepal Length')
plt.xlabel('Sepal Length (cm)')
plt.ylabel('Frequency')
plt.show()
```

### Scatter Plot

A scatter plot helps to understand the relationship between two variables. Let's create a scatter plot to show the relationship between sepal length and sepal width:

```python
plt.figure(figsize=(10, 6))
sns.scatterplot(data=df, x='sepal_length', y='sepal_width', hue='species')
plt.title('Sepal Length vs. Sepal Width')
plt.xlabel('Sepal Length (cm)')
plt.ylabel('Sepal Width (cm)')
plt.legend(title='Species')
plt.show()
```

## Building the Dashboard

To build an interactive dashboard, we'll use `Streamlit`, a Python library designed to create web applications for data science projects. Install Streamlit with:

```bash
pip install streamlit
```

Create a new Python file named `dashboard.py` and add the following code:

```python
import streamlit as st
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the dataset
data_url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
df = pd.read_csv(data_url)

# Streamlit app
st.title('Iris Dataset Dashboard')

# Sidebar for user input
st.sidebar.header('User Input Features')
species = st.sidebar.multiselect('Select species', df['species'].unique(), default=df['species'].unique())

# Filter data based on user input
filtered_df = df[df['species'].isin(species)]

# Plot distribution
st.subheader('Distribution of Sepal Length')
fig, ax = plt.subplots()
sns.histplot(filtered_df['sepal_length'], kde=True, ax=ax)
ax.set_title('Distribution of Sepal Length')
ax.set_xlabel('Sepal Length (cm)')
ax.set_ylabel('Frequency')
st.pyplot(fig)

# Plot scatter plot
st.subheader('Sepal Length vs. Sepal Width')
fig, ax = plt.subplots()
sns.scatterplot(data=filtered_df, x='sepal_length', y='sepal_width', hue='species', ax=ax)
ax.set_title('Sepal Length vs. Sepal Width')
ax.set_xlabel('Sepal Length (cm)')
ax.set_ylabel('Sepal Width (cm)')
st.pyplot(fig)
```

## Running the Dashboard

To run the dashboard, open a terminal, navigate to the directory containing `dashboard.py`, and execute:

```bash
streamlit run dashboard.py
```

This will start a local web server and open the dashboard in your web browser. You can interact with the dashboard by selecting different species from the sidebar to see how the visualizations update in real-time.

## Conclusion

In this blog post, we've built a data visualization dashboard using Python, Pandas, Matplotlib, Seaborn, and Streamlit. We've demonstrated how to prepare data, create visualizations, and put it all together into an interactive web application. This dashboard can serve as a foundation for more complex and customized data visualization projects.

With these tools, you can create powerful, interactive dashboards that help users understand and interact with their data effectively. Feel free to expand on this project by adding more features and visualizations to suit your needs!

Happy coding!

---
