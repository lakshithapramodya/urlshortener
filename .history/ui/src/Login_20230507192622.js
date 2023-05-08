import React, { useState } from "react";
import Header from "./component/Header";
import axios from "axios";
import { SERVER_ENDPOINTS } from "./config";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      console.log(data);
      if (data.message === "Password incorrect") {
        setError("Incorrect Password");
        setPassword("");
      } else if (data.message === "User not found") {
        setError("User not found");
        setEmail("");
        setPassword("");
      } else if (data.message === "Password correct") {
        setError("");
        navigate("/");
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="grid justify-center items-center pt-32">
        <form onSubmit={handleSubmit} className="mt-8 grid w-1/2 space-y-2">
          <input
            placeholder="Email"
            value={email}
            className="border-[#ed3f4a] border rounded p-4"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            value={password}
            className="border"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
