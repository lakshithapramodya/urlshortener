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
      <div className="flex items-center justify-between">
        <h1 className="mb-4  text-[#ed3f4a] font-bold text-3xl">LINKSNIP</h1>
        <div className="flex space-x-2">
          <button className="bg-[#ecf0f3] pt-[0.2rem] pb-2 w-[5.5rem] text-gray-500 rounded-lg ">
            Login
          </button>
          <button className="bg-[#00a7ca] pt-[0.2rem] pb-2 w-[5.5rem] text-gray-100 rounded-lg ">
            Sign up
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="">
        <div className="w-full flex justify-center px-6">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="url"
            className="py-1 w-[60%] rounded-l text-gray-500"
          />
          <button
            type="submit"
            className="bg-[#00a7ca] font-bold rounded-lg w-24"
          ></button>
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
