import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./components/Card";
import axios from "axios";

//Always keep the ZEN ATTITUDE in a MIND OVERFLOW !

const App = () => {
  const [search, setSearch] = useState(null);
  const [movie, setMovie] = useState(false);
  const [trends, setTrends] = useState([]);
  const trendsTitles = [
    "dune",
    "annette",
    "mon frere",
    "athena",
    "footloose",
    "yeh ballet",
    "Aquaman",
    "lou",
    "carter",
    "Halftime",
    "red notice",
    "The Father",
    "Don't Look Up",
  ];

  async function getTrends(title) {
    axios
      .get("http://www.omdbapi.com/?apikey=896e06bd&t=" + title)
      .then((res) => {
        setTrends((prevTrends) => [...prevTrends, res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    trendsTitles.map((title) => getTrends(title));
  }, []);

  async function getData(title) {
    axios
      .get("http://www.omdbapi.com/?apikey=896e06bd&t=" + title)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="app">
      <h1>Speedy recovery, Sista.js !😎🌿</h1>

      <div className="search-bar">
        <input
          type="text"
          id="movie"
          name="movie"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Which movie are you looking for?"
        />
        <button
          onClick={() => {
            getData(search);
          }}
        >
          SEARCH
        </button>
      </div>

      <div className="cards">
        {movie ? (
          <Card movie={movie} />
        ) : (
          trends.map((movie, index) => <Card movie={movie} key={index} />)
        )}
      </div>

      {movie ? (
        <button
          onClick={() => {
            setMovie(null);
          }}
        >
          Back to trends
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
