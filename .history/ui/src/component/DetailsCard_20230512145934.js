import React from "react";

export default function DetailsCard() {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 text-[#424242]">
      <img
        className="w-16 object-contain"
        src="https://i.ibb.co/p2xWdGc/icon-like.png"
        alt=""
      />
      <p className="font-bold">Easy</p>
      <p className="font-semibold">
        LinkSnip is easy and fast, enter the long link to get your shortened
        link
      </p>
    </div>
  );
}
