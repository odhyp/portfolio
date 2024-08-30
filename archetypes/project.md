{{- $removeDate := substr .Name 11 -}}
{{- $pageTitle := replace $removeDate "-" " " | title -}}
{{- $pageSlug := $removeDate -}}

+++
draft = true
featured = false
title = "{{ $pageTitle }}"
slug = "{{ $pageSlug }}"
date = {{ now.Format "2006-01-02" }}
categories = ["categories1", "categories2", "categories3"]
summary = "A quick summary of your project here"
+++

<!-- Provide an overview of the project -->

## Features

<!-- List and describe the features of the project -->

## Installation

<!-- Provide instructions on how to install and use the project -->

## Usage

<!-- Provide usage examples and instructions -->

## Contributing

<!-- Explain how others can contribute to the project -->

## License

<!-- Include licensing information -->
