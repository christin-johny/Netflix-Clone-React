import React from 'react';
import './RowPoster.css';

const RowPoster = ({ data,title }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
  
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='rowPosters'>
        {data?.results?.slice(0, 10).map((movie) => (
          <img
            key={movie.id}
            className='poster'
            src={`${baseImgUrl}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default RowPoster;
