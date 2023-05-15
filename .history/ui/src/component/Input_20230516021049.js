import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Input({ handleSubmit, setUrl, url }) {
  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="text-xl text-[#424242] font-semibold font-mono text-center">
        <h1>Enter Your Long URL to Shorten</h1>
      </div>
      <div className="mt-5 w-full md:w-[90%]">
        <div
          className="flex items-center border-2 rounded-full py-2 
     shadow-md"
        >
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="!outline-0 pl-5 bg-transparent flex-grow 
          min-w-0  text-gray-600 "
            type="url"
            placeholder="http://www.example.com"
          />
          <ChevronRightIcon
            onClick={(e) => {
              const validUrl = isValidUrl(url);
              if (!validUrl && url) {
                console.log("Please enter a valid url!");
                return toast.error("Please enter a valid url!");
              }
              handleSubmit(e);
            }}
            className="h-8 bg-[#ff385c]
         text-white rounded-full p-2 cursor-pointer mx-2 "
          />
        </div>
      </div>
    </div>
  );
}
