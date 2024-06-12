import React from 'react'

const Login = () => {
  return (
    <div className='sub_container'>
        <h1 className='sub_heading'>Login</h1>
        <div className='form_field'>
        <input type='email' placeholder='email'></input>
        </div>
        <div className='form_field'>
        <input type='password' placeholder='password'></input>
        </div>
        
    </div>
  )
}

export default Login