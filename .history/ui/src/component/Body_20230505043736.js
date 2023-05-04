import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS } from "../config";
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
    <div className="p-10 w-full h-screen flex-col">
      <Header />
      <div className="flex justify-center">
        <div className="md:w-2/3 xl:w-1/2 mt-20">
          <Input handleSubmit={handleSubmit} setUrl={setUrl} url={url} />
          <ShortUrl
            shortUrl={shortUrl}
            setCopied={setCopied}
            fullShortUrl={fullShortUrl}
            copied={copied}
          />
        </div>
        {/* <img
          className="hidden xl:inline-flex pl-8 ml-48 relative -top-20 right-10 z-10"
          src="https://i.ibb.co/yNNRCYT/happy-man-latest.png"
          alt=""
        /> */}
      </div>
      <footer className="text-[#495e73] flex items-center justify-center fixed bottom-0 right-0 left-0 top-2">
        <p>© Lakshitha Pramodya</p>
      </footer>
    </div>
  );
}

export default Body;
