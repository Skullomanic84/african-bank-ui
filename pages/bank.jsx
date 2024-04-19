/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Accordion2 from "../components/elements/Accordion2";
import { BsChevronRight } from "react-icons/bs";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Bank = () => {
  return (
    <>
      <Head>
        <title>African Bank - Bank</title>
      </Head>
      <Layout>
        {/* open an account */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Achieve your dreams with a tailored loan
                </h1>
                <p className="font-md color-brand-1">
                  Discover the key to achieving your aspirations with African
                  Bank. Our tailored loans, offering up to R250 000, are
                  customised to fit your unique needs, allowing you to take
                  meaningful steps toward your dreams.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  With flexible terms and comprehensive coverage for life&apos;s
                  surprises, get access to the best life has to offer with
                  African Bank today.
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
                  src="assets\imgs\new-site\myWorld.png"
                  alt="iori"
                />
              </div>
            </div>
          </div>
        </section>
        {/* download app */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center flex-row-reverse row-change">
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
        {/* Over draft */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Activate your MyWORLD Overdraft
                </h1>
                <p className="font-md color-brand-1">
                  Boost your MyWORLD bank account with our convenient Overdraft
                  facility, perfect for putting a little extra in your pocket
                  when you need it most.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  With up to R100 000, and affordable repayment terms, enjoy
                  cover for emergencies, and month-end debit orders, or cash for
                  essentials before payday.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Apply via our App, Online Banking, our Contact Centre on 0860
                  333 004, or at your nearest African Bank Branch.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    Open Account
                    <BsChevronRight className="right-icon"/>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <img
                  className="d-block"
                  src="assets\imgs\new-site\dreamer.png"
                  alt="iori"
                />
              </div>
            </div>
          </div>
        </section>
        {/* faq */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <h1 className="color-brand-1 mt-15 mb-20 text-center">
                  Open your MyWorld Overdraft now
                </h1>
                <Accordion2 />
              </div>
            </div>
          </div>
        </section>
        {/* discover the right credit card */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center flex-row-reverse row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Discover the right credit card for your lifestyle
                </h1>
                <p className="font-md color-brand-1">
                  Upgrade your banking experience with the African Bank Credit
                  Card, offering 62 days of interest-free transactions.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Enjoy added purchasing power, both in-store or online, with
                  the peace of mind that you can afford life’s essentials and
                  create unforgettable moments.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Your instant issue African Bank Credit Card gives you the
                  added convenience of easy repayment options, and you can earn
                  interest on any positive balance.
                </p>
                <div className="combo-btn">
                  <div className="mt-50 text-start column1">
                    <Link className="btn  btn-brand-1 hover-up " href="#">
                     <p className="combo-btn-text">APPLY NOW</p> 
                      <BsChevronRight className="right-icon"/>
                    </Link>
                  </div>
                  <div className="mt-50 text-start column2">
                    <Link className="btn btn-brand-1 hover-up" href="#">
                      <p className="combo-btn-text">TEL ME MORE</p> 
                      <BsChevronRight className="right-icon"/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <img
                  className="d-block"
                  src="assets\imgs\new-site\Images_Digital_500x500-02.png"
                  alt="iori"
                />
              </div>
            </div>
          </div>
        </section>
        {/* discover the right credit card */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  All you need to know about the African Bank Credit Card
                </h1>
                <p className="font-md color-brand-1">
                  Unlock the full potential of your finances with the African
                  Bank Credit Card, made to fit your lifestyle.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Earn up to 3% interest on positive balances, making your money
                  work for you.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Enjoy up to 62 days interest-free on purchases, helping you
                  manage your finances efficiently.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Globally accepted at all VISA merchants and ATMs, your card is
                  your passport to worldwide convenience.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Shop online securely, with the peace of mind that your
                  transactions are protected.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Take charge of your banking experience and maintain control
                  over your expenses while enjoying full global access.
                </p>

                <div className="combo-btn">
                  <div className="mt-50 text-start column1">
                    <Link className="btn  btn-brand-1 hover-up " href="#">
                     <p className="combo-btn-text">APPLY NOW</p> 
                      <BsChevronRight className="right-icon"/>
                    </Link>
                  </div>
                  <div className="mt-50 text-start column2">
                    <Link className="btn btn-brand-1 hover-up" href="#">
                      <p className="combo-btn-text">TEL ME MORE</p> 
                      <BsChevronRight className="right-icon"/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <img
                  className="d-block"
                  src="assets\imgs\new-site\best-bank.png"
                  alt="iori"
                />
              </div>
            </div>
          </div>
        </section>
        {/* discover the right credit card */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center flex-row-reverse row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Applying for a Credit Card: Your checklist
                </h1>
                <p className="font-md color-brand-1">
                  To apply online for a Credit Card, check that you have the
                  necessary documents ready:
                </p>
                <div className="mt-30 mb-30">
                  <ul className="list-ticks list-ticks-2">
                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Your most recent proof of income to verify your earnings.
                    </li>
                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      A bank statement from the last three months showing your
                      salary deposits.
                    </li>
                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Applicants must be 18 years or older to qualify.
                    </li>
                  </ul>
                </div>
                <div className="combo-btn">
                  <div className="mt-50 text-start column1">
                    <Link className="btn  btn-brand-1 hover-up " href="#">
                     <p className="combo-btn-text">APPLY NOW</p> 
                      <BsChevronRight className="right-icon"/>
                    </Link>
                  </div>
                  <div className="mt-50 text-start column2">
                    <Link className="btn btn-brand-1 hover-up" href="#">
                      <p className="combo-btn-text">TEL ME MORE</p> 
                      <BsChevronRight className="right-icon"/>
                    </Link>
                  </div>
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
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <h1 className="color-brand-1 mt-15 mb-20 text-center">
                  FAQ&apos;S
                </h1>
                <Accordion2 />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};


export default Bank;