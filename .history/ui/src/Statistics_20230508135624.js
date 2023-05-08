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
      <div className="md:w-2/3 w-[90%] m-auto">
        <DataTable urlData={urlData} />
      </div>
      <Footer />
    </div>
  );
}
