import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS } from "../config";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import Header from "./Header";

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
      <Header />
      <div className="text-5xl text-[#495e73] font-semibold mt-1">
        <h3>when</h3>
        <h3>the shorter,</h3>
      </div>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="w-[80%] md:w-[50%] px-8 flex justify-center py-2 rounded-3xl bg-gray-200">
          <div className="flex items-center justify-center space-x-2">
            <div className="h-5 w-5 rounded-full bg-[#e3736e]" />
            <div className="h-5 w-5 rounded-full bg-[#fabf3f]" />
            <div className="h-5 w-5 rounded-full bg-[#59ca42]" />
          </div>
          <div className="flex space-x-2 items-center justify-center px-4">
            <ChevronLeftIcon className="h-5 bg-gray-50 rounded text-gray-400" />
            <ChevronRightIcon className="h-5 bg-gray-50 rounded text-gray-400" />
          </div>
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
                className={`h-6 text-[#495e73] cursor-pointer ml-2 opacity-100  ${
                  copied &&
                  `transition-opacity duration-500 ease-in-out opacity-0 hidden`
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
