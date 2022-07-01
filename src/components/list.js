import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function ActorList()
{

	const [actors, setActors]=useState(null);
	
    useEffect(()=>{
    fetch("https://program-1655723052030.azurewebsites.net/Home/All_Actors")
    .then((res)=> res.json())
    .then((data)=> setActors(data))
    },[])

    if (actors===null) return <div> <h1> Please wait </h1> </div>;

    return(

        <div className = "actorPage">
            <h1> Actor list </h1>
            {
                actors.reverse().map((actor)=>
                (
                    <div key = {actor.actorId} >
                    <br></br>
                    ID: {actor.actorId}<br></br>
                    First Name: {actor.firstName}<br></br>
                    Last Name: {actor.lastName}<br></br>
                    </div>
                ))              
            }
        </div>
    );
}

/*function Actor(){

	const [actors,setActors] = useState(null);

	useEffect(() => {
		fetch(
			"https://program-1655723052030.azurewebsites.net/Home/All_Actors")
			.then((res) => res.json())
			.then(setActors)

	},[])

		if (actors === null ) return <div>
			<h1> Pleses wait some time.... </h1> </div>;

		return (
			
			<div className="Actor">
				{
					actors.map((actor) => (
						<Link to = {"/Actor/"+actor.actorId} key={actor.actorId} >
							<div className='ActorDetails' id={"actorCard"+actor.actorId} >
							<p className='info'>Actor ID: {actor.actorId}<br></br>
							First Name: {actor.firstName}<br></br>
							Last name:{actor.lastName}<br></br><br></br>
							</p>
							</div>
						</Link>
					))
				}
			</div>
		);	
}


export default Actor;*/