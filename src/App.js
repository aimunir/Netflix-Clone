import React from "react";
import axios from "axios";
import HomeScreen from "./HomeScreen/HomeScreen";
import Login from "./Log-in/Login"
import "./App.css";
import { BrowserRouter,Routes,Route} from "react-router-dom";
axios.defaults.baseURL = "https://api.themoviedb.org/3";


function App() {
   
  const user=null;
  
  return (
    <div className="app">    
        <BrowserRouter>  
              {!user ? <Login/> : <Routes>     
                                       <Route path="/" element={ <HomeScreen />} />
                                </Routes>}                             
        </BrowserRouter>
          
    </div>
  );
}

export default App;
