import React from "react";
import MovieForm from "../containers/MovieForm";
import MovieNames from "../containers/MovieNames";
import RandomMovie from "../containers/RandomMovie";
import HomeText from "./HomeText";
import Trailers from "./Trailers";

function Movies() {
  return (
    <div className="movies-component">
      <HomeText />
      <RandomMovie />
      <h1>🎥 Add a YouTube Trailer from your Favorite Movie 🎥</h1>
      <MovieForm />
      <h1>List of Movies</h1>
      <MovieNames />
    </div>
  );
}

export default Movies;
