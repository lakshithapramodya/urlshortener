import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SERVER_ENDPOINTS } from "../config";
import axios from "axios";

export default async function ProtectedRoutes() {
  const res = await axios
    .get(`${SERVER_ENDPOINTS}/api/user`, {
      withCredentials: true,
    })
    .catch((err) => console.error(err));

  const result = await res.data;
  result.then((data) => {
    if (data.status === "error") return <Outlet />;
    else if (data.userInfo) return <Navigate to="/login" />;
  });
}
