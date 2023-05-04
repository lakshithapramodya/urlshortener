import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS } from "../config";
import {
  ArrowRightIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";

function Body() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  const fullShortUrl = `${window.location.origin}/${shortUrl?.short}`;

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
        <h1 className="text-[#ed3f4a] font-bold text-2xl">LINKSNIP</h1>
        <div className="flex space-x-2">
          <button className="bg-[#ecf0f3] pt-[0.2rem] pb-2 w-[5.5rem] text-gray-500 rounded-lg ">
            Login
          </button>
          <button className="bg-[#00a7ca] pt-[0.2rem] pb-2 w-[5.5rem] text-gray-100 rounded-lg ">
            Sign up
          </button>
        </div>
      </div>
      <div className="text-5xl text-[#495e73] font-semibold mt-1">
        <h3>when</h3>
        <h3>the shorter,</h3>
      </div>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="w-[80%] md:w-[50%] flex justify-center py-2 rounded-3xl bg-gray-200">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="url"
            className="py-1 w-[80%] rounded-3xl text-gray-500 focus:ring-transparent focus:outline-none px-10"
          />
          <button
            type="submit"
            className="bg-gray-100 text-gray-400 font-bold rounded-full w-8 ml-4 flex items-center justify-center"
          >
            <ArrowRightIcon className="h-6" />
          </button>
        </div>
      </form>
      <div className="flex items-end mt-1">
        <h3 className="text-5xl text-[#495e73] font-semibold">the better</h3>
        {shortUrl && (
          <div className="bg-gray-200 p-1 px-4 ml-4 rounded-md flex items-center">
            <a className="text-[#ed3f4a] text-xl" href={`/${shortUrl?.short}`}>
              {fullShortUrl}
            </a>
            <button
              className=""
              onClick={() => {
                navigator.clipboard.writeText(fullShortUrl);
                setCopied(true);
              }}
            >
              <ClipboardDocumentIcon
                className={`h-6 text-[#495e73] cursor-pointer ml-2 opacity-100 transition-opacity duration-500 ease-in-out ${
                  copied && `opacity-0 hidden`
                }`}
              />
              <ClipboardDocumentCheckIcon
                className={`h-6 text-[#495e73] cursor-pointer ml-2 opacity-100 transition-opacity duration-500 ease-in-out ${
                  copied && `opacity-100`
                } ${!copied && "hidden"}`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Body;
