import React, { useEffect, useState } from 'react';
import axios from '../../Axios';
import { Api_key } from '../../Constants/Constants';
import WishlistCard from '../WishlistCard/WishlistCard';
import Navbar from '../Navbar/Navbar'
import './Wishlist.css'

const Wishlist = () => {
  const [wishlist] = useState(localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : []);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviePromises = wishlist.map((id) =>
          axios.get(`/movie/${id}?api_key=${Api_key}`).then((res) => res.data)
        );
        const movieData = await Promise.all(moviePromises);
        setMovies(movieData);
      } catch (err) {
        console.error("Error fetching wishlist movies:", err);
      }
    };

    if (wishlist.length > 0) {
      fetchMovies();
    }
  }, [wishlist]);

  return (
  <>
    <Navbar />
    <div className="wishlist-container">
      {movies.map((movie) => (
        <WishlistCard key={movie.id} movie={movie} />
      ))}
    </div>
  </>
);

};

export default Wishlist;
