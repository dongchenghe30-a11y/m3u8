# StreamFlow - M3U8 Player & Converter

A free, browser-based M3U8 video player and converter with full i18n support (English/Chinese).

## Features

- 🎬 **M3U8 Player** - Play HLS video streams directly in your browser
- 📥 **M3U8 to MP4 Converter** - Convert and download M3U8 streams as MP4 files
- 🌐 **Full i18n Support** - Switch between English and Chinese seamlessly
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices
- 🔒 **Privacy First** - All processing happens locally in your browser

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- hls.js for video playback
- i18next for internationalization

## Project Structure

```
app/
├── src/
│   ├── components/      # React components
│   ├── locales/         # i18n translation files
│   ├── App.tsx          # Main application
│   └── main.tsx         # Entry point
├── public/
│   └── favicon.svg      # Site favicon
└── dist/                # Production build
```

## License

MIT
