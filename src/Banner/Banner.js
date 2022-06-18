import axios from "axios";
import requests from "../Requests";
import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(requests.fetchNetflixOriginals)
        .then((response) => {
          console.log(response);
          setMovie(
            response.data.results[
              Math.floor(Math.random() * response.data.results.length - 1)
            ]
          );
        })
        .catch((error) => {
          // this.setState({ error: true });
        });




        // console.log(requests.fetchTrending);
        // await axios
        //   .get(requests.fetchTrending)
        //   .then((response) => {
        //     console.log(response);
        //     setMovie(
        //       response.data.results[
        //         Math.floor(Math.random() * response.data.results.length - 1)
        //       ]
        //     );
        //   })
        //   .catch((error) => {
        //     // this.setState({ error: true });
        //   });

        //   console.log(requests.fetchTopRated);
        //   await axios
        //     .get(requests.fetchTopRated)
        //     .then((response) => {
        //       console.log(response);
        //       setMovie(
        //         response.data.results[
        //           Math.floor(Math.random() * response.data.results.length - 1)
        //         ]
        //       );
        //     })
        //     .catch((error) => {
        //       // this.setState({ error: true });
        //     });
    };

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        // backgroundRepeat:"no-repeat",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner__title"> {movie?.title ||movie?.name ||movie?.original_name}</h1>
        <div className="banner_button">
          <button className="banner__button">Play</button>
          <button className="banner__button">Add My list</button>
        </div>

        <div className="banner_description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            ratione placeat beatae distinctio illo hic unde nam consectetur
            dignissimos recusandae.
          </p>
        </div>
      </div>

      <div className="banner--fadeButton" />
    </header>
  );
};

export default Banner;
