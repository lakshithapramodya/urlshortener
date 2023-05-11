import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import axios from "axios";
import { SERVER_ENDPOINTS } from "./config";
import { useNavigate } from "react-router-dom";
import Footer from "./component/Footer";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const sendUserRequest = async () => {
    const res = await axios
      .get(`${SERVER_ENDPOINTS}/api/user`, {
        withCredentials: true,
      })
      .catch((err) => console.error(err));

    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendUserRequest().then((data) => {
      if (data.userInfo) {
        navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signupRequest = async () => {
    const res = await axios
      .post(`${SERVER_ENDPOINTS}/api/signup`, {
        username: username,
        email: email,
        password: password,
      })
      .catch((error) => console.log(error));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupRequest().then((data) => {
      if (data.status === "ok") {
        navigate("/login");
      } else if (data.message === "user already exists") {
        setUserName("");
        setEmail("");
        setPassword("");
        setError("User already exists.");
      }
    });
  };

  return (
    <div>
      <Header hideLogin={true} />
      <div className="min-h-screen flex flex-col justify-center items-center pt-32">
        <div className="flex items-center justify-center text-2xl">
          <img
            className="h-10"
            src="https://i.ibb.co/61ZPJdP/linksnip-logo-new.png"
            alt=""
          />
          <h1 className="text-[#ff385c] font-bold">LINKSNIP</h1>
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
          {error && (
            <p className="text-blue-500 text-sm font-medium">{error}</p>
          )}
          <button
            className="bg-[#ff385c] rounded p-2 text-white font-bold"
            type="submit"
          >
            Sign Up
          </button>
          <div className="border-t border-gray-300" />
          <button
            onClick={() => navigate("/login")}
            className="rounded p-2 text-[#424242] border border-[#424242] font-bold btn"
          >
            Login
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
}
