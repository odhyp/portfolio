{{- $removeDate := substr .Name 11 -}}
{{- $pageTitle := replace $removeDate "-" " " | title -}}
{{- $pageSlug := $removeDate -}}

+++
draft = true

title = '{{ $pageTitle }}'
slug = '{{ $pageSlug }}'
date = {{ .Date }}
lastmod = {{ .Date }}

tags = ['tag1', 'tag2', 'tag3']
summary = ''

author = '{{ .Site.Params.author }}'
authorLink = '{{ .Site.Params.authorLink }}'

externalName = ''
externalUrl = ''
+++

## Introduction

<!-- Write the introduction here -->

## Main Content

<!-- Write the main content here -->

## Conclusion

<!-- Write the conclusion here -->

### References

<!-- List any references or further readings here -->
