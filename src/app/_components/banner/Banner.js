"use client"
import React, { useEffect, useState } from 'react'
import "../banner/banner.css";
const Banner = () => {
  const[locations, setLocations] = useState([]);
  const[showLocations, setShowLocations] = useState(false);
  const[location, setLocation] = useState("")
useEffect(() => {
 loadLocations()

 
}, [])

  const loadLocations = async() =>{
const response = await fetch ("http://localhost:3000/api/customers/locations");
const result = await response.json();
setLocations(result.uniqueCities)

  }
  const handleSetLocation =(location) =>{
    setLocation(location)
    setShowLocations(false);
  }
  return (
    <div className='banner_Wrapper'>
        <div className='search_inputs container'>
          
            <div className='form_field'>
            <input type='text' placeholder='Select the Cities' value={location} onClick={()=>setShowLocations(true)}></input>
            {showLocations && <ul className='locations_wrapper'>
              {locations.map((location,index)=>{
                return <li key={index} onClick={()=>handleSetLocation(location)}>{location}</li>
              })}
            </ul>}
            </div>
            <div className='form_field'>
            <input type='text' placeholder='Enter Food or Restaurant'></input>
            </div>
            <button>Search</button>
            </div>
  
    </div>
  )
}

export default Banner