import React from 'react';
import SwiperCore, { Autoplay, Navigation,Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
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
              <div className="banner-abs">
                <div className="container">
                  <div className="row d-flex">
                    <div className="col-lg-6 col-md-12 col-sm-12 hero-info-wrapper">
                      <div className="box-info-banner11 my-banner">
                        <h1 className="color-slider-title mb-5">
                          Banking centered around <span>you</span>
                        </h1>

                        <div className="box-button-offer swiper-cta">
                          <span className="swipper-cta-title">Learn more</span>
                          <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                            <SlArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 d-lg-block position-relative">
                      <div className="box-image-main">
                        <img
                          className="image-banner-main d-block"
                          src="assets/imgs/new-site/Spirographs_Digital_500x500-01.svg"
                          alt="iori"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="banner-abs">
                <div className="container">
                  <div className="row d-flex">
                    <div className="col-lg-6 col-md-12 col-sm-12 hero-info-wrapper">
                      <div className="box-info-banner11">
                        <h1 className="color-slider-title mb-5">
                          Banking centered around <span>business</span>
                        </h1>

                        <div className="box-button-offer swiper-cta">
                          <span className="swipper-cta-title">Learn more</span>
                          <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                            <SlArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 d-lg-block position-relative">
                      <div className="box-image-main">
                        <img
                          className="image-banner-main d-block"
                          src="assets/imgs/new-site/Spirographs_Digital_500x500-01.svg"
                          alt="iori"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="banner-abs">
                <div className="container">
                  <div className="row d-flex">
                    <div className="col-lg-6 col-md-12 col-sm-12 hero-info-wrapper">
                      <div className="box-info-banner11">
                        <h1 className="color-slider-title mb-5">
                          Banking centered around <span>you</span>
                        </h1>

                        <div className="box-button-offer swiper-cta">
                          <span className="swipper-cta-title">Learn more</span>
                          <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                            <SlArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 d-lg-block position-relative">
                      <div className="box-image-main">
                        <img
                          className="image-banner-main d-block"
                          src="assets/imgs/new-site/Spirographs_Digital_500x500-01.svg"
                          alt="iori"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="banner-abs">
                <div className="container">
                  <div className="row d-flex">
                    <div className="col-lg-6 col-md-12 col-sm-12 hero-info-wrapper">
                      <div className="box-info-banner11">
                        <h1 className="color-slider-title mb-5">
                          Banking centered around <span>you</span>
                        </h1>

                        <div className="box-button-offer swiper-cta">
                          <span className="swipper-cta-title">Learn more</span>
                          <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                            <SlArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 d-lg-block position-relative">
                      <div className="box-image-main">
                        <img
                          className="image-banner-main d-block"
                          src="assets/imgs/new-site/Spirographs_Digital_500x500-01.svg"
                          alt="iori"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
        {/* navbar */}
        <div className="sub-menu">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 hero-col-1 text-center">
                <div className="modal-pop">
                  <h5 className="modal-title">
                    I Would Like
                    <br /> To Apply For…
                  </h5>
                  <div className="d-none d-sm-inline-block modal-btn">
                    <Link className="btn btn-brand-banner" href="/">
                      <span>PLEASE SELECT</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 hero-col-2 icon-section">
                <div className="box-button">
                  {" "}
                  <Link className="btn-app" href="/bank">
                    {" "}
                    <img
                      src="assets/imgs/new-site/Component_140.svg"
                      alt="iori"
                    />
                    <span className="btn-title">Bank</span>
                  </Link>
                  <Link className="btn-app" href="/borrow">
                    {" "}
                    <img
                      src="assets/imgs/new-site/snicon2.svg"
                      alt="iori"
                      className="snicon"
                    />
                    <span className="btn-title">Borrow</span>
                  </Link>
                  <Link className="btn-app" href="/invest">
                    {" "}
                    <img
                      src="assets/imgs/new-site/Mask Group 8.svg"
                      alt="iori"
                    />
                    <span className="btn-title">Invest</span>
                  </Link>
                  <Link className="btn-app" href="/save">
                    {" "}
                    <img
                      src="assets/imgs/new-site/Mask Group 9.svg"
                      alt="iori"
                    />
                    <span className="btn-title">Save</span>
                  </Link>
                  <Link className="btn-app" href="/insure">
                    {" "}
                    <img
                      src="assets/imgs/new-site/Mask Group 10.svg"
                      alt="iori"
                    />
                    <span className="btn-title">Insure</span>
                  </Link>
                  <Link className="btn-app" href="/">
                    {" "}
                    <img src="assets/imgs/new-site/snicon6.svg" alt="iori" />
                    <span className="btn-title">Rewards</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default HeroSlider;

