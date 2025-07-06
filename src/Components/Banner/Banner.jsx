import React, { useEffect, useState } from "react";
import {baseImgUrl,Api_key} from '../../Constants/Constants.js'
import axios from '../../Axios.js'
import "./Banner.css"; 

const Banner =  () => {
  const [movie,setMovie] =useState(null)
  useEffect(()=>{
    const fectchMovie = async () => {
      try {
        const res = await axios.get(`/movie/986056?api_key=${Api_key}`)
      setMovie(res.data)
      
      } catch (error) {
        console.log(error)
      }
      
    }
    fectchMovie();
  },[])
  return (
    <div className="banner" style={{ backgroundImage: `url("${baseImgUrl}${movie?.backdrop_path}")` }}
>
      <div className="content">
        <h1 className="title">{movie?.original_title}</h1>
        <div className="banner_button">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie?.overview}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
};

export default Banner;
