import React, { useState } from "react";
import Header from "./component/Header";
import axios from "axios";
import { SERVER_ENDPOINTS } from "./config";
import { useNavigate } from "react-router-dom";
import Footer from "./component/Footer";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const pathname = window.location.pathname;

  const sendRequest = async () => {
    const res = await axios
      .post(`${SERVER_ENDPOINTS}/api/login`, {
        email: email,
        password: password,
      })
      .catch((err) => console.error(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      if (data.message === "Password incorrect") {
        setError("The password that you've entered is incorrect.");
        setPassword("");
      } else if (data.message === "User not found") {
        setError(
          "Please ensure that you have entered the correct email or sign up if you have not registered yet."
        );
        setEmail("");
        setPassword("");
      } else if (data.message === "Password correct") {
        setError("");
        if (pathname === "/statistics") {
          window.location.reload();
        } else {
          navigate("/");
        }
      }
    });
  };

  return (
    <div>
      <Header hideLogin={true} />

      <div className=" min-h-screen flex flex-col justify-center items-center w-full pt-32">
        <div className="flex items-center justify-center text-2xl">
          <img
            className="h-10"
            src="https://i.ibb.co/f44H7Nb/linksnip-logo.png"
            alt=""
          />
          <h1 className="text-[#ed3f4a] font-bold">LINKSNIP</h1>
        </div>
        {pathname === "/statistics" && (
          <p className="text-[#ed3f4a] mt-2 -mb-2">
            Please login to access your statistics
          </p>
        )}
        <form onSubmit={handleSubmit} className="mt-8 grid w-[24rem] space-y-4">
          <input
            placeholder="Email"
            value={email}
            className="border-gray-300 border rounded p-2  focus:outline-red-400"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            value={password}
            className="border-gray-300 border rounded p-2  focus:outline-red-400"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-blue-500 text-sm font-medium">{error}</p>
          )}
          <button
            className="bg-[#ed3f4a] rounded p-2 text-white font-bold"
            type="submit"
          >
            Login
          </button>
          <div className="border-t border-gray-300" />
          <button
            onClick={() => navigate("/signup")}
            className="bg-[#ecf0f3] rounded p-2 text-gray-500 font-bold"
          >
            Create new account
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
}
