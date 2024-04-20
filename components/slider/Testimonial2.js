import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

SwiperCore.use([Autoplay, Navigation]);
const Testimonial2 = () => {

    const data = [
        {
            img: "1.webp",
        },
        {
            img: "2.webp",
        },
        {
            img: "3.webp",
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide">
                        <div className="card-review">
                            <div className="card-info">
                                <div className="rating-review"> 
                                <Image
                                          src="/assets/imgs/template/icons/star.svg" alt="iori" 
                                            width={500}  // Specify the width of the image
                                            height={300} // Specify the height of the image
                                            layout="responsive" // This keeps the aspect ratio of the image
                                            className="rating-icon"
                                    />

                                <Image
                                          src="/assets/imgs/template/icons/star.svg" alt="iori" 
                                            width={500}  // Specify the width of the image
                                            height={300} // Specify the height of the image
                                            layout="responsive" // This keeps the aspect ratio of the image
                                            className="rating-icon"
                                    />
                                <Image
                                          src="/assets/imgs/template/icons/star.svg" alt="iori" 
                                            width={500}  // Specify the width of the image
                                            height={300} // Specify the height of the image
                                            layout="responsive" // This keeps the aspect ratio of the image
                                            className="rating-icon"
                                    />

                                <Image
                                          src="/assets/imgs/template/icons/star.svg" alt="iori" 
                                            width={500}  // Specify the width of the image
                                            height={300} // Specify the height of the image
                                            layout="responsive" // This keeps the aspect ratio of the image
                                            className="rating-icon"
                                    />
                                <Image
                                          src="/assets/imgs/template/icons/star.svg" alt="iori" 
                                            width={500}  // Specify the width of the image
                                            height={300} // Specify the height of the image
                                            layout="responsive" // This keeps the aspect ratio of the image
                                            className="rating-icon"
                                    />
                                {/* <img src="/assets/imgs/page/homepage7/star.png" alt="iori" />
                                <img src="/assets/imgs/page/homepage7/star.png" alt="iori" />
                                <img src="/assets/imgs/page/homepage7/star.png" alt="iori" />
                                <img src="/assets/imgs/page/homepage7/star.png" alt="iori" />
                                <img src="/assets/imgs/page/homepage7/star.png" alt="iori" /> */}
                                </div>
                                <p className="font-sm color-grey-800 mb-20">I&apos;m very impressed with this new African Bank offering. Took me 5 mins to open a bank account today. Left with my printed &apos;black&apos; card! You can also add & link family members to your account & they can transact with their own individual cards. Check it out.</p>
                                <div className="box-author"><a href="#">
                                    {/* <img src="/assets/imgs/new-site/logo-two.png" alt="author image" /> */}
                                    <Image
                                          src="/assets/imgs/new-site/logo-two.png" alt="author image"
                                            width={500}  // Specify the width of the image
                                            height={300} // Specify the height of the image
                                            layout="responsive" // This keeps the aspect ratio of the image
                                    />
                                    </a>
                                    <div className="author-info"><a href="#"><span className="font-sm-bold color-brand-1 author-name">Lindela</span></a></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default Testimonial2;

