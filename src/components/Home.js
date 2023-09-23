import React from 'react'
import { useLocation} from 'react-router-dom'
import './home.css';


const Home = () => {
    const location=useLocation()


  return (
    <div className="container">
        <h1> Mindfull Space</h1>
        <div className="image"></div>
        <button className="btn-class-name"> 
            <span className="back"></span>
            <span className="front">Press</span>
        </button>
        </div>
  )
}

export default Home