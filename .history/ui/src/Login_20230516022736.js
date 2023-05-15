import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import axios from "axios";
import { SERVER_ENDPOINTS } from "./config";
import { useNavigate } from "react-router-dom";
import Footer from "./component/Footer";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const pathname = window.location.pathname;

  const sendUserRequest = async () => {
    const res = await axios
      .get(`${SERVER_ENDPOINTS}/api/user`, {
        withCredentials: true,
      })
      .catch((err) => console.error(err));

    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendUserRequest().then((data) => {
      if (data.userInfo) {
        navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendLoginRequest = async () => {
    const res = await axios
      .post(`${SERVER_ENDPOINTS}/api/login`, {
        email: email,
        password: password,
      })
      .catch((err) => console.error(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendLoginRequest().then((data) => {
      console.log(data);
      if (data.message === "Password incorrect") {
        setError("The password that you've entered is incorrect.");
        setPassword("");
        return toast.error("Invalid Credentials!");
      } else if (data.message === "User not found") {
        setError(
          "Please ensure that you have entered the correct email or sign up if you have not registered yet."
        );
        setEmail("");
        setPassword("");
        return toast.error("Invalid Credentials!");
      } else if (data.message === "Password correct") {
        setError("");
        if (pathname === "/statistics") {
          window.location.reload();
        } else {
          navigate("/");
        }
      }
    });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Header hideLogin={true} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className=" min-h-screen flex flex-col justify-center items-center w-full pt-32">
        <div className="flex flex-col justify-center items-center w-[90%] md:w-2/3 lg:w-1/2 xl:w-[30%]">
          <div className="flex items-center justify-center text-2xl">
            <img
              className="h-10"
              src="https://i.ibb.co/61ZPJdP/linksnip-logo-new.png"
              alt=""
            />
            <h1 className="text-[#ff385c] font-bold">LINKSNIP</h1>
          </div>
          {pathname === "/statistics" && (
            <p className="text-[#ff385c] mt-2 -mb-2">
              Please login to access your statistics
            </p>
          )}
          <form onSubmit={handleSubmit} className="mt-8 grid w-full space-y-4">
            <input
              placeholder="Email"
              value={email}
              className="border-gray-300 border rounded p-2  focus:outline-red-400"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Password"
              value={password}
              className="border-gray-300 border rounded p-2  focus:outline-red-400"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <p className="text-blue-500 text-sm font-medium">{error}</p>
            )}
            <button
              id="login"
              className="bg-[#ff385c] rounded p-2 text-white font-bold btn"
              type="submit"
            >
              Login
            </button>
            <div className="border-t border-gray-300" />
            <button
              id="signup"
              onClick={() => navigate("/signup")}
              className="rounded p-2 text-[#424242] border border-[#424242] font-bold btn"
            >
              Create new account
            </button>
          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
}
