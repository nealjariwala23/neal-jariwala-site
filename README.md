# Personal portfolio website

A responsive, accessible starter portfolio made with HTML, CSS, and vanilla JavaScript.

## Run locally

1. Open this folder in VS Code.
2. Install the **Live Server** extension (optional).
3. Right-click `index.html` and choose **Open with Live Server**, or open `index.html` directly in your browser.

## Customize

- `index.html`: biography, sections, project descriptions, education, experience, achievements.
- `styles.css`: colors, spacing, typography, responsive layouts, animations.
- `script.js`: `CONFIG` at the top stores email, GitHub, LinkedIn, and individual project links.
- `assets/resume.pdf`: add your real resume PDF at this path. **Not included**.
- Replace placeholder project art with your own screenshots if desired.
- Do not publish private course projects or research material without permission.

## Publish with GitHub Pages

1. Create a new public GitHub repository (e.g. `portfolio`).
2. From the folder run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. GitHub repository **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`.
4. Your website will be available at `https://YOUR_USERNAME.github.io/portfolio/` after deployment.
5. To add a custom domain, follow GitHub Pages custom-domain instructions and configure DNS with your domain registrar. Enable HTTPS after DNS resolves.

## Important

Email, social, and project URLs are deliberately disabled until you add valid links. Add your real resume at `assets/resume.pdf` before sharing the site. Avoid adding personal phone numbers or sensitive data to a public website.
