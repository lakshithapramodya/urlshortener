import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function ShortUrl({
  shortUrl,
  fullShortUrl,
  setCopied,
  copied,
}) {
  return (
    <div className="flex items-end mt-1">
      <h3 className="text-5xl text-[#495e73] font-semibold">the better.</h3>
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
  );
}
