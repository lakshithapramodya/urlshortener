import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
      <p className="text-xl text-[#424242] italic rounded-lg py-4 mt-10 text-center font-semibold">
        Trim the excess and snip your links with LinkSnip, the ultimate free URL
        shortener for concise communication
      </p>
      <p className="text-lg text-[#424242] font-semibold font-mono">
        Please login to your account to manage and analyze your shortened links
      </p>
    </div>
  );
}
