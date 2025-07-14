# Downloader

A full-stack web application for downloading videos from URLs (such as YouTube), built with React (frontend) and Express.js (backend). The app fetches video information and allows users to select and download videos in various formats and qualities.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [Tech Stack](#tech-stack)
- [License](#license)

---

## Features

- Enter a video URL to fetch available download options.
- View video details and select quality/format for download.
- Download video or audio directly from the browser.
- Responsive, modern UI with Tailwind CSS.

---

## Project Structure

```
Downloader/
├── Client/
│   ├── public/
│   ├── src/
│   │   ├── component/
│   │   │   ├── AudioDownload.jsx
│   │   │   ├── DemoDownload.jsx
│   │   │   ├── DownloadPage.jsx
│   │   │   └── URLpage.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── package.json
│   └── ...
├── Server/
│   ├── controller/
│   │   └── user.js
│   ├── index.js
│   ├── package.json
│   └── ...
└── README.md
```

---

## Getting Started

### Frontend Setup

1. Navigate to the `Client` directory:
   ```sh
   cd Client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. The app will be available at `https://downloader-url.onrender.com` (or as indicated in the terminal).

### Backend Setup

1. Navigate to the `Server` directory:
   ```sh
   cd Server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. The backend runs on `https://downloader-xxo1.onrender.com` by default.

---

## API Endpoints

### `POST /video-info`

- **Description:** Fetches video information (formats, title, etc.) for a given URL.
- **Request Body:**
  ```json
  {
    "url": "https://www.youtube.com/watch?v=..."
  }
  ```
- **Response:** JSON object containing video metadata and available formats.
- **Error Handling:** Returns 400 if URL is missing, 500 if fetching fails.

**Defined in:** [`Server/controller/user.js`](Server/controller/user.js)  
**Registered in:** [`Server/index.js`](Server/index.js)

---

## Frontend Components

- [`App`](Client/src/App.jsx): Main router, defines routes for URL input and download page.
- [`URLpage`](Client/src/component/URLpage.jsx):  
  - Input form for users to paste a video URL.
  - Submits URL to backend `/video-info` endpoint.
  - Navigates to download page with fetched video info.
- [`DemoDownload`](Client/src/component/DemoDownload.jsx):  
  - Displays video details and available formats.
  - Lets users select quality and download.
- [`AudioDownload`](Client/src/component/AudioDownload.jsx):  
  - (Not currently routed) For audio-only downloads.
- [`DownloadPage`](Client/src/component/DownloadPage.jsx):  
  - (Not currently routed) Alternative download page for video.

---

## Tech Stack

- **Frontend:** React, React Router, Axios, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js, youtube-dl-exec, CORS, body-parser

---

Made with 🚩 by Vikas Maurya
