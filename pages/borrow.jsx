/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Accordion from "../components/elements/Accordion";
import Calculactor from "../components/elements/calculator";
import { BsChevronRight } from "react-icons/bs";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Image from 'next/image';

const Borrow = () => {
  return (
    <>
      <Head>
        <title>African Bank - Borrow</title>
      </Head>
      <Layout>
        {/* open an account */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Effortless Online Banking registration
                </h1>
                <p className="font-md color-brand-1">
                  Because we know you&apos;re busy, African Bank has simplified
                  its Online Banking to be user-friendly and efficient. Our
                  digital banking platforms are designed to save you time and
                  money, offering free access to a variety of banking services.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Whether you prefer navigating through our Online Banking
                  portal, using the African Bank App available in app stores, or
                  opting for Cellphone Banking via *120*221#, convenience is
                  just a few clicks away.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Registering is easy – all you need is just an email address,
                  cellphone number, and your ID.
                </p>
                <div className="mt-50 mb-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    apply now
                    <BsChevronRight className="right-icon"/>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                {/* <img
                  className="d-block"
                  src="assets\imgs\new-site\Images_Digital_500x500-02.png"
                  alt="iori"
                /> */}
               
               <Image
        className="d-block"
        src="/assets/imgs/new-site/Images_Digital_500x500-02.png"
        alt="Get a loan options"
        width={500}
        height={300}
        layout="responsive"
      />
             
              </div>
            </div>
          </div>
        </section>
        {/* loan calculator */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                {/* <img
                  className="d-block"
                  src="assets\imgs\new-site\loan.png"
                  alt="iori"
                /> */}
                 <Image
                    className="d-block"
                    src="/assets/imgs/new-site/loan.png"
                    alt="iori"
                    width={500}
                    height={300}
                    layout="responsive" // This keeps the aspect ratio of the image
                  />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <Calculactor />
              </div>
            </div>
          </div>
        </section>

        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mb-20">
                  Quickly secure your Personal Loan
                </h1>
                <p className="font-md color-grey-500">
                  Take advantage of the simplicity of applying for a personal
                  loan with African Bank. Use our easy-to-use loan calculator to
                  determine your repayment plan.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Whether you are overcoming financial challenges, or reaching
                  for the stars, a personal loan can offer the financial support
                  you need.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Enjoy the stability of fixed repayments and the flexibility of
                  terms that help make sure your monthly payments are
                  manageable.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Start your application today and take a step towards financial
                  relief and stability.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    apply now
                    <BsChevronRight className="right-icon"/>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                {/* <img
                  className="d-block"
                  src="assets\imgs\new-site\retirement.png"
                  alt="iori"
                /> */}

                  <Image
                    className="d-block"
                    src="/assets/imgs/new-site/retirement.png"
                    alt="iori"
                    width={500}
                    height={300}
                    layout="responsive" // This keeps the aspect ratio of the image
                  />
               
              </div>
            </div>
          </div>
        </section>
        {/* Over draft */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center flex-row-reverse row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Secure a Personal Loan today
                </h1>
                <p className="font-md color-brand-1">
                  It only takes a few minutes to apply for an African Bank
                  Personal Loan.
                </p>
                <p className="font-md color-brand-1 mt-20">Disclaimer:</p>
                <p className="font-md color-brand-1 mt-20">
                  The loan calculator is for estimation purposes only and cannot
                  guarantee exact repayment amounts. Accurate loan details,
                  including terms and rates, are provided only through a
                  complete application via African Bank’s website, app, online
                  banking, branches, or call centre.
                </p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                {/* <img
                  className="d-block"
                  src="assets\imgs\new-site\dreamer.png"
                  alt="iori"
                /> */}

<Image
        className="d-block"
        src="/assets/imgs/new-site/dreamer.png"
        alt="Get a loan options"
        width={500}
        height={300}
        layout="responsive"
      />
              
                                    
              </div>
            </div>
          </div>
        </section>

        {/* faq */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <h1 className="color-brand-1 mt-15 mb-20 text-center">FAQS</h1>
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
                  Streamline your finances with a Consolidation Loan
                </h1>
                <p className="font-md color-brand-1">
                  Combine up to 5 loans into a single, manageable loan of up to
                  R250 000, with an African Bank Consolidation Loan. Offering
                  flexible terms from 12 to 72 months, this loan also provides
                  you with the option to select a payment break for a month when
                  you most need financial breathing space.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Simplify your commitments and enjoy the convenience of one
                  loan with African Bank.
                </p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                {/* <img
                  className="d-block"
                  src="assets\imgs\new-site\myworld.png"
                  alt="iori"
                /> */}
<Image
        className="d-block"
        src="/assets/imgs/new-site/myWorld.png"
        alt="Get a loan options"
        width={500}
        height={300}
        layout="responsive"
      />
                
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
                  Get a 12% Loan for peace of mind
                </h1>
                <p className="font-md color-brand-1">
                  Benefit from a low, fixed interest rate of 12% with African
                  Bank’s 12% Loan. Enjoy the stability of consistent repayments
                  and plan your budget with confidence, thanks to fixed interest
                  rates.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Choose from repayment terms ranging between 9 to 24 months for
                  financial flexibility that works for you.
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
                {/* <img
                  className="d-block"
                  src="assets\imgs\new-site\best-bank.png"
                  alt="iori"
                /> */}


         <Image
        className="d-block"
        src="/assets/imgs/new-site/best-bank.png"
        alt="Get a loan options"
        width={500}
        height={300}
        layout="responsive"
      />  
              </div>
            </div>
          </div>
        </section>

        {/* discover the right credit card */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center flex-row-reverse row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Unlock exclusive value-added deals
                </h1>
                <p className="font-md color-brand-1">
                  Discover unbeatable value with African Bank&apos;s exclusive
                  deals on top devices, brought to you in partnership with
                  leading brands. Our latest deals come with bonus entertainment
                  and education vouchers, offering you even more value for your
                  money.
                </p>
                <p className="font-md color-brand-1">
                  Easily add a device of your choice when applying for your loan
                  and enjoy our value-added deals.
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
                {/* <img
                  className="d-block"
                  src="assets\imgs\new-site\credit-card.png"
                  alt="iori"
                /> */}
                <Image
        className="d-block"
        src="/assets/imgs/new-site/credit-card.png"
        alt="Get a loan options"
        width={500}
        height={300}
        layout="responsive"
      />  
              </div>
            </div>
          </div>
        </section>

        {/* discover the right credit card */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Get your free credit report from African Bank
                </h1>
                <p className="font-md color-brand-1">
                  Your credit score and credit report is a crucial aspect when
                  applying for credit. Ensure you&apos;re in the know by
                  accessing your credit report with African Bank. Simply
                  register with African Bank by downloading our Banking app or
                  via Online Banking.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  This service is completely free, giving you sight of your
                  credit score whenever you log in, as well as access to your
                  updated credit report every month. Stay informed and take
                  control of your financial health with African Bank.
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
                {/* <img
                  className="d-block"
                  src="assets\imgs\new-site\pagebanner.png"
                  alt="iori"
                /> */}


<Image
        className="d-block"
        src="/assets/imgs/new-site/pagebanner.png"
        alt="Get a loan options"
        width={500}
        height={300}
        layout="responsive"
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
                {/* <img
                  className="d-block"
                  src="assets\imgs\new-site\get app.png"
                  alt="iori"
                /> */}

                
<Image
                                     className="d-block"
                                     src="/assets/imgs/new-site/get app.png"
                                     alt="iori"
                                     width={500}
                  height={300}
                                    layout="responsive" // This keeps the aspect ratio of the image
                                    />  
                
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Borrow;
