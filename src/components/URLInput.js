import React, { useState } from 'react';

const URLInput = (props) => {
  const [url, setUrl] = useState(''); // Initial state for the URL text field

// url handler: add call to spotify api here
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered URL:", url);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input 
            type="url" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default URLInput;

