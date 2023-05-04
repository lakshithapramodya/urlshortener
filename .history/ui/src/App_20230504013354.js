import axios from "axios";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="text-4xl">
      <h1>Sort</h1>
      {url}
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setUrl(e.target.value)} type="url" />
        <button type="submit">Shrink</button>
      </form>
    </div>
  );
}

export default App;
