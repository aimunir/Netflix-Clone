 import React from 'react'
 import Banner from '../Banner/Banner'
 import Navbar from '../Navbar/Navbar'
 import Row from '../Row/Row'
 import requests from '../Requests'
 import './HomeScreen.css'
 
 const HomeScreen = () => {
   return (
     <div className='home-screen'>
             {/* navbar */}
                  <Navbar/>                
             {/* banner */}
                <Banner/>
             {/* row */}
                 <Row  title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}/>
                 <Row  title="Trending Now" fetchUrl={requests.fetchTrending} />
                 <Row  title="Top Rated Now" fetchUrl={requests.fetchTopRated} />
                 <Row  title="Action Movie" fetchUrl={requests.fetchActionMovie} />
                 <Row  title="Comedy Movie" fetchUrl={requests.fetchComedyMovie} />
                 <Row  title="Horror Movie" fetchUrl={requests.fetchHorrorMovie} />
                 <Row  title="Romantic Movie" fetchUrl={requests.fetchRomanceMovie} />
                 <Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
     </div>
   )
 }
 
 export default HomeScreen
