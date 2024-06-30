import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/*left side*/}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="logo" width={120} />
                <span className="secondaryText">
                    Unleash your inner astronomer and explore the cosmos like never <br/>before. 
                    Your journey to understanding the universe starts here.
                </span>
            </div>

            {/*right side*/}
            <div className="flexColStart f-right">
                <span className="primaryText">
                    Information
                </span>
                <span className="secondaryText">
                    nasa-data@lists.arc.nasa.gov
                </span>
                <div className="flexCenter secondaryText f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Footer