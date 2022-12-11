import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '..//CoffeeDetailsSlider/CoffeeDetailsSlider.scss'
// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function CoffeeDetailsSlider() {
  return (
    <>
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
        className="myCoffeeSwiper"
      >
        <SwiperSlide>
            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/main-home-project-pres-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/main-home-project-pres-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/main-home-project-pres-1.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
