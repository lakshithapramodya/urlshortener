import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS, Url } from "../config";
import Header from "./Header";
import Input from "./Input";
import ShortUrl from "./ShortUrl";
import Footer from "./Footer";

function Body({ user }) {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  const fullShortUrl = `${Url}/${shortUrl?.short}`;

  async function handleSubmit(e) {
    e.preventDefault();
    setUrl("");
    const results = await axios
      .post(`${SERVER_ENDPOINTS}/api/url`, {
        user: user && user.email,
        full: url,
      })
      .then((res) => res.data);
    setShortUrl(results);
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header user={user} hideLogin={false} />
      <div className="flex justify-center ">
        <div className="lg:w-1/2 md:w-[60%] w-[80%] mt-20  p-4 pb-16 rounded-lg">
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
