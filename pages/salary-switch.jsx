/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Image from 'next/image';

const SalarySwitch = () => {
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
                How to Switch your Salary to African Bank
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

    {/* discover the right credit card */}
    <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                Switch Today and Save
                </h1>
                <p className="font-md color-brand-1">
                The first step to banking better is to open a MyWORLD bank account. To do this, download the African Bank App, register, and follow the easy process to open your bank account in less than 3 minutes. 
                </p>
                <p className="font-md color-brand-1 mt-20">
                Access your salary switch letter as shown above.  
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
                      Once logged into the App, select the MyWORLD Account from your dashboard 
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
                      Select Account Info
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
                      Select Share Account Details   
                    </li>

                  </ul>
                </div>
                <p className="font-md color-brand-1 mt-20">
                You can opt to view the pdf and download to your device.  
                </p>
                <p className="font-md color-brand-1 mt-20">
                Enter an email address to receive the account information.   
                </p>
                <p className="font-md color-brand-1 mt-20">
                You can enter your HR email address here or email it to yourself and then forward to your HR department.   
                </p>
                <p className="font-md color-brand-1 mt-20">
                You can select Share and share the account information via Whatsapp or other methods.  
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
        {/* Over draft */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                Things To Consider When You Switch Your Salary To African Bank?
                </h1>
                <p className="font-md color-brand-1">
                Ensure that you give your HR department sufficient notice of your account information to allow them to process the change in salary details on their payroll systems. Different companies have different payroll cut-off dates, so confirm with your HR department in advance. 
                </p>
                <p className="font-md color-brand-1 mt-20">
                Always keep checking-in with your HR department until you get confirmation of the change in payroll details.
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

       
        {/* discover the right credit card */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                The Benefits of Banking with African Bank
                </h1>
                <p className="font-md color-brand-1">
                Earn South Africa’s best interest rate on positive balances in the MyWORLD bank account and pocket accounts. 
                </p>
                <p className="font-md color-brand-1 mt-20">
                Access Power Pockets to share with loved ones to empower them to build better financial habits. 
                </p>
                <p className="font-md color-brand-1 mt-20">
                Earn South Africa’s best interest rates on investment accounts, guaranteed.
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
              <Image
                      className="d-block"
                      src="/assets/imgs/new-site/get app.png"
                      alt="iori"
                      width={500}
                                      height={300}
                      layout="responsive" // This keeps the aspect ratio of the image
                   />
                {/* <img
                  className="d-block"
                  src="assets\imgs\new-site\get app.png"
                  alt="iori"
                /> */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};


export default SalarySwitch;