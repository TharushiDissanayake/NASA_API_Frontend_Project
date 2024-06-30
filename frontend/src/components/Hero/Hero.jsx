import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Unveiling <br/>
                        the Universe: <br/> 
                        Your Guide to 
                        <br/>Astronomy
                    </h1>
                </div>
                <div className="hero-des">
                    <span className="secondaryText">
                     Unleash your inner astronomer and explore the cosmos like never before. 
                     <br/>Your journey to understanding the universe starts here. Dive into a world 
                     <br/>of wonder, where distant galaxies ignite your imagination andnebulae swirl
                     <br/> with vibrant colors. Explore the dance of planets in our solar system,unravel
                     <br/> the mysteries of black holes, and gaze upon the birth and death of stars.
                    </span>
                </div>
            </div>

            {/* right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./SolarSystem.jpg" alt="heroImage" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Hero