"use client"
import React, { useState } from 'react'
import Login from '../_components/login/Login';
import Register from '../_components/register/Register';
import RestaurantHeader from '../_components/restaurentHeader/RestaurantHeader';
import Footer from '../_components/footer/Footer';
 const page = () => {
    const[login, setLogin] = useState(false);
  return (
    <>
    <RestaurantHeader/>
    <div className='container'>
    <h1 className='heading'>Restaurant page</h1>
    {login?<Login/>:<Register/>}
    <h3 className='link_text' onClick={()=>{setLogin(!login)}}>{login?"Please login":"Please Register"}</h3>
    
    </div>
    <Footer/>
    </>
  )
}
export default page;
