import React from "react";

export default function DetailsCard() {
  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      <img
        className="w-16 object-contain"
        src="https://i.ibb.co/p2xWdGc/icon-like.png"
        alt=""
      />
      <p className="font-semibold">Easy</p>
      <p> is easy and fast, enter the long link to get your shortened link</p>
    </div>
  );
}
