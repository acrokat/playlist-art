import React, { useState } from 'react';
import axios from 'axios';

const URLInput = (props) => {
  const [url, setUrl] = useState(''); // Initial state for the URL text field

// url handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
     // Extract the playlist id from given url
     const match = url.match(/\/playlist\/([\w-]+)/);
     if (match && match[1]) {
       const playlistId = match[1];
 
       try {
         const response = axios.get(`/api/spotify/playlist/${playlistId}`);
         console.log(response.data); 
       } catch (err) {
         console.error("Error fetching playlist data:", err);
       }
     } else {
       console.error("Invalid URL: Plase ensure you have a specific Playlist URL");
     }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter playlist URL:
          <input 
            type="url" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://open.spotify.com/playlist/..."
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default URLInput;

