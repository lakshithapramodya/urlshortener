import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import axios from "axios";
import { SERVER_ENDPOINTS } from "./config";
import DataTable from "./component/DataTable";

export default function Statistics() {
  const [user, setUser] = useState();
  const [urlData, setUrlData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    const res = await axios
      .post(`${SERVER_ENDPOINTS}/api/statistics`, {
        user: user.email,
      })
      .catch((err) => {
        return console.error(err);
      });
    const data = await res.data;
    setLoading(false);
    return data;
  };

  useEffect(() => {
    sendUserRequest().then((data) => {
      setUser(data.userInfo);
    });
  }, []);

  useEffect(() => {
    // setLoading(true);
    if (user) {
      sendAnalyticsRequest().then((data) => {
        setUrlData(data);
      });
    }
    // setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header hideLogin={false} user={user} />
      <div className="flex items-center justify-center text-2xl mt-auto">
        <img
          className="h-10"
          src="https://i.ibb.co/61ZPJdP/linksnip-logo-new.png"
          alt=""
        />
        <h1 className="text-[#ff385c] font-bold">Statistics</h1>
      </div>
      <div className="max-w-[90%] mx-auto mt-6">
        <DataTable urlData={urlData} loading={loading} />
      </div>
      <Footer />
    </div>
  );
}
