<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/14LA9ehu4gHCB9pcW8RlyBlwlj91ArwPE

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

1. Create a new repository on GitHub.
2. Link your local repository to the remote:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   ```
3. Run the deploy command:
   ```bash
   npm run deploy
   ```
