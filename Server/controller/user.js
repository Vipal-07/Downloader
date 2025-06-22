const youtubedl = require('youtube-dl-exec');
const { spawn } = require('child_process');

module.exports.getVideoInfo = async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const info = await youtubedl(url, {
            dumpSingleJson: true,
            noWarnings: true,
            preferFreeFormats: true,
        });

        return res.status(200).json(info);
    } catch (error) {
        console.error('Error fetching video info:', error);
        return res.status(500).json({ error: 'Failed to fetch video information' });
    }
};


