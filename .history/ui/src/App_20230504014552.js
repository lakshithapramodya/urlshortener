import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS } from "./config";

function App() {
  const [url, setUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await axios
      .post(`/api/url`, {
        full: url,
      })
      .then((res) => res.data);
    console.log(result);
  }

  return (
    <div className="text-4xl">
      <h1>Sort</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setUrl(e.target.value)} type="url" />
        <button type="submit">Shrink</button>
      </form>
    </div>
  );
}

export default App;
