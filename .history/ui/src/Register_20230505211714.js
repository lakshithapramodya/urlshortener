import React from "react";
import Header from "./component/Header";

export default function Register() {
  return (
    <div>
      <Header />
      <div>
        <h1>Register</h1>
        <form action="">
          <input type="text" />
          <input type="email" />
          <input type="password" />
        </form>
      </div>
    </div>
  );
}
