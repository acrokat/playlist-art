const axios = require('axios');

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

let accessToken = null;

const getAccessToken = async () => {
    try {
        const response = await axios({
            url: 'https://accounts.spotify.com/api/token',
            method: 'post',
            params: {
                grant_type: 'client_credentials'
            },
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: CLIENT_ID,
                password: CLIENT_SECRET
            }
        });

        accessToken = response.data.access_token;
    } catch (err) {
        console.error('Error getting access token', err);
    }
};

getAccessToken();

module.exports = {
    accessToken
};
