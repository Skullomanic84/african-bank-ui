/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Accordion from "../components/elements/Accordion";

const CreditCard = () => {
  return (
    <>
      <Head>
        <title>African Bank - Credit Card</title>
      </Head>
      <Layout>
        {/* open an account */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Get the Credit Card that suits your Lifestyle
                </h1>
                <p className="font-md color-brand-1">
                  Banking has never been this easy. Now you can make an instant
                  impression with your African Bank Credit Card and bank on the
                  go, wherever you are, online or on any mobile device. Start
                  your application journey by finding out how much you can
                  possibly qualify for.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    TELL ME MORE
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

        {/* download app */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mb-20">Get the app now</h1>
                <p className="font-md color-grey-500">
                  or register for online banking, and open your investment
                  account today.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    Download Now
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

        <section className="section-800">
          <div className="container">
            <div className="row mt-50 align-items-center">
              <div className="col-lg-6 mb-30">
                <h2 className="color-brand-1">
                  What Is Special About The Black Credit Card From African Bank?
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
                        EARN INTEREST ON POSITIVE BALANCES
                      </a>
                    </h4>
                    <p className="font-md color-grey-500 mb-5">
                      You can earn up to 3% interest on a positive balance on
                      our Credit Card.
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
                        UP TO 62 DAYS INTEREST FREE
                      </a>
                    </h4>
                    <p className="font-md color-grey-500 mb-5">
                      If you settle your Credit Card in full by the due date,
                      you will pay no interest on your POS purchases.
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
                        CREDIT CARD LIMIT
                      </a>
                    </h4>
                    <p className="font-md color-grey-500 mb-5">
                      Apply for Credit Card with up to a R250k credit limit.
                      *Terms, conditions and affordability rules apply.
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
                        ONLINE SHOPPING
                      </a>
                    </h4>
                    <p className="font-md color-grey-500 mb-5">
                      For added convenience, you can use your African Bank Visa
                      Credit Card to make secure payments online in the privacy
                      of your home or office.
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
                        INSTANT ISSUE
                      </a>
                    </h4>
                    <p className="font-md color-grey-500 mb-5">
                      No waiting period to get your Card once approved, simply
                      step into any African Bank branch and get your
                      personalised and Embossed Card.
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
                        BANKING ON THE MOVE
                      </a>
                    </h4>
                    <p className="font-md color-grey-500 mb-5">
                      Register for and safely access our online and mobile
                      services. Transact anywhere and anytime at your
                      convenience.
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
                        EASY REPAYMENTS
                      </a>
                    </h4>
                    <p className="font-md color-grey-500 mb-5">
                      Payments have never been easier. You can either pay
                      online, by phone, debit order, EFT, EasyPay, Pay@ or at
                      any of our Branches.
                    </p>
                  </div>
                </div>
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
                  A Few Safety Tips When Using Your African Bank Black Credit
                  Card:
                </h1>
                <h5 className="color-brand-1 my-3">
                  Never give your Card, PIN or CVV number to anybody, including
                  African Bank employees.
                </h5>
                <div className="mt-5 mb-30">
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
                      Fraudsters phone customers, pretending to be African Bank
                      employees, and ask for such details.
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
                      Fraudsters also phone customers, pretending to be African
                      Bank employees, and ask for OTPs. NEVER share OTPs with
                      anyone.
                    </li>
                  </ul>
                </div>
                <h5 className="color-brand-1 my-3">
                  Always keep your PIN a secret.
                </h5>
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
                      Swipe, dip and contactless transactions will always prompt
                      you to enter your PIN.
                    </li>
                  </ul>
                </div>
                <p className="font-md color-brand-1 mt-20">
                  Always ensure that you receive your Card back after every
                  transaction and keep it in a safe place.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  For Card Not Present transactions, e.g. online payments, the
                  transaction will require an OTP.
                </p>
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

        {/* Over draft */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  For Lost Or Stolen Cards
                </h1>
                <p className="font-md color-brand-1 my-3">
                  If you’re within South Africa, immediately report the loss or
                  theft of your Credit Card by contacting African Bank on 0861
                  000 555 or +27 11 256 9988
                </p>
                <p className="font-md color-brand-1 my-3">
                  You can also use Cellphone Banking by dialling *120*225# from
                  your cellphone.
                </p>
                <p className="font-md color-brand-1 my-3">
                  You can also Stop a Card by logging into Online Banking on our
                  website www.africanbank.co.za or by using your African Bank
                  App.
                </p>
                <p className="font-md color-brand-1 my-3">
                  If you’re travelling outside the borders of South Africa,
                  immediately contact African Bank on +27 (11) 256 9988 or the
                  Visa Global Customer Assistance Service on Call Collect USA –
                  (1) – 410 581 3836.
                </p>
                <p className="font-sm color-brand-1 my-3">
                  Terms, conditions and affordability rules apply. Full terms
                  and conditions are available on www.africanbank.co.za.
                  Service, initiation and insurance fees apply. Insurance
                  underwritten by Guardrisk Life Limited Reg. No:
                  1990/013922/06. African Bank Limited is an authorised
                  financial services and credit provider. NCR Reg. No:
                  NCRCP7638. Reg No: 2014/176899/06. RDC91017/16.
                </p>

                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    Apply now
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
        {/* discover the right credit card */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Features And Benefits Of The Black Credit Card
                </h1>
                <p className="font-md color-brand-1 my-3">
                  Our personalised embossed Credit Card is issued instantly at
                  any African Bank Branch.
                </p>
                <p className="font-md color-brand-1 my-3">
                  Accepted globally at all merchants and ATM’s displaying the
                  Visa logo.
                </p>
                <p className="font-md color-brand-1 my-3">
                  Using your Credit Card is safer than carrying cash.
                </p>
                <p className="font-md color-brand-1 my-3">
                  Simply Tap, Dip or Swipe, then enter your PIN to complete any
                  transaction.
                </p>
                <p className="font-md color-brand-1 my-3">
                  Online (Card Not Present) transactions are secure with
                  participating merchants. An OTP (One Time PIN) will be sent to
                  the cardholder to authorise the transaction.
                </p>
                <p className="font-md color-brand-1 my-3">
                  Cash withdrawals at POS (Point of Sale, or till points) at
                  participating merchants, for example, Checkers, Shoprite, Spar
                  and Pick n Pay.
                </p>
                <p className="font-md color-brand-1 my-3">
                  Free SMS notifications on all successful transactions.
                </p>
                <p className="font-md color-brand-1 my-3">
                  Set your own personalised transaction limits. (If you have not
                  set your personalised limits, the African Bank discretionary
                  default limits will apply).
                </p>
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
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  The Advantages Of Using Our Banking App Or Online Banking
                </h1>
                <p className="font-md color-brand-1">
                  Our digital banking platforms are free to use. You will not
                  use your data when transacting on our Website, Online Banking,
                  Banking App and Cellphone Banking. You can:
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
                      Check your available balance any time, any where.
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
                      Pay your Credit Card online.
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
                      Get a statement in 1 easy step.
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
                      Get a paid-up letter in 1 easy step.
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
                      Get a settlement quote in 1 easy step .
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
                      Get tax certificate in 1 easy step.
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
                      Stop a Card in 3 easy steps.
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
                      Reactivate a stopped Card in 3 easy steps.
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
                      steps View or change limits in 3 easy steps.
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
                      Access your free credit report every month.
                    </li>
                  </ul>
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
        <section className="section-800">
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
                  src="assets\imgs\new-site\best-bank.png"
                  alt="iori"
                />
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
                  src="assets\imgs\new-site\best-bank.png"
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


export default CreditCard;