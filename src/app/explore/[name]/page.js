"use client"
import CustomerHeader from '@/app/_components/customerHeader/CustomerHeader'
import Footer from '@/app/_components/footer/Footer'
import React, { useEffect, useState } from 'react'
import "../[name]/restaurantDetail.css";

const RestaurantDetails = (props) => {
    const name = decodeURI(props.params.name)
    const Id = props.searchParams.id;
    const[restaurantDetails, setRestaurantDetails] = useState({});
    const[foodItems, setFoodItems] = useState([]);
    useEffect(()=>{
        loadRestaurantDetails()
    },[Id])
    const loadRestaurantDetails = async()=>{
        const response = await fetch(`http://localhost:3000/api/customers/${Id}`);
        const result = await response.json();
        setRestaurantDetails(result.restaurantDetail)
        setFoodItems(result.restaurnatFoods)
    }
  return (
    <div>
        <CustomerHeader/>
        <div className='banner_Wrapper'>
        <div className='restaurant_info'>
      <h1 className="heading" style={{ color: 'white', textAlign: 'center' }}>
        {restaurantDetails.restaurantName}
      </h1>
      <div className='restaurant_address'>
      <p><strong>City:</strong> {restaurantDetails.city}</p>
      <p><strong>Full Address:</strong> {restaurantDetails.fullAddress}</p>
      <p><strong>Email:</strong> {restaurantDetails.email}</p>
      </div>
      </div>
      </div>
      <div>
     
      <div className="food-list container">
        {foodItems.map(food => (
          <div key={food._id} className="food-item" >
            <h3>{food.foodName}</h3>
            <img src={food.foodImage} alt={food.foodName} />
            <p><strong>Price:</strong> Rs. {food.foodPrice}</p>
            <p><strong>Description:</strong> {food.foodDescription}</p>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
        <Footer/>
    </div>
  )
}

export default RestaurantDetails