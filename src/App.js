import React from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import "./style.css";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <NavBar />
      {cards}
    </div>
  );
}

export default App;
