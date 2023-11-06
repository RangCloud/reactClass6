import React from "react";
import './App.css';
import Header from "./components/Header";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  return (
    <div className="App">
      <div className="section">
        <Header/>
      </div>
      <div className="section">
        <Viewer/>
      </div>
      <div className="section">
        <Controller/>
      </div>
    </div>
  );
}

export default App;
