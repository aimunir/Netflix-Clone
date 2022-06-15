import React from "react";
import axios from "axios";
import HomeScreen from "./HomeScreen/HomeScreen";
import "./App.css";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

function App() {
  return (
    <div className="app">
      <HomeScreen />
    </div>
  );
}

export default App;
