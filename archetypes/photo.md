{{- $removeDate := substr .Name 11 -}}
{{- $pageTitle := replace $removeDate "-" " " | title -}}
{{- $pageSlug := $removeDate -}}

+++
draft = true
title = "{{ $pageTitle }}"
slug = "{{ now.Format "2006-01-02" }}-{{ $pageSlug }}"
date = {{ now.Format "2006-01-02" }}
source = "The source of the image"
goto = "External URL of the image"
location = "Yogyakarta, Indonesia"
caption = "A beautiful view"
+++
