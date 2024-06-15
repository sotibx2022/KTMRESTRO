"use client"
import React, { useState } from 'react'

const Register = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const registerRestaurant=async()=>{
        fetch("http://localhost:3000/api/restaurant",{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        })
    } 
  return (
    <div>
        <h1 className='sub_heading'>Register</h1>
        <div className='form_field'>
            <input type='text' placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
        <div className='form_field'>
            <input type='text' placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        </div>
        <div className='form_field'>
            <input type='text' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>
        <button onClick={registerRestaurant}>Register</button>
        </div>
  )
}

export default Register