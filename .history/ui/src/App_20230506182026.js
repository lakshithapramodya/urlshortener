import { useEffect, useState } from "react";
import Body from "./component/Body";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { SERVER_ENDPOINTS } from "./config";
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

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
      setUser(data.user);
    });
  }, []);

  return (
    <div className="bg-[#ecf0f3">
      <Body />
      {user && <h1>user</h1>}
    </div>
  );
}

export default App;
