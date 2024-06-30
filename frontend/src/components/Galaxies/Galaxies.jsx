import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Galaxies.css"
import data from '../../utils/slider.json'
import { sliderSetting } from '../../utils/common'

const Galaxies = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flecColStart g-head">
                <span className='primaryText'>Types Of Galaxy</span>
            </div>

            <Swiper {...sliderSetting}>
                <SliderButtons/>
                {
                    data.map((card, i)=> (
                        <SwiperSlide key={i}>
                            <div className="flexColStart g-card">
                                <img src={card.image} alt="galaxy" className="g-img"/>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.Details}</span>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    </section>
  )
}

export default Galaxies

const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="flexCenter g-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}