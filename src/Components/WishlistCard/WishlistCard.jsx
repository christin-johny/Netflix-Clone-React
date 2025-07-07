import React from 'react'
import { baseImgUrl } from '../../Constants/Constants'
import { useNavigate } from 'react-router-dom';
const WishlistCard = ({movie}) => {
  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };
  return (
    <div>
      <img
            key={movie.id}
            className='wishlistPoster'
            src={`${baseImgUrl}${movie.poster_path}`}
            alt={movie.title}
            onClick={() => handleClick(movie)}
            style={{ cursor: 'pointer' }}
          />
    </div>
  )
}

export default WishlistCard
