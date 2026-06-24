# Mariam Abdan Portfolio

This is a Vite + React portfolio designed to be easy to read on desktop and mobile. It includes a cleaner project section, stronger contrast, and a direct link to the updated CV.

## Local development

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The production output is generated in `dist/`.

## Free deployment

### Option 1: Netlify

1. Create a free Netlify account.
2. Push this project to GitHub if it is not already there.
3. Connect the repo in Netlify and let it detect `netlify.toml`.
4. Netlify will run `npm run build`, publish `dist/`, and give you a free public URL.
5. For a one-time deploy, you can still drag and drop the `dist/` folder from your local build.

### Option 2: GitHub Pages

1. Push the project to GitHub.
2. Add a GitHub Pages deployment workflow or use a Pages hosting setup for Vite.
3. Build the app and publish the `dist/` folder.

## How to add video later

1. Put your video file in `public/videos/`.
2. Add a block like this inside a project section:

```jsx
<video controls playsInline preload="metadata" poster="/videos/video-poster.jpg" className="w-full rounded-3xl">
  <source src="/videos/demo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

3. Keep the file compressed so it loads well on phones.
4. If the video is large, host it on YouTube or Vimeo and embed the link instead.

## Notes

- The updated CV is stored at `public/Logos/Mariam-Abdan-CV.pdf`.
- The old e-card QR block was removed from the interface.
- The portfolio now emphasizes a simple scroll flow and clearer project summaries.
- Netlify deploy settings live in `netlify.toml`.
