import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../Login";

export default function ProtectedRoutes() {
  const userAuth = () => {
    const user = { loggedIn: true };
    return user && user.loggedIn;
  };

  const isAuth = userAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
