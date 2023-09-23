import axios from 'axios'
import React, { useState } from 'react'
import addNotification from 'react-push-notification'
import { Link, useNavigate } from 'react-router-dom'
import './signup.css';


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
          warningNotification()
          // alert("user already exist")
        }
        else if(res.data==="notexist"){
          successNotification()
          history("/home",{state:{id:email}})
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
      subtitle: 'Use different email',
      message: 'Email exist',
      theme: 'red',
      closeButton:"X",
    })
  };
  function successNotification (){
    addNotification({
      title: 'Success',
      subtitle: 'Hello!',
      message: 'Signup successful',
      theme: 'light',
      closeButton:"X",
      backgroundTop:"green",
      backgroundBottom:"yellowgreen"
    })
  };


  return (
    <div className='card'>
    
    <Link className="singup">Sign Up</Link>
        <form action="POST">
        <div className="inputBox">
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} required="required"/>
        <span class="user">Email</span> 
        </div>
        <div className="inputBox">
        <input type="password" onChange={(e) => { setPassword(e.target.value) }}  required="required" />
        <span>Password</span>
        </div>
        <button className='enter' type="submit" onClick={submit} >Enter</button>
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/">Login</Link>
    </div>
  )
}

export default Signup