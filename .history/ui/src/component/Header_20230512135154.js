import axios from "axios";
import React from "react";
import { SERVER_ENDPOINTS } from "../config";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function Header({ user, hideLogin }) {
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
    logoutRequest().then((data) => console.log(data));
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between p-4 pt-10 md:p-10">
      <Link to="/">
        <h1 className="text-[#ff385c] font-bold text-2xl cursor-pointer ">
          LINKSNIP
        </h1>
      </Link>
      <NavBar user={user} handleLogout={handleLogout} />
    </div>
  );
}
