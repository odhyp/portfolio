{{- $removeDate := substr .Name 11 -}}
{{- $pageTitle := replace $removeDate "-" " " | title -}}
{{- $pageSlug := $removeDate -}}

+++
draft = false

title = "{{ $pageTitle }}"
slug = "{{ $pageSlug }}"
date = {{ .Date.Format "2006-01-02" }}
lastmod = {{ .Date.Format "2006-01-02" }}

categories = ["category1", 'category2']
tags = ["tag1", "tag2", "tag3"]
summary = ""
+++

## Introduction

<!-- Write the introduction here -->

## Main Content

<!-- Write the main content here -->

## Conclusion

<!-- Write the conclusion here -->

### References

<!-- List any references or further readings here -->
