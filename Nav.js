import React from 'react';
import Request from '../../Helpers/Request';
import './Nav.css';
const Navbar = ( {setSelectedOption}) => {
    return(
        <div className = "nav">
        <h2 onClick = {()=>setSelectedOption(Request.fetchTrending)}>Trendings</h2>
        <h2 onClick = {()=>setSelectedOption(Request.fetchActionMovies)}>Action</h2>
        <h2 onClick = {()=>setSelectedOption(Request.fetchTopRated)}>Top Rated</h2>
        <h2 onClick = {()=>setSelectedOption(Request.fetchComedyMovies)}>Comedy</h2>
        <h2 onClick = {()=>setSelectedOption(Request.fetchHorrorMovies)}>Horror</h2>
        <h2 onClick = {()=>setSelectedOption(Request.fetchRomanceMovies)}>Romance</h2>
        <h2 onClick = {()=>setSelectedOption(Request.fetchSciFi)}>sci-fi</h2>
        <h2 onClick = {()=>setSelectedOption(Request.fetchAnimation)}>Animation</h2>
        <h2 onClick = {()=>setSelectedOption(Request.fetchWestern)}>Western</h2>
        <h2 onClick = {()=>setSelectedOption(Request.fetchActionMovies)}>Movie</h2>
        </div>
    );
};
export default Navbar;