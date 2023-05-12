import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS, Url } from "../config";
import Header from "./Header";
import Input from "./Input";
import ShortUrl from "./ShortUrl";
import Footer from "./Footer";
import DetailsCard from "./DetailsCard";

const cardDetails = [
  {
    title: "Easy",
    text: "LinkSnip is easy and fast, enter the long link to get your shortened link",
    img: "https://i.ibb.co/p2xWdGc/icon-like.png",
  },
  {
    title: "Shortened",
    text: "Use any link, no matter what size, ShortURL always shortens",
    img: "https://i.ibb.co/Sfp2NFL/icon-url.png",
  },
  {
    title: "Secure",
    text: "It is fast and secure, our service have HTTPS protocol and data encryption",
    img: "https://i.ibb.co/pwTVnp3/icon-secure.png",
  },
  {
    title: "Statistics",
    text: "Check the amount of clicks that your shortened URL received",
    img: "https://i.ibb.co/RzZsrxY/icon-statistics.png",
  },
  {
    title: "Reliable",
    text: "All links that try to disseminate spam, viruses and malware are deleted",
    img: "https://i.ibb.co/PGqRSKF/icon-unique.png",
  },
  {
    title: "Devices",
    text: "Compatible with smartphones, tablets and desktop",
    img: "https://i.ibb.co/f2FyfCx/icon-responsive.png",
  },
];

function Body({ user }) {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const fullShortUrl = `${Url}/${shortUrl?.short}`;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setUrl("");
    const results = await axios
      .post(`${SERVER_ENDPOINTS}/api/url`, {
        user: user && user.email,
        full: url,
      })
      .then((res) => res.data);
    setShortUrl(results);
    setLoading(false);
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center">
      <Header user={user} hideLogin={false} />
      <div className="flex justify-center ">
        <div className="lg:w-1/2 md:w-[60%] w-[80%] mt-20  p-4 pb-16 rounded-lg">
          <Input handleSubmit={handleSubmit} setUrl={setUrl} url={url} />
          <ShortUrl
            shortUrl={shortUrl}
            setCopied={setCopied}
            fullShortUrl={fullShortUrl}
            copied={copied}
            loading={loading}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 text-center items-center justify-center mt-10 w-[80%] gap-4">
        {cardDetails.map((card, i) => (
          <DetailsCard
            key={i}
            title={card.title}
            text={card.text}
            img={card.img}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Body;
