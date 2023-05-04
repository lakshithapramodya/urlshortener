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
    <div className="text-white  p-10 ">
      <h1 className="mb-4 flex items-center justify-start text-red-500 font-bold text-3xl">
        LINKSNIP
      </h1>
      <form onSubmit={handleSubmit} className="">
        <div className="w-full flex justify-center px-6">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="url"
            className="py-1 w-full rounded-l text-gray-500"
          />
          <button type="submit" className="bg-blue-500 py-1 rounded-r w-44">
            Shorten URL
          </button>
        </div>
      </form>
      {shortUrl && (
        <a className="text-black" href={`/${shortUrl?.short}`}>
          {window.location.origin}/{shortUrl?.short}
        </a>
      )}
    </div>
  );
}

export default Body;
