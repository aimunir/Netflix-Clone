import React from 'react'
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';
import './Banner.css'

const Banner = () => {
  return (
    <header className='banner' style={{
        backgroundImage:`url("https://images.ctfassets.net/4cd45et68cgf/7JiW5JIJZaNi0LBJXQCuON/28ee69e49f0ca93e29adc4464e82f358/EN-US_MyNameS1_Teaser_Solo_Horizontal_RGB_PRE.jpg?w=2560")`,
        backgroundPosition:"center center",
        // backgroundRepeat:"repeat-x",
    }}>
        <h1 className="movie__title"> movie name</h1>
    </header>
  )
};

export default Banner