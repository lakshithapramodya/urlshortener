import axios from "axios";
import { useState } from "react";

function App() {
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="text-4xl">
      <h1>Sort</h1>
      <form action="">
        <input type="url" />
        <button>Shrink</button>
      </form>
    </div>
  );
}

export default App;
