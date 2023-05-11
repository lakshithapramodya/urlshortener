import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import axios from "axios";
import { SERVER_ENDPOINTS } from "./config";
import DataTable from "./component/DataTable";

export default function Statistics() {
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
      .post(`${SERVER_ENDPOINTS}/api/statistics`, {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header hideLogin={false} user={user} />
      <div className="flex items-center justify-center text-2xl -m-6">
        <img
          className="h-10"
          src="https://i.ibb.co/f44H7Nb/linksnip-logo.png"
          alt=""
        />
        <h1 className="text-[#ed3f4a] font-bold">Statistics</h1>
      </div>
      <div className="max-w-[90%] mx-auto mt-8">
        <DataTable urlData={urlData} />
      </div>
      <Footer />
    </div>
  );
}
