import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import axios from "axios";
import { SERVER_ENDPOINTS } from "./config";

export default function Analytics() {
  const [user, setUser] = useState();

  const sendUserRequest = async () => {
    const res = await axios
      .get(`${SERVER_ENDPOINTS}/api/user`, {
        withCredentials: true,
      })
      .catch((err) => console.error(err));

    const data = await res.data;
    return data;
  };

  const sendAnalyticsRequest = async () => {
    const res = await axios.post(`${SERVER_ENDPOINTS}/api/analytics`, {
      user: user.username,
    });
  };

  useEffect(() => {
    sendUserRequest().then((data) => {
      setUser(data.userInfo);
      console.log(data.userInfo);
    });
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header hideLogin={false} />
      <h1>Hello</h1>
      <Footer />
    </div>
  );
}
