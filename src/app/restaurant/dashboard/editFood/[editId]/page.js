"use client"
import Footer from '@/app/_components/footer/Footer';
import RestaurantHeader from '@/app/_components/restaurentHeader/RestaurantHeader';
import React, { useState,useEffect } from 'react'
const EditFoodItem = (props) => {
    const [foodDetails, setFoodDetails] = useState({
        foodName:"",
        foodImage:"",
        foodPrice:0,
        foodDescription:""
    })
    const{foodName, foodImage, foodPrice, foodDescription} = foodDetails;
    const[inputError, setInputError] = useState(false);
   
  const editId = props.params.editId;  
  useEffect(()=>{
loadFoodDetails()
  },[editId])
  const loadFoodDetails =async() =>{
    
    const responce = await fetch(`http://localhost:3000/api/restaurant/foods/editFood/${editId}`)
    const result = await responce.json();
    const {foodName, foodImage, foodPrice, foodDescription} = result.editableFood;
  setFoodDetails({
    foodName, foodImage, foodPrice, foodDescription
  })
  }
  const updateHandler = async () => {
    const response = await fetch(`http://localhost:3000/api/restaurant/foods/editFood/${editId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            foodName,
            foodImage,
            foodPrice,
            foodDescription
        })
    });
    const result = await response.json();
    console.log(result); // Should log { name: "binaya" }
};

  return (
    <>
    <RestaurantHeader/>
    <div className='container'>
       <h1 className='sub_heading'>Update Food Item</h1>
       <div className='form_field'>
       <input type="text" placeholder='Enter Food Name' value={foodName}
       onChange={(e)=>setFoodDetails({...foodDetails,foodName:e.target.value})}></input>
       {inputError && !foodName &&<span className='errorMessage'>This Field is required.</span>}
       </div>
       <div className='form_field'>
       <input type="text" placeholder='Enter Food Image Url' value={foodImage}
       onChange={(e)=>setFoodDetails({...foodDetails,foodImage:e.target.value})}></input>
       {inputError && !foodImage &&<span className='errorMessage'>This Field is required.</span>}
       </div>
       <div className='form_field'>
       <input type="text" placeholder='Enter Food Price' value={foodPrice}onChange={(e)=>setFoodDetails({...foodDetails,foodPrice:e.target.value})}></input>
       {inputError && !foodPrice &&<span className='errorMessage'>This Field is required.</span>}
       </div>
       <div className='form_field'>
       <input type="text" placeholder='Enter Food Description' value={foodDescription}onChange={(e)=>setFoodDetails({...foodDetails,foodDescription:e.target.value})}></input>
       {inputError && !foodDescription &&<span className='errorMessage'>This Field is required.</span>}
       </div>
       <button onClick={updateHandler}>Update</button>
       <button>Back to Dashboard</button>
    </div>
    <Footer/>
    </>
  )
}
export default EditFoodItem