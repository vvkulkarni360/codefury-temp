import React from 'react'
import { useLocation} from 'react-router-dom'

const Home = () => {
    const location=useLocation()


  return (
    <div>
      hello {location.state.id} and welcome
    </div>
  )
}

export default Home