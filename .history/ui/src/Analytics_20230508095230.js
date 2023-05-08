import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import axios from "axios";
import { SERVER_ENDPOINTS } from "./config";
import LinksTable from "./component/Table";

export default function Analytics() {
  const [user, setUser] = useState();
  const [urlData, setUrlData] = useState([]);

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
        user: user.email,
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
    });
  }, []);

  useEffect(() => {
    if (user) {
      sendAnalyticsRequest().then((data) => {
        setUrlData(data);
      });
    }
  }, [user]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header hideLogin={false} user={user} />
      <div className="w-1/2 flex flex-col justify-center items-center">
        <LinksTable urlData={urlData} />
      </div>
      <Footer />
    </div>
  );
}
