"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Register = () => {
    const router = useRouter();
    const[restaurantData, setRestaurantData] = useState();
  const[passwordError, setPasswordError] = useState(false);
  const[requiredError, setRequiredError] = useState(false);

    const [restaurantDetails, setRestaurantDetails] = useState({
        email: "",
        password: "",
        C_password: "",
        restaurantName: "",
        city: "",
        fullAddress: "",
        contactNumber: ""
    })
    const registerRestaurant = async () => {
        // Check password match
        if (restaurantDetails.password !== restaurantDetails.C_password) {
            setPasswordError(true);
            return false;
        } else {
            setPasswordError(false);
        }
    
        // Check for required fields
        if (
            restaurantDetails.email === "" ||
            restaurantDetails.password === "" ||
            restaurantDetails.C_password === "" ||
            restaurantDetails.restaurantName === "" ||
            restaurantDetails.city === "" ||
            restaurantDetails.fullAddress === "" ||
            restaurantDetails.contactNumber === ""
        ) {
            setRequiredError(true);
            return false;
        } else {
            setRequiredError(false);
        }
    
        // Try to register the restaurant
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
            const { savedRestaurantData, message, status, success } = result;
            if (success) {
                alert(message);
                const restaurantDataToSave = { ...savedRestaurantData };
                delete restaurantDataToSave.password;
                localStorage.setItem("restaurantDetails", JSON.stringify(restaurantDataToSave));
                router.push("/restaurant/dashboard");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    
    return (
        <div>
            <h1 className='sub_heading'>Register</h1>
            <div className='form_field'>
                <input type='text' placeholder='email' value={restaurantDetails.email} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, email: e.target.value }) }}></input>
                {requiredError && restaurantDetails.email ==="" && <span className="errorMessage">This Field is Required.</span>}

            </div>
            <div className='form_field'>
                <input type='text' placeholder='password' value={restaurantDetails.password} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, password: e.target.value }) }}></input>
                {requiredError && restaurantDetails.password === "" && <span className="errorMessage">This Field is Required.</span>}
                {passwordError && <span className='errorMessage'>Password Field should match with confirm password.</span>}
            </div>
            <div className='form_field'>
                <input type='text' placeholder='C_password' value={restaurantDetails.C_password} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, C_password: e.target.value }) }}></input>
                {requiredError && restaurantDetails.C_password ==="" && <span className="errorMessage">This Field is Required.</span>}
                {passwordError && <span className='errorMessage'>Password Field should match with confirm password.</span>}
            </div>
            <div className='form_field'>
                <input type='text' placeholder='Restaurant Name' value={restaurantDetails.restaurantName} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, restaurantName: e.target.value }) }}></input>
                {requiredError && restaurantDetails.restaurantName ==="" && <span className="errorMessage">This Field is Required.</span>}
            </div>
            <div className='form_field'>
                <input type='text' placeholder='City' value={restaurantDetails.city} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, city: e.target.value }) }}></input>
                {requiredError && restaurantDetails.city ==="" && <span className="errorMessage">This Field is Required.</span>}
            </div>
            <div className='form_field'>
                <input type='text' placeholder='Full Address' value={restaurantDetails.fullAddress} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, fullAddress: e.target.value }) }}></input>
                {requiredError && restaurantDetails.fullAddress==="" && <span className="errorMessage">This Field is Required.</span>}
            </div>
            <div className='form_field'>
                <input type='text' placeholder='Contact Number' value={restaurantDetails.contactNumber} onChange={(e) => { setRestaurantDetails({ ...restaurantDetails, contactNumber: e.target.value }) }}></input>
                {requiredError && restaurantDetails.contactNumber ==="" &&<span className="errorMessage">This Field is Required.</span>}
            </div>
            <button onClick={registerRestaurant}>Register</button>
        </div>
    )
}

export default Register