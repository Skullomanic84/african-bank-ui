import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Accordion2 from "../components/elements/Accordion2";

const DebtConsolidation = () => {
  return (
    <>
      <Head>
        <title>African Bank - Debt Consolidation</title>
      </Head>
      <Layout>
        {/* open an account */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                Combine up to 5 loans in 1
                </h1>
                <p className="font-md color-brand-1">
                Things work better when we work together. Make the most of your budget when you combine your loans today. Mix ‘n match up to 5 loans into 1 easy-to-manage Consolidation Loan to the value of R250 000 and save cash with a lower repayment. Start your application journey by finding out how much you can possibly qualify for.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    quote me
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
        <section className="section-800 bg-grey-60">
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

        {/* Over draft */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                How An Online Consolidation Loan Application Works.
                </h1>
                <p className="font-md color-brand-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus 
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
        
        {/* faq */}
        <section className="section-800 bg-grey-60">
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
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                    Other Types of Loans that you can get from African Bank.
                </h1>
                <h4 className="color-brand-1 mt-20">Personal Loans</h4>
                <p className="font-md color-brand-1 my-3">
                You want to apply for a personal loan but have heard mixed opinions on whether this is a wise financial move. Sure, there are ways to get an instant loan quite easily but are you doing the right thing?
                </p>
                <p className="font-md color-brand-1 my-3">
                African Bank’s Personal Loan lets your best life await you. You can get up to R250,000, customisable terms, and vital cover for life’s unexpected events. And it comes from a brand that you can trust.
                </p>
                <div className="mt-5 text-start">
                    <Link className="btn btn-brand-1 hover-up " href="#">
                      tell me more
                    </Link>
                  </div>
                <h4 className="color-brand-1 mt-20">12% Loans</h4>
                <p className="font-md color-brand-1 my-3">
                With a low interest rate fixed at 12% you will always have the peace of mind of knowing that your repayments will stay the same, with a fixed interest rate and fixed monthly repayments.
                </p>
                <div className="mt-5 text-start">
                    <Link className="btn btn-brand-1 hover-up " href="#">
                      tell me more
                    </Link>
                  </div>
                <h4 className="color-brand-1 mt-20">Other Loan Types</h4>
                <p className="font-md color-brand-1 my-3">
                Because you have the audacity to believe in yourself, if you require a loan to help you with student life, or starting your side hustle or even renovating your house to make it your dream home, you can still apply for a Personal Loan from African Bank because we believe in you too.
                </p>
                <div className="mt-5 text-start">
                    <Link className="btn btn-brand-1 hover-up " href="#">
                      tell me more
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
      </Layout>
    </>
  );
};


export default DebtConsolidation;