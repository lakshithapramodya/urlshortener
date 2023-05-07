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
        <form onSubmit={(e) => handleSubmit} className="mt-8">
          <div className="grid w-1/2 space-y-2">
            <label>Username</label>
            <input
              className="border"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
            <label>email</label>
            <input
              className="border"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>password</label>
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
