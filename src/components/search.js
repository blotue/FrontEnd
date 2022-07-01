import React, { useState, useEffect} from "react";
import _ from 'lodash';
import './actorSearch.css'

export default function ActorSearch (){
  
  const [actorData, setActorData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [query, setQuery] = useState("")
  
  useEffect(() => {
    setLoading(true);
    fetch('https://program-1655723052030.azurewebsites.net/Home/All_Actors')
    .then((res) => res.json())
    .then((data) => {
      setActorData(data.reverse());
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);
    
    if (loading) {
      return <p>Data is loading...</p>;
    }
  
    if (error || !Array.isArray(actorData)) {
      return <p>There was an error loading your data!</p>;
    }

    return(
        <div id="page">
            <div id="searchBar">
                <h1>Search for actor</h1>
                <div className="userInput">
                    <input id="userInput" type="text" placeholder="Search actor..." onChange={event => setQuery(event.target.value)}/>
                    <button id="enter">Enter</button>
                </div>

            <div id="results">
            {
                actorData.filter(actor => {
                    if(query ===''){
                        return actor;
                    }
                    else if(actor.firstName.toLowerCase().includes(query.toLowerCase())){
                        return actor;
                    }
                    else if(actor.lastName.toLowerCase().includes(query.toLowerCase())){
                        return actor;
                    }
                   /* else if(actor.actorId.id().includes(query.id())){
                        return actor;
                    }*/
                }).map((actor, index) => (
                    <div id="actorBox" key={index}>
                    ID: {actor.actorId}<br></br>
                    First Name: {actor.firstName}<br></br>
                    Last Name: {actor.lastName}<br></br>
                    </div>
                ))
            }
            </div>
            </div>
      </div>
      )

  }