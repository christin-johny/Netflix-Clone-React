import React, { useEffect, useState } from 'react'
import { useParams,useLocation, useNavigate } from 'react-router-dom';
import axios from '../../Axios'
import { Api_key} from '../../Constants/Constants';
import YouTube from 'react-youtube';
import './MovieDetails.css'


const MovieDetails = () => {
  const {id} = useParams();
  const location = useLocation()
  const {movie} = location.state ||{};
  const [VideoKey,setVideoKey] = useState('');
  const [Wishlist,setWishlist] = useState(localStorage.getItem('wishlist')?JSON.parse(localStorage.getItem('wishlist')):[]);
  const navigate = useNavigate()
  const opts = {
      height: '450',
      width: '100%',
      playerVars: {
        autoplay: 0,
      },
    };

useEffect(()=>{
  const fetchData= async () => {
    try {
    const res =await axios.get(`/movie/${id}/videos?language=en-US&api_key=${Api_key}`);
    setVideoKey(res.data?.results[0]?.key);
  } catch (error) {
    console.error(error)
  }
  }
  fetchData();
},[]);

const addToWishlist = () => {
  const updatedWishlist = [...Wishlist, id];
  const uniqueWishlist = Array.from(new Set(updatedWishlist));

  setWishlist(uniqueWishlist);
  localStorage.setItem("wishlist", JSON.stringify(uniqueWishlist));
};

  return (
    <div className="movie-details-container">
  <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

  <div className="video-section">
    <YouTube videoId={VideoKey} opts={opts} />
  </div>

  <div className="backdrop">
    <div className="details-content">
  <div className="details-header">
    <h1 className="details-title">{movie.original_title}</h1>
    <button
      className="wishlist-button"
      onClick={addToWishlist}
      disabled={Wishlist.includes(id)}
    >
      {Wishlist.includes(id) ? "Added to Wishlist" : "Add to Wishlist"}
    </button>
  </div>

  <p className="details-rating">⭐ {movie.vote_average}</p>
  <p className="details-overview">{movie.overview}</p>
</div>

  </div>
</div>



  )
}

export default MovieDetails
