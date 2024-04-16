/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Testimonial2 from "../components/slider/Testimonial2";
import Link from "next/link";
import HeroSlider from "../components/slider/HeroSlider";
import { SlArrowRight } from "react-icons/sl";
import Calculactor from "../components/elements/calculator";
import { BsChevronRight } from "react-icons/bs";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <section className="section banner-11">
          <div className="box-banner-home11">
            <div className="box-swiper">
              <div className="swiper-container swiper-group-1 right-pagination">
                <HeroSlider />
              </div>
            </div>
            <div className="swiper-pagination right-pagination swiper-pagination-group-11" />
          </div>
        </section>
        {/* loan calculator */}
        <section className="section-800 pt-50 pb-40 home-loan-calculator bg-grey-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <Calculactor />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <img
                  className="d-block"
                  src="assets\imgs\new-site\loan.png"
                  alt="iori"
                />
              </div>
            </div>
          </div>
        </section>
        {/* loan-products */}
        <section className="section-800 mb-20">
          <div className="container">
            <div className="row d-flex align-items-center flex-lg-row-reverse flex-md-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Find your ideal loan solution with African Bank.
                </h1>
                <h4>
                  African Bank offers a variety of loan products to fit your
                  unique financial needs.
                </h4>
                <div className="row mt-5">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="card-offer hover-up">
                      <div className="card-info">
                        <h4 className="color-brand-2">Personal Loan:</h4>
                        <p className="font-sm color-grey-500 mb-15">
                          Offers amounts from R2 000 to R350 000 with flexible
                          repayment terms of 7 to 72 months.
                        </p>
                        <div className="box-button-offer">
                          <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                            <SlArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="card-offer hover-up">
                      <div className="card-info">
                        <h4 className="color-brand-2">Consolidation Loan:</h4>
                        <p className="font-sm color-grey-500 mb-15">
                          For those seeking to streamline their finances into
                          one manageable instalment.
                        </p>
                        <div className="box-button-offer">
                          <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                            <SlArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="card-offer hover-up">
                      <div className="card-info">
                        <h4 className="color-brand-2">12% Loan:</h4>
                        <p className="font-sm color-grey-500 mb-15">
                          Benefit from our competitive 12% Loan, featuring a low
                          interest rate for loans up to R50 000.
                        </p>
                        <div className="box-button-offer">
                          <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                            <SlArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="card-offer hover-up">
                      <div className="card-info">
                        <h4 className="color-brand-2">Tech Deals:</h4>
                        <p className="font-sm color-grey-500 mb-15">
                          Explore our deals and add a cellphone, tablet or
                          laptop to any loan.
                        </p>
                        <div className="box-button-offer">
                          <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                            <SlArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <img
                  className="d-block"
                  src="assets\imgs\new-site\get a loan.png"
                  alt="iori"
                />
                <div className="d-none d-sm-inline-block pr-5">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    QUOTE ME

                    <BsChevronRight className="right-icon"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* download app */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row d-flex align-items-center flex-lg-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mb-20">Get the app now</h1>
                <p className="font-md color-grey-500">
                  or register for online banking, and open your investment
                  account today.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    Download Now
                    <IoCloudDownloadOutline className="right-icon"/>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <img
                  className="d-block"
                  src="assets\imgs\new-site\get app.png"
                  alt="iori"
                />
              </div>
            </div>
          </div>
        </section>
        {/* bank with the best section */}
        <section className="section-800">
          <div className="container">
            <div className="row d-flex align-items-center flex-lg-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Experience premium banking with MyWORLD
                </h1>
                <p className="font-md color-brand-1">
                  The MyWORLD bank account redefines banking with its innovative
                  structure, offering six fully transactional accounts in one.
                  This account empowers you to manage your finances alongside
                  your loved ones through shared banking features, all while
                  benefiting from some of the lowest banking fees.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Join MyWORLD for an easy and inclusive banking experience
                  suited to your lifestyle.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    tell me more
                    <BsChevronRight className="right-icon"/>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <img
                  className="d-block"
                  src="assets\imgs\new-site\credit-card.png"
                  alt="iori"
                />
              </div>
            </div>
          </div>
        </section>
        {/* invest section */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row d-flex align-items-center flex-lg-row-reverse">
            <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Grow your wealth with African Bank
                </h1>
                <p className="font-md color-brand-1">
                  Take a step closer to your financial goals with an African
                  Bank investment, where you don&apos;t need much to make more.
                  With just R500, you can access South Africa&apos;s top
                  investment rates.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Begin your journey to financial growth by opening an
                  investment account with us today.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    apply now
                    <BsChevronRight className="right-icon"/>
                  </Link>
                </div>
              </div>
              
              <div className="col-xl-6 col-lg-6 col-md-6">
                <img
                  className="d-block"
                  src="assets\imgs\new-site\retirement.png"
                  alt="iori"
                />
              </div>
              
            </div>
          </div>
        </section>

        {/* testimonial section */}
        <section className="section-800">
          <div className="container">
            <div className="pt-120 pb-120">
              <h1 className="color-brand-1 text-center">
                What our customers have to say
              </h1>
              <div className="mt-50">
                <div className="box-swiper">
                  <div className="swiper-container swiper-group-2">
                    <Testimonial2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
