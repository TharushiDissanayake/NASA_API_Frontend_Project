import React from "react";
import "../../index.css"
import "./Home.css"
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Galaxies from "../Galaxies/Galaxies"
import Picture from "../Picture/Picture";
import Footer from "../Footer/Footer";

function Home() {
  return (
    
    <div className="Home">
      <div>
        <div className="white-gradient"/>
          <Header/>
          <Hero/>
        </div>
        <div id="galaxies">
          <Galaxies/>
        </div>
        <div id="picture">
          <Picture />
        </div>
        <div id="footer">
          <Footer/>
        </div>
    </div>
  );
}

export default Home;