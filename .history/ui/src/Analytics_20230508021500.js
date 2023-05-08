import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import axios from "axios";
import { SERVER_ENDPOINTS } from "./config";

export default function Analytics() {
  const [user, setUser] = useState();
  const [urls, setUrls] = useState();

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
    const res = await axios
      .post(`${SERVER_ENDPOINTS}/api/analytics`, {
        user: user.username,
      })
      .catch((err) => {
        return console.error(err);
      });
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendUserRequest().then((data) => {
      setUser(data.userInfo);
      console.log(data.userInfo);
    });
  }, []);

  useEffect(() => {
    sendAnalyticsRequest().then((data) => {
      console.log(data);
    });
  }, [user]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header hideLogin={false} />
      <h1>Hello</h1>
      <Footer />
    </div>
  );
}
