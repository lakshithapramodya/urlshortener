import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SERVER_ENDPOINTS } from "../config";
import axios from "axios";

export default function ProtectedRoutes() {
  const sendRequest = async () => {
    const res = await axios
      .get(`${SERVER_ENDPOINTS}/api/user`, {
        withCredentials: true,
      })
      .catch((err) => console.error(err));

    const data = await res.data;
    return data;
  };

  const isAuth = sendRequest().then();
  console.log(isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
