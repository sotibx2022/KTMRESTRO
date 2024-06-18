"use client"
import React, { useState, useEffect } from 'react'
import Login from '../_components/login/Login';
import Register from '../_components/register/Register';
import RestaurantHeader from '../_components/restaurentHeader/RestaurantHeader';
import Footer from '../_components/footer/Footer';
import { useRouter } from 'next/navigation';
 const page = () => {
  const router = useRouter()
    const[login, setLogin] = useState(false);
    useEffect(()=>{
      const savedDetails = JSON.parse(localStorage.getItem("restaurantDetails"));
      if(savedDetails){
          router.push("/restaurant/dashboard");
      }

  },[])
  return (
    <>
    <RestaurantHeader/>
    <div className='container'>
    <h1 className='heading'>Restaurant page</h1>
    {login?<Login/>:<Register/>}
    <h3 className='link_text' onClick={()=>{setLogin(!login)}}>{login?"Already Registered ? Please login":"Don't have an Account? Please Register"}</h3>
    
    </div>
    <Footer/>
    </>
  )
}
export default page;
