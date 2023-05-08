import axios from "axios";
import React from "react";
import { SERVER_ENDPOINTS } from "../config";

export default function Header({ user }) {
  const logoutRequest = async () => {
    const res = await axios
      .get(`${SERVER_ENDPOINTS}/api/logout`, {
        withCredentials: true,
      })
      .catch((err) => console.error(err));

    const data = await res.data;
    return data;
  };

  const handleLogout = (e) => {
    e.preventDefault();
    const data = logoutRequest();
    console.log(data);
  };

  return (
    <div className="flex items-center justify-between p-4 pt-10 md:p-10">
      <h1 className="text-[#ed3f4a] font-bold text-2xl">LINKSNIP</h1>
      {user && <button onClick={handleLogout}>Logout</button>}

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
