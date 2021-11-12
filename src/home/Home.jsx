import './Home.scss'
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <img
            width="100%"
            src="https://trendsinusa.com/wp-content/uploads/2018/01/Anonymous-hacker-profile-picture.jpg"
            alt=""
          />
          <Featured/>
        </div>
    )
}

export default Home
