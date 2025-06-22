import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DownloadPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { videoInfo, url } = location.state || {};
  const [selectedQuality, setSelectedQuality] = useState('');

  if (!videoInfo) {
    // If no video info, redirect back to URLpage
    navigate('/');
    return null;
  }

  

    const videoFormats = videoInfo.formats
    .filter(f => f.ext === 'mp4' && f.vcodec !== 'none' && f.acodec !== 'none' && f.url)
    .sort((a, b) => (b.height || 0) - (a.height || 0))

  const handleDownload = () => {
    if (!selectedQuality) return;
    // You might want to trigger a backend download endpoint here
    window.open(selectedQuality, '_blank');
  };

  return (
    <div
      className="m-0 p-0 min-h-screen flex items-center justify-center"
      style={{
        background: "radial-gradient(circle at 50% 40%, #ff9934 0%, #ffffff 50%, #4B0082 100%)"
      }}
    >
      <div className="backdrop-blur-md bg-white/20 rounded-xl shadow-lg p-8 w-full max-w-lg mx-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-indigo-800">Download Video</h2>
        <div className="mb-4 w-full">
          <div className="font-semibold text-gray-700 mb-2">Title:</div>
          <div className="text-gray-900">{videoInfo.title || 'Unknown Title'}</div>
        </div>
        <div className="mb-6 w-full">
          <label className="block font-semibold text-gray-700 mb-2">Choose Quality:</label>
          <select
            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none"
            value={selectedQuality}
            onChange={e => setSelectedQuality(e.target.value)}
          >
            <option value="">Select quality</option>
            {videoFormats.map((q, idx) => (
              <option key={idx} value={q.url}>
                {q.qualityLabel || q.format || q.resolution || 'Unknown'} ({q.ext || ''})
              </option>
            ))}
          </select>
        </div>
        <button
          className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow transition-all duration-300 hover:bg-orange-500 disabled:opacity-50"
          onClick={handleDownload}
          disabled={!selectedQuality}
        >
          Download
        </button>
      </div>
    </div>
  );
}