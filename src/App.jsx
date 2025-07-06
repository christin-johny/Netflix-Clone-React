import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Wishlist from './Components/Wishlist/Wishlist'
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path='/wishlist' element ={<Wishlist/>}/>
      </Routes>
    </Router>
  );
};

export default App;

