import axios from 'axios';
import requests from '../Requests';
import React, { useEffect, useState } from 'react'
import './Banner.css'

const Banner = () => {

  const [movie,setMovie]=useState([]);
  
  
  useEffect(() => {
      async function fetchData(){
        const request=await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.reasults[
                      Math.floor(Math.random() * request.data.reasults.length-1)
          ]
          );
          return request;
      }
      fetchData();

  },[]);

  console.log(movie)

  return (
    <header className='banner' style={{
        backgroundImage:`url("https://images.ctfassets.net/4cd45et68cgf/7JiW5JIJZaNi0LBJXQCuON/28ee69e49f0ca93e29adc4464e82f358/EN-US_MyNameS1_Teaser_Solo_Horizontal_RGB_PRE.jpg?w=2560")`,
        backgroundPosition:"center center",
        // backgroundRepeat:"no-repeat",
    }}>

      <div className="banner-contents">
            <h1 className="banner__title"> Movie Name</h1>
            <div className="banner_button">
            <button className='banner__button'>Play</button>
            <button className='banner__button'>Add My list</button>
            </div>

         <div className="banner_description">
          <h1>This is test description</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione placeat beatae distinctio illo hic unde nam consectetur dignissimos recusandae.</p>
        </div>
      </div>

      <div className='banner--fadeButton'/>
    </header>
  )
};

export default Banner