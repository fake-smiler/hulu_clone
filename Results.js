import axios from '../../Helpers/Axios';
import {useEffect,useState} from 'react';
import Videocard from '../Videocard/Videocard';
import "./Results.css";
import FlipMove from "react-flip-move";
const Results = ({selectedOption}) => {
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async()=> {
            const request = await axios.get(selectedOption);
            console.log(request);
            setMovies(request.data.results)
        };
        fetchData();
    },[selectedOption]);
    console.log(movies);
    return (
        <div className = "results">
        <FlipMove>
                {movies.map((movie) => (
                    <Videocard key = {movie.id} movie = {movie}/>
                ))}
            </FlipMove>
    
        </div>
    );
};
export default Results;