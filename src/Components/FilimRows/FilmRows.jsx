import React, { useEffect, useState } from 'react';
import axios from '../../Axios.js'
import { Api_key } from '../../Constants/Constants.js';
import RowPoster from '../RowPoster/RowPoster';

const genreMap = {
  Action: 28,
  Adventure: 12,
  SciFi: 878,
  Comedy: 35,
  Crime: 80,
};

const FilmRows = () => {
  const [moviesByGenre, setMoviesByGenre] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      const newData = {};

      try {
        const trendingRes = await axios.get(`/trending/movie/week?api_key=${Api_key}`);
        newData['Trending'] = trendingRes.data;
      } catch (err) {
        console.error('Error fetching trending movies:', err);
      }

      for (const [genreName, genreId] of Object.entries(genreMap)) {
        try {
          const res = await axios.get(`/discover/movie?api_key=${Api_key}&with_genres=${genreId}`
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
