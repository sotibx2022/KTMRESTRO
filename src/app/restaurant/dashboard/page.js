"use client"
import Footer from '@/app/_components/footer/Footer'
import RestaurantHeader from '@/app/_components/restaurentHeader/RestaurantHeader'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AddFoodItem from '@/app/_components/addFoodItem/AddFoodItem'
import FoodItemsList from '@/app/_components/foodItemsList/FoodItemsList'
const page = () => {
   const[showFoodItemForm, setShowFoodItemForm] = useState(false);
const router= useRouter()
    useEffect(()=>{
        const savedDetails = JSON.parse(localStorage.getItem("restaurantDetails"));
        if(!savedDetails){
            router.push("/restaurant");
        }

    },[])
  return (
    <>
    <RestaurantHeader/>
    <div className='navigation_buttons container'>
      <button onClick={()=>setShowFoodItemForm(true)}>Add Food</button>
      <button onClick={()=>setShowFoodItemForm(false)}>Dashboard</button>
    </div>
    {showFoodItemForm ? <AddFoodItem/>  : <FoodItemsList/>}
    
    
    <Footer/>
    </>
  )
}

export default page