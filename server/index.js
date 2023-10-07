require('dotenv').config();

const express = require('express');
const axios = require('axios');
const { accessToken } = require('./spotify');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// spotify api set up
app.get('/api/spotify/playlist/:id', async (req, res) => {
    try {
        const playlistId = req.params.id;
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).send("Error fetching from Spotify");
    }
});

