import React, { useState, useEffect,useCallback } from "react";

import MoviesList from "./components/MoviesList";

import Form from './components/Form/form'

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getMovieHandler = useCallback( async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const data = await response.json();

      const transformedData = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setIsLoading(false);
      setMovies(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[])

  useEffect(() => {
    getMovieHandler()
  }, [getMovieHandler]);

  let content = <p>Found no movies</p>;

  if (isLoading) {
    content = <p>Loading....</p>;
  }

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
     <Form/>
      <section>
        <button onClick={getMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
