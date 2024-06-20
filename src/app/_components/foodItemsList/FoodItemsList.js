

import { connectToDb } from '@/app/DB/configuration';
import React, { useEffect, useState } from 'react'

const FoodItemsList = () => {
    const[allFoods, setAllFoods] = useState([]);
    useEffect(() => {
      getAllFoods();
    
     
    }, [])
    const getAllFoods = async()=>{
        connectToDb();
        const response = await fetch("http://localhost:3000/api/restaurant/foods/666d5f17af16078812e486de");
        const result = await response.json();
        if(result){
          console.log(result.allFoodItems);
          setAllFoods(result.allFoodItems);
        }else{
          console.log("There is no result came from database.")
        }
        
    }
   
    
  return (
    <div className='container'>
      <table>
      <thead>
                <tr>
                  <th>SN.</th>
                  <th>Food Name</th>
                  <th>Food Price</th>
                  <th>Food Description</th>
                  <th>Food Image</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
              
        {allFoods.map((food,index)=>{
            return <tr key={index}>
                  <td>{index+1}</td>
                  <td>{food.foodName}</td>
                  <td>{food.foodPrice}</td>
                  <td>{food.foodDescription}</td>
                  <td><img src={food.foodImage?food.foodImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEvt4P1dtrhRqT1B29rtiD9mnwqpfUshyug&s"}></img></td>
                  <td><button>Delete</button>
                  <button>Edit</button></td>
                </tr>
              
        })}
        </tbody>
        </table>
    </div>
  )
}

export default FoodItemsList