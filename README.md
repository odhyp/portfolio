# Portfolio

Built with Hugo, JavaScript, and TailwindCSS

## Future Plans

- [ ] Add search functionality
- [ ] Add shortcodes
  - [ ] Image with caption
  - [ ] Image gallery
- [ ] Add pagination
- [ ] Utilize site announcements
- [ ] Add RSS Feed output, link to github profile with GithubActions
- [ ] Add support section under comments section
- [ ] Use Giscus custom theme for adaptive theming, instead of using JS (frame reload)
- [ ] Add notification badge in the header menu for a new page (blog or project)

## Usage

A quick reminder on how to do stuffs.

### Running Site on Local Connection

```bash
hugo server --bind 0.0.0.0 --baseURL http://<YOUR_IP> --port 1313 --disableFastRender
```

### Generating Page with Archetypes

1. New Blog

   ```bash
   hugo new --kind blog blog/2024-10-27-my-first-post.md
   ```

2. New Project

   ```bash
   hugo new --kind project project/2024-10-27-my-first-project.md
   ```

> Blog page is using `pinned` and `tags`, while Project page is `featured` and `categories`.

### Utilizing Shortcodes

1. Table of Content
   Simple call, no parameters needed.

   ```
   {{< toc >}}
   ```

2. Icon
   Provide name for the icon name, title for the displayed text, and href.
   Icon should exist in the `static/icon/...`

   ```
   {{< icon name="python" title="Python" href="https://www.python.org/" >}}
   ```

3. Work Experience
   Provide job title, organization name, organization website URL, start and end date, and the brief description.

   ```
   {{< work-experience title="Accountant" organization="BPKA DIY" organizationLink="https://bpka.jogjaprov.go.id/" startDate="Oct 2024" endDate="Present" >}}
   Prepare and create financial reports for the Special Region of Yogyakarta, ensuring accuracy and compliance with government standards.
   {{< /work-experience >}}
   ```

4. Blog Stats
   Simple call, no parameters needed.
   ```
   {{< blog-stats >}}
   ```
