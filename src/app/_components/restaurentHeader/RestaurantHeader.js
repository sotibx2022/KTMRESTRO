"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import '../restaurentHeader/restaurantheader.css'

const RestaurantHeader = () => {
  const router = useRouter()
const[restaurantDetails, setRestaurantDetails] = useState();
  useEffect(()=>{
    const localStorageUser = JSON.parse(localStorage.getItem("restaurantDetails"))
    setRestaurantDetails(localStorageUser);

  },[])

  const logOut =() =>{
    console.log("triggered")
    localStorage.removeItem("restaurantDetails");
    router.push("/restaurant");

  }
  return (
    <div className=' menu_wrapper'>
      <div className='container flex_item_between'>
        <div className='logoarea'>
          <h1>KTM Food Delivery </h1>
        </div>
      <div className='menuarea '>
        <ul className='flex_item_center'  >
          <li className='list_item'><Link href="#">Home</Link></li>
          <li className='list_item'><Link href="#">Restaurants</Link></li>
          <li className='list_item'><Link href="#">Locations</Link></li>
          <li className='list_item'><Link href="#">About</Link></li>
        {restaurantDetails &&   <li className='list_item' onClick={logOut}><Link href="#">Logout</Link></li>}
          <li className='list_item'><Link href="#">{restaurantDetails? "Profile":"Login / Register"}</Link></li>
          
        </ul>
      </div>
      </div>
    </div>
  )
}

export default RestaurantHeader