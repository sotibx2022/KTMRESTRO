"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Register = () => {
    const router = useRouter();
    const[restaurantData, setRestaurantData] = useState();
  

    const [restaurantDetails, setRestaurantDetails] = useState({
        email: "",
        password: "",
        C_password: "",
        restaurantName: "",
        city: "",
        fullAddress: "",
        contactNumber: ""
    })
    const registerRestaurant =async()=>{
        
        try {
            const response = await fetch("http://localhost:3000/api/restaurant", {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: restaurantDetails.email,
                    password: restaurantDetails.password,
                    restaurantName: restaurantDetails.restaurantName,
                    city: restaurantDetails.city,
                    fullAddress: restaurantDetails.fullAddress,
                    contactNumber: restaurantDetails.contactNumber
                })
            });
        const result = await response.json();
        const {savedRestaurantData, message, status, success} = result;
        if(success){
            alert(message);
            const restaurantDataToSave = {...savedRestaurantData};
            delete restaurantDataToSave.password
            localStorage.setItem("restaurantDetails",JSON.stringify(restaurantDataToSave));
            router.push("/restaurant/dashboard")
        }
        } catch (error) {
            console.error("Error:", error);
        }
        
        
    }
    
    return (
        <div>
            <h1 className='sub_heading'>Register</h1>
            <div className='form_field'>
                <input type='text' placeholder='email' value={restaurantDetails.email} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, email: e.target.value }) }}></input>
            </div>
            <div className='form_field'>
                <input type='text' placeholder='password' value={restaurantDetails.password} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, password: e.target.value }) }}></input>
            </div>
            <div className='form_field'>
                <input type='text' placeholder='C_password' value={restaurantDetails.C_password} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, C_password: e.target.value }) }}></input>
            </div>
            <div className='form_field'>
                <input type='text' placeholder='Restaurant Name' value={restaurantDetails.restaurantName} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, restaurantName: e.target.value }) }}></input>
            </div>
            <div className='form_field'>
                <input type='text' placeholder='City' value={restaurantDetails.city} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, city: e.target.value }) }}></input>
            </div>
            <div className='form_field'>
                <input type='text' placeholder='Full Address' value={restaurantDetails.fullAddress} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, fullAddress: e.target.value }) }}></input>
            </div>
            <div className='form_field'>
                <input type='text' placeholder='Contact Number' value={restaurantDetails.contactNumber} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, contactNumber: e.target.value }) }}></input>
            </div>
            <button onClick={registerRestaurant}>Register</button>
        </div>
    )
}

export default Register