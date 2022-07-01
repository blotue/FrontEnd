import React, { useState, useEffect} from "react";
import _ from 'lodash';
import {useNavigate} from "react-router-dom";




export default function UpdateActor (){


    //for API
    const [actorID,setActorID] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [message, setMessage] = useState("");

    //for colours and message
    const [success, setSuccess]= useState("")
    const [error, setError]= useState("")
    const [firstname, setFirstname]= useState("")
    const [lastname, setLastname]= useState("")
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
      if(firstName !== ""){
        setFirstname("");
      }
      if(firstName === ""){
        setFirstname("First Name field cannot be empty!");
      }
      if(lastName !== ""){
        setLastname("");
      }
      if(lastName === ""){
        setLastname("Last Name field cannot be empty!")
      }

      if(actorID !== "" && firstName !== "" && lastName !== ""){
        let res = await fetch(`https://program-1655723052030.azurewebsites.net/Home/Update_Actor?id=${actorID}&firstName=${firstName}&lastName=${lastName}`, {
            method: "PUT",
        });
      
        console.log(res);
        
        if (res.status === 200) {
        setSuccess("Actor updated successfully!");
        window.location.href = "./"
         } else {
          setError("Errror trying to update an actor!");
          return;
        }
      }
    };

        return (
        <div id="actorform">
        <h1>Update Actor</h1>

        <form onSubmit={handleSubmit}>
        <label>
            Actor ID:
        </label>
            <input id="input1" type="text" value={actorID} placeholder="Actor ID" onChange={(e) => setActorID(e.target.value)}/>
            <h2 style={{color: "red"}}>{actorid !== "" ? actorid : ""}</h2>
          <br></br>

          <label>
            First Name:
          </label>
            <input id="input2" type="text" value={firstName} placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
            <h2 style={{color: "red"}}>{firstname !== "" ? firstname : ""}</h2>

          <br></br>

          <label>
            Last Name:
          </label>
            <input id="input3" type="text" value={lastName} placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
            <h2 style={{color: "red"}}>{lastname !== "" ?  lastname : ""}</h2>

          <br></br>

          <button id="submit" type="submit">Update</button>
        </form>

         <h2 id="checkOutcome" style={{color: success !== "" ? "#006400" : error !== "" ? "red" : ""}}>{success !== "" ? success : error !== "" ? error : ""}</h2>

        </div>
      );

}