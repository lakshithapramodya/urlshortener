import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function Input({ handleSubmit, setUrl, url }) {
  return (
    <div className="w-full">
      <div className="text-xl text-[#424242] font-semibold mt-4 text-center">
        <h3>Enter your long URL to shorten</h3>
      </div>
      <div className="mt-8 min-w-full md:min-w-fit">
        <div
          className="flex items-center md:border-2 rounded-full py-2 
      md:shadow-md"
        >
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="!outline-0 pl-5 bg-transparent flex-grow 
          md:min-w-0  text-gray-600 "
            type="url"
            placeholder="http://www.example.com"
          />
          <MagnifyingGlassIcon
            onClick={handleSubmit}
            className="hidden md:inline-flex h-8 bg-[#ff385c]
         text-white rounded-full p-2 cursor-pointer md:mx-2 "
          />
        </div>
      </div>
    </div>
  );
}
