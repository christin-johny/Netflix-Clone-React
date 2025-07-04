import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RowPoster from '../RowPoster/RowPoster';

const genreMap = {
  Action: 28,
  Adventure: 12,
  SciFi: 878,
  Comedy: 35,
  Crime:80,
};

const FilmRows = () => {
  const [moviesByGenre, setMoviesByGenre] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      const newData = {};
      for (const [genreName, genreId] of Object.entries(genreMap)) {
        try {
          const res = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=6b2680c92e9bb6a181c6d74d863bbe77&with_genres=${genreId}`
          );
          newData[genreName] = res.data;
        } catch (err) {
          console.error(`Error fetching ${genreName} movies:`, err);
        }
      }
      setMoviesByGenre(newData);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {Object.entries(moviesByGenre).map(([genre, data]) => (
        <RowPoster key={genre} title={genre} data={data} />
      ))}
    </div>
  );
};

export default FilmRows;
