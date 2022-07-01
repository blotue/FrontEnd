import React, { useState, useEffect} from "react";
import _ from 'lodash';
import {useNavigate} from "react-router-dom";


export default function DeleteActor (){


    //for API
    const [actorID,setActorID] = useState("");
    const [message, setMessage] = useState("");

    //for colours and message
    const [success, setSuccess]= useState("")
    const [error, setError]= useState("")
    const [actorid, setActorid]= useState("")

    const navigate= useNavigate();

    let handleSubmit = async (e) => {
      
      e.preventDefault();
      if(actorID !== ""){
          setActorid("");
      }
      if(actorID === ""){
          setActorid("ID field cannot be empty!");
      }
        
      if(actorID !== ""){
      let res = await fetch(`https://program-1655723052030.azurewebsites.net/Home/Delete_Actor_By_Id?id=${actorID}`, {
            method: "DELETE",
      });

      console.log(res);
      if (res.status === 200) {
        setSuccess("Actor deleted successfully!");
        window.location.href = "./"
      } else {
          setError("Errror trying to delete an actor!");
          return;
      }
    }
    };
        
      return (

        <div id="actorform">
        <h1>Delete actor</h1>

        <form onSubmit={handleSubmit}>
        <label>
            Actor ID:
        </label>
            <input id="input1" type="text" value={actorID} placeholder="Actor ID" onChange={(e) => setActorID(e.target.value)}/>
            <h2 style={{color: "red"}}>{actorid !== "" ? actorid : ""}</h2>

          <br></br>
          <button type="submit">Delete</button>
        </form>

        <h2 id="checkOutcome" style={{color: success !== "" ? "#006400" : error !== "" ? "red" : ""}}>{success !== "" ? success : error !== "" ? error : ""}</h2>

        </div>
      );

}