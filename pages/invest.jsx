/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Accordion from "../components/elements/Accordion";
import { BsChevronRight } from "react-icons/bs";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Invest = () => {
  return (
    <>
      <Head>
        <title>African Bank - Invest</title>
      </Head>
      <Layout>
        {/* open an account */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Invest in your future
                </h1>
                <p className="font-md color-brand-1">
                  Secure generational wealth today for a brighter tomorrow.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  With African Bank&apos;s investment accounts, enjoy the
                  assurance of South Africa&apos;s best investment rate.
                  Starting from just R500, you can pave the way for your
                  family&apos;s financial security.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    TELL ME MORE
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
        {/* discover the right credit card */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Fixed Deposit Account
                </h1>
                <p className="font-md color-brand-1">
                  Take a big first step on the journey to your financial goals.
                  Grow your wealth with just R500 and SA’s best investment rate.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Open a fixed deposit account in just 3 minutes and turn your
                  money into more.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Earn SA’s best investment rate of 10.40% per annum.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  This is equivalent to 12.80% per annum, calculated on expiry
                  after 60 months.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up " href="#">
                    open account
                    <BsChevronRight className="right-icon"/>
                  </Link>
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

        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row mt-50 align-items-center">
              <div className="col-lg-6 mb-30">
                <h2 className="color-brand-1">
                  Earn Sa’s Best Investment Rate Of 9.16% Per Annum. This Is
                  Equivalent To 11% Per Annum Calculated On Expiry After 60
                  Months.
                </h2>
              </div>
              <div className="col-lg-6">
                <div className="card-offer-large card-we-do hover-up">
                  <div className="card-image">
                    <img
                      src="assets/imgs/page/homepage2/we-do3.png"
                      alt="iori"
                    />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-10">
                      <a
                        className="color-brand-1"
                        href="What makes us different from others? We give holistic solutions with strategy, design & technology."
                      >
                        PAYOUT OPTIONS
                      </a>
                    </h4>
                    <p className="font-md color-grey-500 mb-5">
                      Receive your interest payouts monthly, every 6 or 12
                      months, or at maturity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-offer-large card-we-do hover-up">
                  <div className="card-image">
                    <img
                      src="assets/imgs/page/homepage2/we-do.png"
                      alt="iori"
                    />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-10">
                      <a
                        className="color-brand-1"
                        href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves"
                      >
                        FIXED RATE
                      </a>
                    </h4>
                    <p className="font-md color-grey-500 mb-5">
                      Guaranteed returns with an interest rate which is fixed
                      for the duration of the investment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-offer-large card-we-do hover-up">
                  <div className="card-image">
                    <img
                      src="assets/imgs/page/homepage2/we-do4.png"
                      alt="iori"
                    />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-10">
                      <a
                        className="color-brand-1"
                        href="Share updates instantly within our project management software, and get the entire team collaborating"
                      >
                        TERMS
                      </a>
                    </h4>
                    <p className="font-md color-grey-500 mb-5">
                      Terms range from 3 to 60 months.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-offer-large card-we-do hover-up">
                  <div className="card-image">
                    <img
                      src="assets/imgs/page/homepage2/we-do2.png"
                      alt="iori"
                    />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-10">
                      <a
                        className="color-brand-1"
                        href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files."
                      >
                        ONCE OFF DEPOSIT
                      </a>
                    </h4>
                    <p className="font-md color-grey-500 mb-5">
                      To get around transfer limits, you have 7 days to complete
                      your total opening deposit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-offer-large card-we-do hover-up">
                  <div className="card-image">
                    <img
                      src="assets/imgs/page/homepage2/we-do5.png"
                      alt="iori"
                    />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-10">
                      <a
                        className="color-brand-1"
                        href="What makes us different from others? We give holistic solutions with strategy, design & technology."
                      >
                        EASY APPLICATION
                      </a>
                    </h4>
                    <p className="font-md color-grey-500 mb-5">
                      Register and open your account online in less than 3
                      minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Over draft */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  More About African Bank&apos;s Fixed Deposit Account
                </h1>
                <p className="font-md color-brand-1">
                  Earn SA’s best investment rate of 10.40% per annum.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  This is equivalent to 12.80% per annum, calculated on expiry
                  after 60 months.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Guaranteed returns with a fixed interest rate for the duration
                  of the investment.
                </p>
                <h4 className="color-brand-1 mt-20">Payment Options</h4>
                <p className="font-md color-brand-1 mt-20">
                  Receive interest payouts monthly, or every 6 or 12 months. Or
                  receive a payout at maturity.
                </p>
                <h4 className="color-brand-1 mt-20">Once-off deposit</h4>
                <p className="font-md color-brand-1 mt-20">
                  You have 7 days to complete your total opening deposit.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  This will help you avoid transfer limits.
                </p>
                <h4 className="color-brand-1 mt-20">
                  What do I need to open a fixed deposit savings account?
                </h4>
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
                      ID document or passport.
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
                      A minimum opening deposit of R500.
                    </li>
                  </ul>
                </div>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    Apply now
                    <BsChevronRight className="right-icon"/>
                  </Link>
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
        {/* faq */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <h1 className="color-brand-1 mt-15 mb-20 text-center">
                  Open your MyWorld Overdraft now
                </h1>
                <Accordion />
              </div>
            </div>
          </div>
        </section>

        {/* discover the right credit card */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Notice Deposit Account
                </h1>
                <p className="font-md color-brand-1">
                  Choose to access funds with notice! You can now earn SA’s best
                  rates for as long as you like. Choose to access funds by
                  giving 7-, 32-, or 90-days’ notice.
                </p>
                <div className="combo-btn">
                  <div className="mt-50 text-start">
                    <Link className="btn btn-brand-1 hover-up " href="#">
                      APPLY NOW
                      <BsChevronRight className="right-icon"/>
                    </Link>
                  </div>
                  <div className="mt-50 text-start">
                    <Link className="btn btn-brand-1 hover-up" href="#">
                      TEL ME MORE
                      <BsChevronRight className="right-icon"/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <img
                  className="d-block"
                  src="assets\imgs\new-site\myworld.png"
                  alt="iori"
                />
              </div>
            </div>
          </div>
        </section>
        {/* discover the right credit card */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  More About Notice Deposit
                </h1>
                <p className="font-md color-brand-1">
                  Earn interest from day one by opening a Notice Deposit Account
                  with African Bank. Take note the interest rates on a Notice
                  Deposit align with prevailing market conditions.
                </p>
                <h4 className="color-brand-1 mt-20">Notice period</h4>
                <p className="font-md color-brand-1">
                  Choose your notice period. The options are 7, 32, or 90 days.
                </p>
                <h4 className="color-brand-1 mt-20">Extra deposits</h4>
                <p className="font-md color-brand-1">
                  You may set up a debit order or make extra deposits from as
                  little as R100. They will help grow your investment.
                </p>
                <h4 className="color-brand-1 mt-20">Easy notice</h4>
                <p className="font-md color-brand-1">
                  Place notice on the banking App or on Online Banking. Click
                  here to get started.
                </p>
                <h4 className="color-brand-1 mt-20">How to apply?</h4>
                <p className="font-md color-brand-1">
                  Download the banking App or register for Online Banking here.
                  It takes less than 3 minutes to open your account.
                </p>
                <h4 className="color-brand-1 mt-20">Varying interest rates</h4>
                <p className="font-md color-brand-1">
                  Interest rates fluctuate and remain in line with prevailing
                  marketing conditions.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up " href="#">
                    APPLY NOW
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
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <h1 className="color-brand-1 mt-15 mb-20 text-center">
                  FAQ&apos;S
                </h1>
                <Accordion />
              </div>
            </div>
          </div>
        </section>
        {/* discover the right credit card */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Access Accumulator Account
                </h1>
                <p className="font-md color-brand-1">
                  Choose to access your funds immediately with an Access
                  Accumulator Account. With Access Accumulator, you can invest
                  your money and access it immediately, whether in part or in
                  full.
                </p>
                <h4 className="color-brand-1 mt-20">Key features:</h4>
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
                      <strong>Earn Increased Interest:</strong> Your interest
                      increases by 0.15% monthly over a maximum term of 24
                      months. The interest rate will never decrease during the
                      investment period.
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
                      <strong>Flexible Access:</strong> You can access your
                      money at any time, either partially or fully.
                    </li>
                  </ul>
                </div>
                {/* best rates section */}
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <img
                  className="d-block"
                  src="assets\imgs\new-site\pagebanner.png"
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
                <Accordion />
              </div>
            </div>
          </div>
        </section>
        {/* discover the right credit card */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Tax-Free Investments:
                </h1>
                <p className="font-md color-brand-1">
                  Our Tax-Free Investment product offers South Africa&apos;s
                  best interest rate that is non-taxable.
                </p>
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

        {/* investment calculator */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  More about tax-free investments
                </h1>
                <h4 className="color-brand-1 mt-20">Investment details:</h4>
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
                      <strong>Invest from R50: </strong>Make additional deposits
                      from as little as R50 a month.
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
                      <strong>Invest up to R36 000 a year Tax-Free: </strong>{" "}
                      You can invest tax-free up to R36 000 per tax year and up
                      to R500 000 during your lifetime.
                    </li>
                  </ul>
                </div>
                <h4 className="color-brand-1 mt-20">Rate increases:</h4>
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
                      Your interest rate remains the same throughout your 12
                      month investment period.
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
                      If the interest rate increases, you benefit.
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
                      If you reinvest after the 12-month term, the reinvestment
                      rate applies.
                    </li>
                  </ul>
                </div>
                <h4 className="color-brand-1 mt-20">Payout options:</h4>
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
                      You have the option to withdraw funds during the
                      anniversary month.
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
                      If the interest rate increases, you benefit.
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
                      Additionally, you can withdraw funds every 12-month period
                      thereafter.
                    </li>
                  </ul>
                </div>
                <h4 className="color-brand-1 mt-20">
                  Requirements to open a Tax-Free Investment Account:
                </h4>
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
                      Your identity document.
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
                      A minimum of R50.
                    </li>
                  </ul>
                </div>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up " href="#">
                    open account
                    <BsChevronRight className="right-icon"/>
                  </Link>
                </div>
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
        {/* download app */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center">
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
        {/* faq */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <h1 className="color-brand-1 mt-15 mb-20 text-center">
                  Open your MyWorld Overdraft now
                </h1>
                <Accordion />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};


export default Invest;