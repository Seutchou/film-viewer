import React from "react";

const Card = ({ movie }) => {
  return (
    <div>
      {movie.Response === "False" ? (
        <div> {movie.Error}</div>
      ) : (
        <div className="card">
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={"Affiche de " + movie.Title} />
          <p>({movie.Year})</p>
        </div>
      )}
    </div>
  );
};

export default Card;
