import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS } from "../config";

function Body() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setUrl("");
    const results = await axios
      .post(`${SERVER_ENDPOINTS}/api/url`, {
        full: url,
      })
      .then((res) => res.data);
    setShortUrl(results);
  }

  return (
    <div className="text-white bg-blue-800">
      <h1>Simplify your URL</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="url"
        />
        <button type="submit">Shrink</button>
      </form>
      {shortUrl && (
        <a href={`/${shortUrl?.short}`}>
          {window.location.origin}/{shortUrl?.short}
        </a>
      )}
    </div>
  );
}

export default Body;
