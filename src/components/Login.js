import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  console.log("HELLO")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history=useNavigate();


  async function submit(e){
    e.preventDefault()
    try {
      await axios.post("http://localhost:8000/",{
        email,password
      })
      .then(res=>{
        if(res.data==="login success"){
          history("/home",{state:{id:email}})
        }
        else if(res.data==="wrong password"){
          alert("wrong password")
        }
        else {
          alert("user does not exist")
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e)
      })
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className='login'>
      <h1>Login</h1>
      <form action="POST">
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  )
}

export default Login