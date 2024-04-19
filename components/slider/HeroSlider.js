import React from 'react';
import SwiperCore, { Autoplay, Navigation,Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import Submenu from '../../components/elements/Submenu';
import BannerAbs from '../../components/elements/BannerAbs';
SwiperCore.use([Autoplay, Navigation,Pagination]);

const HeroSlider = () => {

    // const data = [
    //     { img: "placed.png" },
    //     { img: "cuebiq.png" },
    //     { img: "factual.png" },
    //     { img: "placeiq.png" },
    //     { img: "airmeet.png" },
    //     { img: "spen.png" },
    //     { img: "klippa.png" },
    //     { img: "matrix.png" }
    // ];


    return (
      <>
         <div
         >
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={true}
          loop={true}
          autoplay={{
            delay: 4500000,
            disableOnInteraction: false,
          }}


          navigation={{
            prevEl: ".swiper-button-prev-style-3",
            nextEl: ".swiper-button-next-style-3",
          }}


          className="swiper-wrapper"
        >

        
          <SwiperSlide className="swiper-slide">
            <div
              className="banner-slide-11"
              style={{
                backgroundImage: "url(assets/imgs/new-site/Main-banner_BG.jpg)",
              }}
            >
              {/* <div class="banner-slide-11-overlay"></div> */}
              <BannerAbs/>
            </div>
          </SwiperSlide>


          <SwiperSlide className="swiper-slide">
            <div
              className="banner-slide-11"
              style={{
                backgroundImage: "url(assets/imgs/new-site/Main-banner_BG.jpg)",
              }}
            >
              {/* <div class="banner-slide-11-overlay"></div> */}
              <BannerAbs/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="banner-slide-11"
              style={{
                backgroundImage: "url(assets/imgs/new-site/Main-banner_BG.jpg)",
              }}
            >
              {/* <div class="banner-slide-11-overlay"></div> */}
              <BannerAbs/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="banner-slide-11"
              style={{
                backgroundImage: "url(assets/imgs/new-site/Main-banner_BG.jpg)",
              }}
            >
              {/* <div class="banner-slide-11-overlay"></div> */}
              <BannerAbs/>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
        {/* navbar */}
          <Submenu/>
      </>
    );
};

export default HeroSlider;

