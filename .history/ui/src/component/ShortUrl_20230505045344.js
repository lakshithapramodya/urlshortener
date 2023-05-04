import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import BottomSection from "./BottomSection";

export default function ShortUrl({
  shortUrl,
  fullShortUrl,
  setCopied,
  copied,
}) {
  return (
    <div className="mt-4 ">
      <div className="flex justify-center">
        {shortUrl && (
          <div className="bg-gray-200 p-1 px-4 ml-4 rounded-md flex items-center justify-center w-2/3">
            <a
              className="text-[#ed3f4a] text-xl underline"
              href={`/${shortUrl?.short}`}
            >
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
      <h3 className="text-xl text-[#495e73] bg-gray-100 border rounded-lg py-4 mt-20 text-center font-semibold">
        Trim the excess and snip your links with LinkSnip, the ultimate free URL
        shortener for concise communication
      </h3>
      {/* <BottomSection /> */}
    </div>
  );
}
