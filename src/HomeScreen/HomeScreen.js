 import React from 'react'
 import Banner from '../Banner/Banner'
 import Navbar from '../Navbar/Navbar'
 import Row from '../Row/Row'
 import './HomeScreen.css'
 
 const HomeScreen = () => {
   return (
     <div className='home-screen'>
             {/* navbar */}
                  <Navbar/>                
             {/* banner */}
                <Banner/>
             {/* row */}
                 <Row/>


     </div>
   )
 }
 
 export default HomeScreen
