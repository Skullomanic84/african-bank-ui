
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'; // ensure you import Swiper styles
import BannerAbs from '../../components/elements/BannerAbs';
import Submenu from '../../components/elements/Submenu';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const HeroSlider = () => {
  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30} // space between slides
          loop={true}
          pagination={{
            clickable: true
          }}
          autoplay={{
            delay: 5000, // 5 seconds delay
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev-style-3",
            nextEl: ".swiper-button-next-style-3",
          }}
          className="swiper-container"
          
        >
          {['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'].map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div
                className="banner-slide-11"
                style={{
                  backgroundImage: `url(assets/imgs/new-site/Main-banner_BG.jpg)`,
                  height: '100vh', // Set a height for the slides
                  backgroundSize: 'cover'
                }}
              >
                <BannerAbs />
              </div>
            </SwiperSlide>
          ))}
          {/* Navigation buttons */}
          {/* <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}
        </Swiper>
      </div>
      <Submenu />
    </>
  );
};

export default HeroSlider;
