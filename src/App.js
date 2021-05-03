import React, { useState } from "react";
import "./style.css";
import "./App.css";

export default function App() {
  const [count, setCount] = useState("");

  function changeHandler(e) {
    setCount(e.target.value);
  }

  return (
    <div>
      <div className="container">
        <input
          type="text"
          placeholder="Search"
          value={count}
          onChange={changeHandler}
        />

        {count}
      </div>
    </div>
  );
}
