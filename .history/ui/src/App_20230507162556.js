import { useEffect, useState } from "react";
import Body from "./component/Body";
import { SERVER_ENDPOINTS } from "./config";
import axios from "axios";
axios.defaults.withCredentials = true;
function App() {
  const [user, setUser] = useState();

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
      setUser(data.userInfo);
      console.log(data.userInfo);
    });
  }, []);

  return (
    <div className="bg-[#ecf0f3">
      <Body user={user} />
      {user && <h1>{user.username}</h1>}
    </div>
  );
}

export default App;
