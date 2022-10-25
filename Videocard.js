import React from 'react';
import TextTruncate from "react-text-truncate";
import {ThumbUpSharp} from "@material-ui/icons";
import {forwardRef} from 'react';
import "./Videocard.css";
const base_url = "https://image.tmdb.org/t/p/original"

const Videocard = forwardRef(({movie},ref) => {
    return(
        <div ref = {ref} className = "videocard">
            <img src = {`${base_url}${movie.backdrop_path || movie.poster_path}`}
            alt = ""/>
            <TextTruncate
            line = {1}
            element = "p"
            truncateText="..."
            text = {movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className = "video__stats">
                {movie.media_type && `${movie.media_type} ◉`}
                {movie.release_date || movie.first_air_date} ◉
                <ThumbUpSharp/> {movie.vote_count}
            </p>
        </div>
    );
});
export default Videocard;