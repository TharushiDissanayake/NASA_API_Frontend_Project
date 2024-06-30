import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

const LoginHeader = () => {

  return (
    <section className='h-wrapper'>
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logo2.png" alt="logo" width={100} />

            <div className="flexCenter h-menu">
                <a href="#">Galaxy Information</a>
                <a href="#">Astro Picture of the Day</a>
                <a href="#">AboutUs</a>
                <button className="h-button">
                  <a href="">Contact</a>
                </button>
                
            </div>
        </div>
    </section>
  )
}

export default LoginHeader