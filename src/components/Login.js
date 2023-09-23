import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import addNotification from 'react-push-notification'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history=useNavigate();


  async function submit(e){
    e.preventDefault()
    try {
      await axios.post("http://localhost:8000/login",{
        email,password
      })
      .then(res=>{
        if(res.data==="login success"){
          successNotification()
          history("/",{state:{id:email}})
        }
        else if(res.data==="wrong password"){
          warningNotification()
          // alert("wrong password")
        }
        else {
          // alert("user does not exist")
          warningNotification()
        }
      })
      .catch(e=>{
        warningNotification()
        // alert("wrong details")
        console.log(e)
      })
    } catch (error) {
      warningNotification()
      console.log(error)
    }
  }
  function warningNotification (){
    addNotification({
      title: 'Warning',
      subtitle: 'Not permitted',
      message: 'Enter valid credentials',
      theme: 'red',
      closeButton:"X",
    })
  };
  function successNotification (){
    addNotification({
      title: 'Success',
      subtitle: 'Hello',
      message: 'Logged in successfully',
      theme: 'light',
      closeButton:"X",
      backgroundTop:"green",
      backgroundBottom:"yellowgreen"
    })
  };



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