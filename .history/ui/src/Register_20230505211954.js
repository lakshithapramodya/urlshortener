import React from "react";
import Header from "./component/Header";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div>
      <Header />
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <input type="email" />
          <input type="password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
