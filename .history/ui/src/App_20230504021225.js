import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS } from "./config";

function App() {
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
    <div className="text-4xl">
      <h1>Sort</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="url"
        />
        <button type="submit">Shrink</button>
      </form>
      {JSON.stringify(shortUrl)}
    </div>
  );
}

export default App;
