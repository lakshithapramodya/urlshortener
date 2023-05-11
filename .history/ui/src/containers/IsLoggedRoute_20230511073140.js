import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_ENDPOINTS } from "../config";
import { Outlet } from "react-router-dom";
import Login from "../Login";
import App from "../App";

export default function IsLoggedRoute() {
  const [isLogged, setIsLogged] = useState(false);

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
      if (data.userInfo) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  }, []);
  return !isLogged ? <Outlet /> : <App />;
}
