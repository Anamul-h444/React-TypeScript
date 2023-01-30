import React from "react";
import "./App.css";
import Button from "./components/Button";

const btnStyle = {
  backgroundColor:"blue",
  color:"white"
}

function App() {
  return (
    <div className="App">
      <Button buttonStyle={btnStyle} />
    </div>
  );
}

export default App;
