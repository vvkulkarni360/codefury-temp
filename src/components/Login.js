import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
    <h1>Login</h1>
    <form action="POST">
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
        <input type="submit"  />
    </form>
    <br />
    <p>OR</p>
    <br />
    <Link to="/signup">Sign Up</Link>
    </div>
  )
}

export default Login