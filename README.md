# My Portfolio and Blog Website

Built with Hugo, JavaScript, and TailwindCSS

## Information

### Running site on local connection

```bash
hugo server --bind 0.0.0.0 --baseURL http://<YOUR_IP> --port 1313 --disableFastRender
```

### Self note

Blog page is using `pinned` and `tags`, while Project page is `featured` and `categories`.



## To-do/Plans

- [x] Change header nav menu hover color to green-400 for consistency
- [x] Add tags page layout (sorted alphabetically with page count)
- [x] Add blog-list layout for tags taxonomy
- [x] Add project-list layout for categories taxonomy
- [ ] Add fallback for project list cards image if the project doesn't have cover image (replace with a placeholder text image of "My Project")
- [ ] Add `Source Code` and `Live/Demo` for project page (add front-matter parameter for project archetypes and existing!)
- [ ] Add tooltip for share button
- [ ] Page Components
    - [ ] Back-to-top button
    - [ ] Short Code block styling
    - [ ] Add copy button for code block
    - [x] Related post cards
    - [x] Add copy button and copied tooltip for share button
- [ ] Shortcodes
    - [ ] Information
    - [ ] Alerts
    - [ ] Warning
    - [ ] Danger
    - [ ] Figure (image with caption)
    - [x] Table of Contents
- [ ] README or Docs for creating new content, using shortcodes, etc
- [x] Fix share buttons url
- [x] Create and simplify archetypes



## Future Plans

- [ ] Increase site width (breaking change)
- [ ] Change color theme or implement light/dark mode
- [ ] More animations!
