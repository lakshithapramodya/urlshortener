import React, { useState } from "react";
import Header from "./component/Header";
import axios from "axios";
import { SERVER_ENDPOINTS } from "./config";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserName("");
    setEmail("");
    setPassword("");

    const results = await axios
      .post(`${SERVER_ENDPOINTS}/api/signup`, {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => res.data);
    console.log(results);

    if (results.status === "ok") {
      navigate("/login");
    }
  };

  return (
    <div>
      <Header hideLogin={true} />
      <div className="grid justify-center items-center pt-32">
        <div className="flex items-center justify-center text-2xl">
          <img
            className="h-10"
            src="https://i.ibb.co/f44H7Nb/linksnip-logo.png"
            alt=""
          />
          <h1 className="text-[#ed3f4a] font-bold">LINKSNIP</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8  grid w-[24rem] space-y-4"
        >
          <input
            placeholder="Username"
            value={username}
            className="border-gray-300 border rounded p-2  focus:outline-red-400"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />

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
          <button
            className="bg-[#ed3f4a] rounded p-2 text-white font-bold"
            type="submit"
          >
            Sign Up
          </button>
          <div className="border-t border-gray-300" />
          <button className="bg-[#ecf0f3] rounded p-2 text-gray-500 font-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
