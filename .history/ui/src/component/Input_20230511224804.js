import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function Input({ handleSubmit, setUrl, url }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-xl text-[#424242] font-semibold  text-center">
        <h3>Enter your long URL to shorten</h3>
      </div>
      <div className="mt-5 w-[90%]">
        <div
          className="flex items-center border-2 rounded-full py-2 
     shadow-md"
        >
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="!outline-0 pl-5 bg-transparent flex-grow 
          md:min-w-0  text-gray-600 "
            type="url"
            placeholder="http://www.example.com"
          />
          <ChevronRightIcon
            onClick={handleSubmit}
            className=" md:inline-flex h-8 bg-[#ff385c]
         text-white rounded-full p-2 cursor-pointer md:mx-2 "
          />
        </div>
      </div>
    </div>
  );
}
