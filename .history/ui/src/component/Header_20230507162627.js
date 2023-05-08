import React, { useState } from "react";

export default function Header({ user }) {
  const [logout, setLogout] = useState(false);
  return (
    <div className="flex items-center justify-between p-4 pt-10 md:p-10">
      <h1 className="text-[#ed3f4a] font-bold text-2xl">LINKSNIP</h1>
      <button></button>
      {/* <div className="flex space-x-2">
        <button className="bg-[#ecf0f3] pt-[0.2rem] pb-2 w-[5.5rem] text-gray-500 rounded-lg ">
          Login
        </button>
        <button className="bg-[#00a7ca] pt-[0.2rem] pb-2 w-[5.5rem] text-gray-100 rounded-lg ">
          Sign up
        </button>
      </div> */}
    </div>
  );
}
