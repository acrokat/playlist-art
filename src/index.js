import React from 'react';
import ReactDOM from 'react-dom';
import URLInput from './components/URLInput';


const App = () => {
  return (
	<div>
		<h1>Hey homies!</h1>
		<URLInput />
	</div>
	);
}


// --spotify api---
const express = require('express');
const axios = require('axios');
const { accessToken } = require('./spotify');
const app = express();

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

ReactDOM.render(<App />, document.getElementById('root'));

