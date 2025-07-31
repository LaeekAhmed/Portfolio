# Personal Portfolio

### Quick Start

```
npm install
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Deployment

This portfolio automatically deploys to GitHub Pages whenever changes are pushed to the `main` branch.

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages via the [deploy.yml](.github/workflows/deploy.yml) workflow file
3. The site will be available at: https://LaeekAhmed.github.io/portfolio

### How it works

GitHub Actions automates deployment as follows:
- When you push to `main`, GitHub Actions checks out your code and runs `npm ci` to install dependencies, then builds the React app using `npm run build`. 
- This generates static files in the `build` directory.
- The workflow then uploads the contents of the `build` directory as an artifact. This artifact is a packaged version of your built site.
- In the deploy step, GitHub Actions picks up this uploaded artifact and publishes it directly to GitHub Pages—no need for a separate `gh-pages` branch. The deployment is fully automated and happens on every push to `main`.

For more information about GitHub Actions deployment, see the [workflow file](.github/workflows/deploy.yml).