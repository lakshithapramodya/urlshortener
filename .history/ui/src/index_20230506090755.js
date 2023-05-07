import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HandleRedirectContainer from "./containers/HandleRedirectContainer";
import Signup from "./Signup";
import Login from "./Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path=":shortId" element={<HandleRedirectContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//
