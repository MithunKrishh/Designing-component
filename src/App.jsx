// src/App.jsx
import React from "react";
import "./App.css";
import Usercard from "./components/usercard.jsx";

function App() {
  const cards = Array.from({ length: 10 }); // Creating 10 user cards

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 columns layout
    gap: "20px",
    padding: "20px",
    justifyContent: "center",
  };

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <Usercard key={index} />
      ))}
    </div>
  );
}

export default App;
