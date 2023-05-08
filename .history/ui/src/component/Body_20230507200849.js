import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS } from "../config";
import Header from "./Header";
import Input from "./Input";
import ShortUrl from "./ShortUrl";
import Footer from "./Footer";

function Body({ user }) {
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
    <div className=" w-full h-screen flex-col ">
      <Header user={user} hideLogin={false} />
      <div className="flex justify-center ">
        <div className="lg:w-1/2 mt-20  p-4 pb-16 w-full rounded-lg">
          <Input handleSubmit={handleSubmit} setUrl={setUrl} url={url} />
          <ShortUrl
            shortUrl={shortUrl}
            setCopied={setCopied}
            fullShortUrl={fullShortUrl}
            copied={copied}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Body;
