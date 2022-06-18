import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "http://image.tmdb.org/t/p/original/";

  console.log(fetchUrl + "testing");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(fetchUrl)
        .then((response) => {
          console.log(response);
          setMovies(response.data.results)
        })
        .catch((error) => {
          // this.setState({ error: true });
        });
      
    };

    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
      {movies.map((movie) => 
      ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.poster_path)) &&(
        <img
           className={`row__poster ${isLargeRow && "row__posterLarge"}`}
           key={movie.id}
             src={`${base_url}${
             isLargeRow ? movie.poster_path : movie.backdrop_path
             }`}
             alt="{movie.name}"
           />) 
      )}
      </div>
      
    </div>
  );
}

export default Row;
