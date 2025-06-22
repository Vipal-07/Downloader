import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function URLpage() {
    const [urlData, setUrlData] = useState('')
     const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        const sourceURL = "http://localhost:3000/video-info"; // Adjust the URL as needed
        try {
            const response = await axios.post(sourceURL , { url: urlData })
             navigate('/download', { state: { videoInfo: response.data, url: urlData } })
            console.log(response.data);
        } catch (error) {
           setError('Failed to fetch video info')
        }
        setLoading(false);
    }


    return (
        <div
            className="m-0 p-0 min-h-screen flex items-center justify-center"
            style={{
                background: "radial-gradient(circle at 50% 40%, #ff9934 0%, #ffffff 50%, #4B0082 100%)"
            }}
        >
            <div className="backdrop-blur-md bg-white/20 rounded-xl shadow-lg p-8 w-full max-w-md mx-4 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6 text-white drop-shadow">Enter URL</h2>
                <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-col gap-4" >
                    <input
                        type="url"
                        placeholder="Paste your URL here..."
                        value={urlData}
                        onChange={e => setUrlData(e.target.value)}
                        className="flex-1 px-4 py-2 rounded-lg bg-white/60 focus:bg-white/80 outline-none border-none text-gray-800 placeholder-gray-500 shadow transition"
                        required
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-white to-green-600 text-gray-900 font-semibold shadow transition-all duration-300 hover:from-green-600 hover:to-orange-500 hover:scale-105"
                        disabled={loading}
                    >
                       {loading ? 'Loading...' : 'Submit'}
                    </button>
                </form>
                 {error && <div className="text-red-500 mt-2">{error}</div>}
            </div>
        </div>
    )
}