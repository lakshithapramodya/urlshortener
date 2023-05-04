import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function Input({ handleSubmit, setUrl, url }) {
  return (
    <div>
      <div className="text-5xl text-[#495e73] font-semibold mt-1">
        <h3>when</h3>
        <h3>the shorter,</h3>
      </div>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="  px-8 flex justify-center py-2 rounded-3xl bg-gray-200">
          <div className="flex items-center justify-center space-x-2">
            <div className="h-5 w-5 rounded-full bg-[#e3736e]" />
            <div className="h-5 w-5 rounded-full bg-[#fabf3f]" />
            <div className="h-5 w-5 rounded-full bg-[#59ca42]" />
          </div>
          <div className="flex space-x-2 items-center justify-center px-4">
            <ChevronLeftIcon className="h-5 bg-gray-50 rounded text-gray-400" />
            <ChevronRightIcon className="h-5 bg-gray-50 rounded text-gray-400" />
          </div>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="url"
            className="py-1 w-[80%] rounded-3xl text-gray-500 focus:ring-transparent focus:outline-none px-10"
          />
          <button
            type="submit"
            className="bg-gray-100 text-gray-400 font-bold rounded-full w-10 ml-4 flex items-center justify-center"
          >
            <ArrowRightIcon className="h-6" />
          </button>
        </div>
      </form>
    </div>
  );
}
