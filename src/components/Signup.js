import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history=useNavigate();


  async function submit(e){
    e.preventDefault()
    try {
      await axios.post("http://localhost:8000/signup",{
        email,password
      })
      .then(res=>{
        console.log(res)
        if(res.data==="exist"){
          alert("user already exist")
        }
        else if(res.data==="notexist"){
          history("/home",{state:{id:email}})
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
      <h1>Signup</h1>
      <form action="POST">
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/">Login</Link>
    </div>
  )
}

export default Signup