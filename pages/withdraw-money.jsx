/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Image from 'next/image';

const WithdrawMoney = () => {
  return (
    <>
      <Head>
        <title>African Bank - Withdraw Money</title>
      </Head>
      <Layout>
        {/* open an account */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                How to Withdraw Money from your African Bank Account
                </h1>
                <p className="font-md color-brand-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium. Massa ultricies mi quis hendrerit dolor magna eget. Nullam eget felis eget nunc lobortis. Faucibus ornare suspendisse sed nisi. Sagittis eu volutpat odio facilisis mauris sit amet massa. Erat velit scelerisque in dictum non consectetur a
                </p>
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
                       alt="iori"
                       width={500}
                                      height={300}
                      layout="responsive" // This keeps the aspect ratio of the image
                   />
              </div>
            </div>
          </div>
        </section>


        {/* infographics */}

        {/* faq */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <h1 className="color-brand-1 mt-15 mb-20 text-center">
                How much will I be charged to withdraw cash<br/> from my MwWORLD bank account?
                </h1>
                {/* fees table structure */}
              </div>
            </div>
          </div>
        </section>

        <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <h1 className="color-brand-1 mt-15 mb-20 text-center">
                How much will I be charged to withdraw cash<br/> from my MwWORLD bank account?
                </h1>
                {/* fees table structure */}
              </div>
            </div>
          </div>
        </section>

    {/* discover the right credit card */}
    <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                    Where can I see my Pay@ number?
                </h1>
                <p className="font-md color-brand-1">
                Your Pay@ number is 11654 followed by the 11 digit account number you wish to deposit money into. 
                </p>
                <p className="font-md color-brand-1 mt-20">
                If it is your bank account, login into the African Bank App: 
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
                      Select Menu 
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
                      Select Payments and Transfers 
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
                      Select Cash Deposit  
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
                      You will then see your Pay@ number  
                    </li>
                  </ul>
                </div>
                <p className="font-md color-brand-1 mt-20">
                You will get your Pay@ number in the Welcome Pack from African Bank which is emailed to you when you open your MyWORLD bank account.  
                </p>
                <p className="font-md color-brand-1 mt-20">
                Your Pay@ number also appears on your account statement.  
                </p>
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
        {/* Over draft */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                How Much Can I Deposit At A Time Using My Pay@ Number?
                </h1>
                <p className="font-md color-brand-1">
                Cash deposit amounts are retailer dependent, up to a maximum transaction value of R3 000 at a time.
                </p>
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
            <div className="row align-items-center row-change flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                How much can I withdraw at a time?
                </h1>
                <p className="font-md color-brand-1">
                Your withdrawal limits can be set on the African Bank App.
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
                      Login to the African Bank App.
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
                      Select Cards. 
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
                      Select Manage Limits. 
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
                      Select the Card that you want to manage the limit on.
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
                      Then set your daily cash withdrawal limit.
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
                      You can also set your daily point of sale limit and your daily online purchase limit on this screen.
                    </li>
                  </ul>
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

        {/* download app */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change">
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


export default WithdrawMoney;