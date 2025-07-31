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
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. The site will be available at: https://LaeekAhmed.github.io/portfolio

### Deployment

This portfolio automatically deploys to GitHub Pages whenever changes are pushed to the `main` branch.


1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages via the [deploy.yml](.github/workflows/deploy.yml) workflow file
3. The site will be available at: https://LaeekAhmed.github.io/portfolio

Alternatively, you can deploy manually by running:

```
npm run deploy
```

OR 

```
npm run deploy -- -m "custom message"
```

This will build the app and push the built files to the `gh-pages` branch which will be used by GitHub Pages to deploy the site.

To understand the entire process [read this](https://github.com/gitname/react-gh-pages?tab=readme-ov-file#deploying-a-react-app-to-github-pages)