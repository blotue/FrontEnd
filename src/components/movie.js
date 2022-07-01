//import './index.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Movie() {
       const [word, setWord]= useState("");
       const [films, setFilms]= useState([]);
       const [show, setShow]= useState(false);


       const getMovies=()=> {
            fetch(
            "https://program-1655723052030.azurewebsites.net/Home/Get_Films_By_Keyword?keyword=" + word)
            .then((res) => res.json())
            .then(response=> {
                setFilms(response)
                setShow(true);
                console.log(response);
            })
            .catch(err=> console.log(err));
      
       }

    return (
        <div className="Movie">
            <h1 id="h1Film">Film Search</h1>
            <h2 id="h2Film">Search by  keyword</h2>
        
            <input id='searchKeyword' value={word} type="text" placeholder='Search film...' onChange={(e)=> setWord(e.target.value)}/>
            <br></br><br></br>
            <button id="keySearch" onClick={getMovies} className="searchButton">Search</button>
            <Link to="/" ><button className="backButton" type="button">Back</button></Link>
        
         <div>
                 {films.length > 0 && (<h2 id="title">List of Movies</h2>)} 

                <div id="keywordDisplay" className='ulList'>
             
                    {films.length > 0 ? films.map(film=> (
                        <div id="moviecard" key={film.filmId}>
                           <h2>Film Title: {film.title}</h2>
                           <p>Description: {film.description}</p> 
                           <p>Released Year: {film.releaseYear}</p>
                           <p>Length: {film.length}</p>
                           <p>Rating: {film.rating}</p>
                        </div>
                    ))
                   : (show && (<h2> No movies </h2>)) }
                   
                </div>
            </div>
        </div>
    );    
}

//Logical && operator
//Ternary operator
