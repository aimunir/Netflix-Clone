import React from "react";
import axios from "axios";
import HomeScreen from "./HomeScreen/HomeScreen";
import "./App.css";
import { Routes,Route} from "react-router-dom";
axios.defaults.baseURL = "https://api.themoviedb.org/3";


function App() {
  return (
    <div className="app">    
        <Routes>
            <Route path="./HomeScreen" element={ <HomeScreen />} />
        </Routes>
          
    </div>
  );
}

export default App;
