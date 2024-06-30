import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {

  const scrollToGalaxies = () => {
    const galaxiesSection = document.getElementById('galaxies');
    if (galaxiesSection) {
        galaxiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPicture = () => {
    const pictureSection = document.getElementById('picture');
    if (pictureSection) {
        pictureSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFooter = () => {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='h-wrapper'>
        <div className="flexCenter paddings innerWidth h-container">
          <a href="/Home" className="logo-link">
              <img src="./logo2.png" alt="logo" width={100} />
          </a>

            <div className="flexCenter h-menu">
                <a href="/Home#" onClick={scrollToGalaxies}>Galaxy Information</a>
                <a href="/Home#" onClick={scrollToPicture}>Astro Picture of the Day</a>
                <a href="/mars_photos">Mars Photos</a>
                <a href="/Home#" onClick={scrollToFooter}>AboutUs</a>
                <button className="h-button">
                  <a href="">Contact</a>
                </button>
                
            </div>
        </div>
    </section>
  )
}

export default Header