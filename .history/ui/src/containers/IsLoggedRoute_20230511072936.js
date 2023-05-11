import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_ENDPOINTS } from "../config";

export default function IsLoggedRoute() {
  const [isLogged, setIsLogged] = useState(true);

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
  return <div></div>;
}
