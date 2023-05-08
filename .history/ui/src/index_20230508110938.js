import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HandleRedirectContainer from "./containers/HandleRedirectContainer";
import Signup from "./Signup";
import Login from "./Login";
import Analytics from "./Analytics";
import ProtectedRoutes from "./containers/ProtectedRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/analytics" element={<Analytics />} />
        </Route>
        <Route path=":shortId" element={<HandleRedirectContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//
