import React from 'react';
import { SlArrowRight } from "react-icons/sl";
import Image from 'next/image';

const BannerAbs = () => {
  return (
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
                        {/* <img
                          className="image-banner-main d-block"
                          src="assets/imgs/new-site/Spirographs_Digital_500x500-01.svg"
                          alt="iori"
                        /> */}
                        <Image
                                    className="image-banner-main d-block"
                                    src="/assets/imgs/new-site/Spirographs_Digital_500x500-01.svg"
                                    alt="iori"
                                    width={500}
                                    height={300}
                                    layout="responsive" // This keeps the aspect ratio of the image
                                    
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default BannerAbs