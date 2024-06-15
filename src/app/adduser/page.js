"use client"
import React, { useState } from 'react'

const AddUser = () => {
    const[username, setUsername] = useState("");
    const[age, setAge] = useState("");

    const registerUser =async()=>{

      try{
        const response = await fetch("http://localhost:3000/api/user",{
          method:'POST',
          headers:{
            "content-type":"application/json"
          },
        });
        const result = await response.json();
        const{status, message} = result;
        if(error){
          alert("Error to manipulate response",error)
        }else if(message){
          alert(message)
        }
      }catch(error){
        alert("Error to Register User",error)
      }

        
    }
  return (
    <div>
        <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
        <input type = "number" placeholder = "age" value={age} onChange={(e)=>setAge(e.target.value)}></input>
        <button onClick={registerUser}>Submit</button>
    </div>
  )
}

export default AddUser