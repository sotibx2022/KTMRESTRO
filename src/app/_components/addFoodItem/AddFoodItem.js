import React, { useState } from 'react'

const AddFoodItem = () => {
    const [foodDetails, setFoodDetails] = useState({
        foodName:"",
        foodImage:"",
        foodPrice:"",
        foodDescription:""
    })
    const{foodName, foodImage, foodPrice, foodDescription} = foodDetails;

    const handleFoodAdd =() =>{
        console.log(foodName,foodImage,foodPrice,foodDescription);
    }
  return (
    <div className='container'>
       <h1 className='sub_heading'>Add Food Item</h1>
       <div className='form_field'>
       <input type="text" placeholder='Enter Food Name' value={foodName}
       onChange={(e)=>setFoodDetails({...foodDetails,foodName:e.target.value})}></input>
       </div>
       <div className='form_field'>
       <input type="text" placeholder='Enter Food Image Url' value={foodImage}
       onChange={(e)=>setFoodDetails({...foodDetails,foodImage:e.target.value})}></input>
       </div>
       <div className='form_field'>
       <input type="text" placeholder='Enter Food Price' value={foodPrice}onChange={(e)=>setFoodDetails({...foodDetails,foodPrice:e.target.value})}></input>
       </div>
       <div className='form_field'>
       <input type="text" placeholder='Enter Food Description' value={foodDescription}onChange={(e)=>setFoodDetails({...foodDetails,foodDescription:e.target.value})}></input>
       </div>
       <button onClick={handleFoodAdd}>Add</button>

    </div>
  )
}

export default AddFoodItem