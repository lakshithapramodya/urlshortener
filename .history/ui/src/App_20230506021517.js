import { useEffect } from "react";
import Body from "./component/Body";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      const user = decodeToken(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
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
