# Odhy's Digital Space :sunglasses:

Welcome to my digital workspace—where I reflect, debug, and occasionally scream at my code.

Built with Hugo, JavaScript, and TailwindCSS. Deployed in Vercel.

## Self-reminder

A quick note for my future self.

### Running Site on Local Connection

```bash
hugo server --bind 0.0.0.0 --baseURL http://<YOUR_IP> --port 1313 --disableFastRender
```

> This lets you access it from any device on the same network, including your phone.

### Generating Page with Archetypes

Blog page has `tags`, while Project page has `featured`, `categories`, and `cover` in their front matter.

1. New Blog

   ```bash
   hugo new --kind blog blog/2024-10-27-sample-post.md
   ```

2. New Project

   ```bash
   hugo new --kind project project/2024-10-27-sample-project.md
   ```

### Utilizing Shortcodes

1. Table of Content
   Simple call, no parameters needed.

   ```bash
   {{< toc >}}
   ```

2. Alerts: `note`, `tip`, `important`, `warning`, and `caution`

    ```bash
    {{% note %}}
    Message here!
    {{% /note %}}
    ```

3. Image with caption

    ```bash
    {{< image-caption src="path/to/image.jpg" alt="Image description" caption="This is a caption." >}}
    ```
