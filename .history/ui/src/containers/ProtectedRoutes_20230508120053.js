import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SERVER_ENDPOINTS } from "../config";
import axios from "axios";
import Login from "../Login";

export default function ProtectedRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const sendRequest = async () => {
    const res = await axios
      .get(`${SERVER_ENDPOINTS}/api/user`, {
        withCredentials: true,
      })
      .catch((err) => console.error(err));

    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => {
      if (data.status === "error") {
        setIsAuthenticated(false);
      } else if (data.userInfo) {
        setIsAuthenticated(true);
      }
    });
  }, []);

  return isAuthenticated ? <Outlet /> : <Login />;
}
