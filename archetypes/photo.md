{{- $removeDate := substr .Name 11 -}}
{{- $pageTitle := replace $removeDate "-" " " | title -}}
{{- $pageSlug := $removeDate -}}

+++
draft = true
title = "{{ $pageTitle }}"
slug = "{{ $pageSlug }}"
date = {{ now.Format "2006-01-02" }}
photo_cover = "https://placehold.co/1200x600?text=Blog\nCover+Image"
photo_link = ""
location_name = ""
location link = ""
summary = ""
+++
