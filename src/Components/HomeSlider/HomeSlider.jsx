import React from 'react'
// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import '../HomeSlider/HomeSlider.scss'

import { Autoplay, Pagination, Navigation } from "swiper";



function HomeSlider() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide className='slider'>
                <div className='slider-box'>
                    <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/home-1-slider.jpg" alt="" />
                    <div className="slider-overlay">
                        <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/02/home-1-slider-img-2.png" alt="" />
                        <h1>IMPORTANCE OF COFFEE</h1>
                        <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit numquam at?</h6>
                        <button>READ MORE</button>
                    </div>
                </div>
            </SwiperSlide>


            <SwiperSlide className='slider'>
                <div className='slider-box'>
                    <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/home-1-slider-img-2.jpg" alt="" />
                    <div className="slider-overlay">
                        <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/02/home-1-slider-img-3.png" alt="" />
                        <h1>THE HOME OF COFFEE</h1>
                        <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit numquam at?</h6>
                        <button>READ MORE</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slider'>
                <div className='slider-box'>
                    <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/h-1-img-2.jpg" alt="" />
                    <div className="slider-overlay">
                        <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/02/home-1-slider-img.png" alt="" />
                        <h1>SPECIAL COFFEE BEANS</h1>
                        <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa fugit numquam at?</h6>
                        <button>READ MORE</button>
                    </div>
                </div>

            </SwiperSlide>
            {/*  */}
        </Swiper>
    )
}

export default HomeSlider