import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

export default function ShortUrl({
  shortUrl,
  fullShortUrl,
  setCopied,
  copied,
  loading,
}) {
  return (
    <div className="mt-8 w-full">
      <div className="flex justify-center">
        {(shortUrl || loading) && (
          <div className=" p-1 px-4 ml-4 rounded-md flex items-center justify-center">
            <a
              className="text-[#ff385c] text-xl underline"
              href={`/${shortUrl?.short}`}
            >
              {fullShortUrl || <Skeleton />}
            </a>
            <button
              id="copyUrl"
              className=""
              onClick={() => {
                navigator.clipboard.writeText(fullShortUrl);
                setCopied(true);
              }}
            >
              <ClipboardDocumentIcon
                className={`h-6 text-[#424242] cursor-pointer ml-2 opacity-100  ${
                  copied &&
                  `transition-opacity duration-500 ease-in-out opacity-0 hidden`
                }`}
              />
              <ClipboardDocumentCheckIcon
                className={`h-6 text-[#424242] cursor-pointer ml-2 opacity-100 transition-opacity duration-500 ease-in-out ${
                  copied && `opacity-100`
                } ${!copied && "hidden"}`}
              />
            </button>
          </div>
        )}
      </div>
      <p className="text-xl text-[#424242] font-mono rounded-lg py-4 mt-10 text-center font-semibold">
        Trim the excess and snip your links with LinkSnip, the ultimate free URL
        shortener for concise communication
      </p>
    </div>
  );
}
