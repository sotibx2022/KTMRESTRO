"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const router = useRouter();

  const loginHandler = async () => {
    setEmailError(email === "" ? true : false);
    setPasswordError(password === "" ? true : false)
    try {
      const response = await fetch("http://localhost:3000/api/restaurant", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,  // Make sure email is defined
          password,  // Make sure password is defined
          login: true
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if(result.email !== email || result.password !== password){
        setValidationError(true);
      }else{
        let resultData = {...result};
        delete resultData.password;
        localStorage.setItem("restaurantDetails",JSON.stringify(resultData));
        router.push("/restaurant/dashboard")

      }




    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className='sub_container'>
      <h1 className='sub_heading'>Login</h1>
      <div className='form_field'>
        <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        {emailError && <span className='errorMessage'>This field is required</span>}
      </div>
      <div className='form_field'>
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        {passwordError && <span className='errorMessage'>This Field is required.</span>}
      </div>
      <button onClick={loginHandler}>Login</button>
      {validationError && <span className='errorMessage'>Login Credentials are not correct !</span>}
    </div>
  )
}

export default Login