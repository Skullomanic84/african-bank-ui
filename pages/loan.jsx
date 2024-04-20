/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Accordion from "../components/elements/Accordion";
import Image from 'next/image';

const Loan = () => {
  return (
    <>
      <Head>
        <title>African Bank - 12% Loan</title>
      </Head>
      <Layout>
        {/* open an account */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                Reach your goals with a Personal Loan from African Bank
                </h1>
                <p className="font-md color-brand-1">
                With a low interest rate fixed at 12% you will always have the peace of mind of knowing that your repayments will stay the same, with a fixed interest rate and fixed monthly repayments. Start your application journey by finding out how much you can possibly qualify for
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    quote me
                  </Link>
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
            <div className="row align-items-center row-change flex-row-reverse">
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
        {/* discover the right credit card */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                How The 12% Loan Application Works.
                </h1>
                <p className="font-md color-brand-1">
                Sometimes you want the loan without the endless phone calls and interviews. We can help.
                </p>
                <p className="font-md color-brand-1 mt-20">
                You can apply now for an online loan of up to R250,000 in just 3 minutes!
                </p>
                <p className="font-md color-brand-1 mt-20">
                Simply fill in your contact details and financial information.
                </p>
                <p className="font-md color-brand-1 mt-20">
                For security reasons, you will need to enter an OTP (called a One Time PIN), and we will display an indicative quote to you in seconds if you qualify. Thereafter follow the easy steps to complete your online application.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    Open Now
                  </Link>
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
                  alt="iori"
                  width={500}
                                      height={300}
                                      layout="responsive" // This keeps the aspect ratio of the image
                                      />
              </div>
            </div>
          </div>
        </section>
        {/* faq */}
         <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <h1 className="color-brand-1 mt-15 mb-20 text-center">
                Link innovative pockets to your MyWORLD account
                </h1>
                <Accordion />
              </div>
            </div>
          </div>
        </section>
        {/* blog section */}


                {/* discover the right credit card */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center row-change flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                Other Types Of Loans That You Can Get From African Bank
                </h1>
                <h4 className="color-brand-1 mt-20">
                Personal Loans
                </h4>
                <p className="font-md color-brand-1">
                You want to apply for a personal loan but have heard mixed opinions on whether this is a wise financial move. Sure, there are ways to get an instant loan quite easily but are you doing the right thing?
                </p>
                <p className="font-md color-brand-1 mt-20">
                African Bank’s Personal Loan lets your best life await you. You can get up to R250 000, customisable terms, and vital cover for life’s unexpected events. And it comes from a brand that you can trust.
                </p>
                <div className="mt-20 text-start">
                    <Link className="btn btn-brand-1 hover-up " href="#">
                     TELL ME MORE
                    </Link>
                </div>

                <h4 className="color-brand-1 mt-20">
                Consolidation Loans
                </h4>
                <p className="font-md color-brand-1">
                You can reduce the outstanding balance on your total debt and merge your payments for a lower loan instalment with a Debt Consolidation Loan.
                </p>
                <p className="font-md color-brand-1 mt-20">
                You can combine up to 5 loans into 1 easy-to-manage Consolidation Loan to the value of R250 000 and save cash with a lower repayment 
                </p>
                <div className="mt-20 text-start">
                    <Link className="btn btn-brand-1 hover-up " href="#">
                     TELL ME MORE
                    </Link>
                  </div>
                <h4 className="color-brand-1 mt-20">
                Other Loan Types
                </h4>
                <p className="font-md color-brand-1">
                Because you have the audacity to believe in yourself, if you require a loan to help you with student life, or starting your side hustle or even renovating your house to make it your dream home, you can still apply for a Personal Loan from African Bank because we believe in you too.
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

      </Layout>
    </>
  );
};


export default Loan;