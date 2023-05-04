import axios from "axios";
import { useState } from "react";

function App() {
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="text-4xl">
      <h1>Sort</h1>
      <form onSubmit={handleSubmit}>
        <input type="url" />
        <button type="submit">Shrink</button>
      </form>
    </div>
  );
}

export default App;
