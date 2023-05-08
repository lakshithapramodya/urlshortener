import { useEffect, useState } from "react";
import Body from "./component/Body";
import { useNavigate } from "react-router-dom";
import { SERVER_ENDPOINTS } from "./config";
import axios from "axios";
axios.defaults.withCredentials = true;
let firstRender = true;
function App() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const refreshRequest = async () => {
    const res = await axios
      .get(`${SERVER_ENDPOINTS}/api/refresh`, {
        withCredentials: true,
      })
      .catch((err) => console.error(err));

    const data = await res.data;
    return data;
  };

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
    if (firstRender) {
      firstRender = false;
      sendRequest().then((data) => {
        setUser(data.userInfo);
        console.log(data.userInfo);
      });
    }
    let interval = setInterval(() => {
      refreshRequest().then((data) => {
        setUser(data.userInfo);
        console.log(data.userInfo);
      });
    }, 3450000);
  }, []);

  return (
    <div className="bg-[#ecf0f3">
      <Body />
      {user && <h1>{user.username}</h1>}
    </div>
  );
}

export default App;
