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
import ShortUrl from "./ShortUrl";

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
    <div className="p-10">
      <Header />
      <div className="flex">
        <div className="md:w-[800px]">
          <Input handleSubmit={handleSubmit} setUrl={setUrl} url={url} />
          <ShortUrl
            shortUrl={shortUrl}
            setCopied={setCopied}
            fullShortUrl={fullShortUrl}
            copied={copied}
          />
        </div>
        <img
          className="hidden md:inline-flex"
          src="https://i.ibb.co/pwwf598/happy-man-new.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Body;
