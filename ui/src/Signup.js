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
      <Header />
      <div className="grid justify-center items-center pt-32">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="mt-8 grid w-1/2 space-y-2">
          <label>Username</label>
          <input
            value={username}
            className="border"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>email</label>
          <input
            value={email}
            className="border"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>password</label>
          <input
            value={password}
            className="border"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
