import React, { useState, useEffect} from "react";
import _ from 'lodash';
import {useNavigate} from "react-router-dom";





export default function AddActor (){

    //for API
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");

    //for colours and message
    const [success, setSuccess]= useState("")
    const [error, setError]= useState("")
    const [firstname, setFirstname]= useState("")
    const [lastname, setLastname]= useState("")

    const navigate= useNavigate();


    let handleSubmit = async (e) => {

      e.preventDefault();

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


      if(firstName !== "" && lastName !== ""){
        let res = await fetch(`https://program-1655723052030.azurewebsites.net/Home/Add_Actor?firstName=${firstName}&lastName=${lastName}`, {
          method: "POST",
        });

      console.log(res);
        
      if (res.status === 200) {
        setSuccess("Actor addedd successfully!");
        window.location.href = "./"
      } else {
          setError("Errror trying to add an actor!");
          return;
        }
      }
    };

    return (
    
    <div id="actorform">
      <h1>Add Actor</h1>
      
      <form onSubmit={handleSubmit}>
        <label>
            First Name:
        </label>

        <input id="input1" type="text" value={firstName} placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
        <h2 style={{color: "red"}}>{firstname !== "" ? firstname : ""}</h2>
          
        <br></br>
        <label>
            Last Name:
        </label>

            <input id="input2" type="text" value={lastName} placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
            <h2 style={{color: "red"}}>{lastname !== "" ?  lastname : ""}</h2>
          
        <br></br>
        <button id="submit" type="submit">Create</button>
        </form>

        <h2 id="checkOutcome" style={{color: success !== "" ? "#006400" : error !== "" ? "red" : ""}}>{success !== "" ? success : error !== "" ? error : ""}</h2>

        </div>
      );

}