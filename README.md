# My Portfolio and Blog Website

Built with Hugo, JavaScript, and TailwindCSS

## Information

### Running site on local connection

```bash
hugo server --bind 0.0.0.0 --baseURL http://<YOUR_IP> --port 1313 --disableFastRender
```

### Self note

Blog page is using `pinned` and `tags`, while Project page is `featured` and `categories`.

Using shortcodes:

```md
{{< info title="" >}}
Your information here. Maybe something useful for the readers.
{{< /info >}}

{{< warning title="" >}}
The deadline for submission is approaching fast.
{{< /warning >}}
```

## Future Plans

- [ ] Utilize/remove site announcements in header layout
- [ ] Update project cards layout/style
- [ ] Increase site width (breaking change)
- [ ] Change color theme or implement light/dark mode
- [ ] Add Shortcodes for image with caption and image gallery with slider
- [ ] Add project list and blog list pagination
- [ ] Add search functionality
- [ ] More animations!
