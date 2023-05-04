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
import Input from "./Input";

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
      <Input handleSubmit={handleSubmit} setUrl={setUrl} url={url} />
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
