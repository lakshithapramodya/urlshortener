import React, { useState } from "react";
import Header from "./component/Header";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitted: {${username},${email} ,${password}}`);
  };

  return (
    <div>
      <Header />
      <div className="grid justify-center items-center pt-32">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid w-1/2">
            <input
              className="border"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="border"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
