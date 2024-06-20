import React, { useState } from 'react'

const AddFoodItem = () => {
    const [foodDetails, setFoodDetails] = useState({
        foodName:"",
        foodImage:"",
        foodPrice:0,
        foodDescription:""
    })
    const{foodName, foodImage, foodPrice, foodDescription} = foodDetails;
    const[inputError, setInputError] = useState(false);
    

    const handleFoodAdd = async () => {
        // Debugging logs to check values
        console.log("foodName:", foodName);
        console.log("foodImage:", foodImage);
        console.log("foodPrice:", foodPrice);
        console.log("foodDescription:", foodDescription);
    
        // Ensure these variables are defined in the component's state or props
        if (!foodName || !foodImage || !foodPrice || !foodDescription) {
            setInputError(true);
            console.log("Input error set to true");
            return false;
        }
    
        setInputError(false);  // Reset input error if validation passes
        console.log("Input error set to false");
    
        try {
            if(!inputError){
                const restaurantDetails = JSON.parse(localStorage.getItem("restaurantDetails"));
            if (!restaurantDetails || !restaurantDetails._id) {
                throw new Error("Restaurant details are missing or incomplete in localStorage");
            }
    
            const Restro_Id = restaurantDetails._id;
            console.log("Restro_Id:", Restro_Id);
    
            const response = await fetch("http://localhost:3000/api/restaurant/foods", {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify({
                    foodName,
                    foodImage,
                    foodPrice,
                    foodDescription,
                    Restro_Id
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const result = await response.json();
            console.log("Result:", result);
            alert(result.message);
            }
        } catch (error) {
            console.error("Error adding food:", error);
            alert("Failed to add food. Please try again.");
        }
    };
    
    
  return (
    <div className='container'>
       <h1 className='sub_heading'>Add Food Item</h1>
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
       <button onClick={handleFoodAdd}>Add</button>

    </div>
  )
}

export default AddFoodItem