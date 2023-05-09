import axios from "axios";
import React from "react";
import { SERVER_ENDPOINTS } from "../config";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ user, hideLogin }) {
  const navigate = useNavigate();
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
        <h1 className="text-[#ed3f4a] font-bold text-2xl cursor-pointer">
          LINKSNIP
        </h1>
      </Link>
      {user ? (
        <div className="flex items-center space-x-2 ">
          <h3 className="rounded-lg px-2 py-1 text-gray-500 italic">
            Logged in as <span className="font-bold">{user.username}</span>{" "}
          </h3>
          {window.location.pathname === "/" && (
            <Link to="/statistics">
              <button className="bg-[#ecf0f3] pt-[0.2rem] pb-2 w-[5.5rem] text-gray-500 rounded-lg ">
                Statistics
              </button>
            </Link>
          )}

          <button
            className="bg-[#ed3f4a] pt-[0.2rem] pb-2 w-[5.5rem] text-gray-100 rounded-lg "
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className={`flex space-x-2 ${hideLogin && "hidden"}`}>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#ecf0f3] pt-[0.2rem] pb-2 w-[5.5rem] text-gray-500 rounded-lg "
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-[#ed3f4a] pt-[0.2rem] pb-2 w-[5.5rem] text-gray-100 rounded-lg "
          >
            Sign up
          </button>
        </div>
      )}
    </div>
  );
}
