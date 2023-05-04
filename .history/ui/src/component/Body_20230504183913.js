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
    <div className=" bg-blue-900 py-10 ">
      <h1 className="mb-4 flex items-center justify-center text-white">
        Simplify your URL
      </h1>
      <form onSubmit={handleSubmit} className="">
        <div className="w-full flex justify-center px-6">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="url"
            className="py-1 w-full rounded-l te"
          />
          <button type="submit" className="bg-blue-500 py-1 rounded-r w-44">
            Shorten URL
          </button>
        </div>
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
