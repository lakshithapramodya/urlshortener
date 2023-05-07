import { useEffect } from "react";
import Body from "./component/Body";
import jwt from "jsonwebtoken";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        history.replace("/login");
      } else {
        console.log(user);
      }
    }
  }, []);

  return (
    <div className="bg-[#ecf0f3">
      <Body />
    </div>
  );
}

export default App;
