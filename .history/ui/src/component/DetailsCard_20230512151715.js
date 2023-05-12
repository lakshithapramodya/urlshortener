import React from "react";

export default function DetailsCard({ title, text, img }) {
  return (
    <div className="flex flex-col items-center  space-y-1 text-[#424242] h-44">
      <img className="w-16 object-contain" src={img} alt="" />
      <p className="font-bold">{title}</p>
      <p className="font-semibold text-sm">{text}</p>
    </div>
  );
}
