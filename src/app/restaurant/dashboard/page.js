"use client"
import Footer from '@/app/_components/footer/Footer'
import RestaurantHeader from '@/app/_components/restaurentHeader/RestaurantHeader'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
   
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
    <h1>Welcome to the Restaurant Dashboard Page</h1>
    <Footer/>
    </>
  )
}

export default page