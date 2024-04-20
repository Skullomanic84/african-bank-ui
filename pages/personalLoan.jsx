/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Accordion from "../components/elements/Accordion";
import Calculactor from "../components/elements/calculator";
import Image from 'next/image';


const PersonalLoan = () => {
    return (
      <>
        <Head>
          <title>African Bank - Personal Loans</title>
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
                    When you apply for an online Personal Loan with African
                    Bank, you access a world of potential with just a few
                    clicks. Start your application journey by finding out how
                    much you can possibly qualify for.
                  </p>
                  <div className="mt-50 text-start">
                    <Link className="btn btn-brand-1 hover-up" href="#">
                      apply now
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
          {/* discover the right credit card */}
          <section className="section-800">
            <div className="container">
              <div className="row align-items-center row-change">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <h1 className="color-brand-1 mt-15 mb-20">
                    Apply for a Personal Loan in Minutes
                  </h1>
                  <p className="font-md color-brand-1">
                    Experience the convenience of banking, sharing, and saving
                    all in one place with African Bank&apos;s MyWORLD account!
                  </p>
                  <h4 className="color-brand-1 my-3">Disclaimer: </h4>
                  <p className="font-md color-brand-1 mt-20">
                    This Loans Calculator provides indicative values only.
                    African Bank provides no guarantees or warranties on the
                    values displayed. Only a full Loan application, on African
                    Bank’s website, the Banking App or on Online Banking, or in
                    other channels like our Branches and Call Centre, can
                    provide accurate details pertaining to Loans from African
                    Bank.
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  {/* loan calculator */}
                  <Calculactor />
                </div>
              </div>
            </div>
          </section>
          <section className="section mt-50 mb-40">
            <div className="container">
              <div className="row mt-50 align-items-center">
                <div className="col-lg-6 mb-30">
                  <h2 className="color-brand-1">
                    More About The Personal Loan
                  </h2>
                </div>
                <div className="col-lg-6">
                  <div className="card-offer-small card-we-do hover-up">
                    <div className="card-image">
                      {/* <img
                        src="assets/imgs/page/homepage2/we-do3.png"
                        alt="iori"
                      /> */}
                      <Image
                      width={500}
                      height={300}
                      src="/assets/imgs/page/homepage2/we-do3.png"
                      alt="iori"
                  layout="responsive" // This keeps the aspect ratio of the image
                   />
                    </div>
                    <div className="card-info">
                      <h4 className="color-brand-1 mb-10">
                        <a
                          className="color-brand-1"
                          href="What makes us different from others? We give holistic solutions with strategy, design & technology."
                        >
                          FLEXIBLE TERMS
                        </a>
                      </h4>
                      <p className="font-md color-grey-500 mb-5">
                        You can choose to repay your loan over 7 to 72 months.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-offer-small card-we-do hover-up">
                    <div className="card-image">
                      {/* <img
                        src="assets/imgs/page/homepage2/we-do.png"
                        alt="iori"
                      /> */}
                      <Image
                      src="/assets/imgs/page/homepage2/we-do.png"
                      alt="iori"
                      width={500}
                                      height={300}
                      layout="responsive" // This keeps the aspect ratio of the image
                   />
                    </div>
                    <div className="card-info">
                      <h4 className="color-brand-1 mb-10">
                        <a
                          className="color-brand-1"
                          href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves"
                        >
                          PERSONAL LOANS UP TO R 250 000
                        </a>
                      </h4>
                      <p className="font-md color-grey-500 mb-5">
                        We deposit your loan straight into your bank account.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-offer-small card-we-do hover-up">
                    <div className="card-image">
                      {/* <img
                        src="assets/imgs/page/homepage2/we-do4.png"
                        alt="iori"
                      /> */}
                      <Image
                      src="/assets/imgs/page/homepage2/we-do4.png"
                      alt="iori"
                      width={500}
                                      height={300}
                      layout="responsive" // This keeps the aspect ratio of the image
                   />
                    </div>
                    <div className="card-info">
                      <h4 className="color-brand-1 mb-10">
                        <a
                          className="color-brand-1"
                          href="Share updates instantly within our project management software, and get the entire team collaborating"
                        >
                          FIXED REPAYMENT
                        </a>
                      </h4>
                      <p className="font-md color-grey-500 mb-5">
                        You know exactly how much you will be repaying each
                        month.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section mt-50 mb-40">
            <div className="container">
              <div className="row mt-50 align-items-center">
                <div className="col-lg-6 mb-30">
                  <h2 className="color-brand-1">
                    What You Need To Apply For A Personal Loan
                  </h2>
                </div>
                <div className="col-lg-6">
                  <div className="card-offer-small card-we-do hover-up">
                    <div className="card-image">
                      {/* <img
                        src="assets/imgs/page/homepage2/we-do3.png"
                        alt="iori"
                      /> */}
                      <Image
                      src="/assets/imgs/page/homepage2/we-do3.png"
                      alt="iori"
                      width={500}
                                      height={300}
                      layout="responsive" // This keeps the aspect ratio of the image
                   />
                    </div>
                    <div className="card-info">
                      <h4 className="color-brand-1 mb-10">
                        <a
                          className="color-brand-1"
                          href="What makes us different from others? We give holistic solutions with strategy, design & technology."
                        >
                          PROOF OF IDENTITY
                        </a>
                      </h4>
                      <p className="font-md color-grey-500 mb-5">
                        You must be 18 to apply for a loan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-offer-small card-we-do hover-up">
                    <div className="card-image">
                      {/* <img
                        src="assets/imgs/page/homepage2/we-do.png"
                        alt="iori"
                      /> */}
                       <Image
                      src="/assets/imgs/page/homepage2/we-do.png"
                      alt="iori"
                      width={500}
                                      height={300}
                      layout="responsive" // This keeps the aspect ratio of the image
                   />
                    </div>
                    <div className="card-info">
                      <h4 className="color-brand-1 mb-10">
                        <a
                          className="color-brand-1"
                          href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves"
                        >
                          MOST RECENT PROOF OF INCOME
                        </a>
                      </h4>
                      <p className="font-md color-grey-500 mb-5">
                        E.g. latest payslip
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-offer-small card-we-do hover-up">
                    <div className="card-image">
                      {/* <img
                        src="assets/imgs/page/homepage2/we-do4.png"
                        alt="iori"
                      /> */}
                      <Image
                      src="assets/imgs/page/homepage2/we-do4.png"
                      alt="iori"
                      width={500}
                                      height={300}
                      layout="responsive" // This keeps the aspect ratio of the image
                   />
                    </div>
                    <div className="card-info">
                      <h4 className="color-brand-1 mb-10">
                        <a
                          className="color-brand-1"
                          href="Share updates instantly within our project management software, and get the entire team collaborating"
                        >
                          3 MONTHS BANK STATEMENTS
                        </a>
                      </h4>
                      <p className="font-md color-grey-500 mb-5">
                        Latest 3 months bank statements, reflecting 3 salary
                        deposits.
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
              <div className="row align-items-center row-change flex-row-reverse">
                <div className="col-xl-7 col-lg-7 col-md-7">
                  <h1 className="color-brand-1 mt-15 mb-20">
                    Credit Life Insurance
                  </h1>
                  <p className="font-md color-brand-1">
                    With African Bank’s Credit Life Insurance, you can rest
                    assured that your credit is insured should anything happen
                    to you that would prevent you from making repayments. You
                    are covered for*.
                  </p>
                  <p className="font-md color-brand-1 mt-20">
                    With MyWORLD, you can open up to 5 accounts with no monthly
                    fees, allowing you to share finances seamlessly with friends
                    and family.
                  </p>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
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
                            <strong>Retrenchment</strong>
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
                            <strong>Death</strong>
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
                            <strong>Compulsory Unpaid Leave</strong>
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
                            <strong>Lay Offs</strong>
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
                            <strong>Short Time</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
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
                            <strong>Loss of Income</strong>
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
                            <strong>Retrenchment Balance Claim</strong>
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
                            <strong>Temporary Disability</strong>
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
                            <strong>Permanent Disability</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-50 text-start">
                    <Link className="btn btn-brand-1 hover-up" href="#">
                      find out more
                    </Link>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
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
              <div className="row align-items-center row-change">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <h1 className="color-brand-1 mt-15 mb-20">
                    Other Types Of Loans That You Can Get From African Bank
                  </h1>
                  <h4 className="color-brand-1 my-3">12% Loans</h4>
                  <p className="font-md color-brand-1">
                    Our famous 12% loan gives you a fixed interest rate of just
                    12% so you can have peace of mind that your monthly
                    repayments won’t become too expensive.
                  </p>
                  <div className="mt-20 text-start">
                    <Link className="btn btn-brand-1 hover-up " href="#">
                      tell me more
                    </Link>
                  </div>
                  <h4 className="color-brand-1 my-3">Consolidation Loans</h4>
                  <p className="font-md color-brand-1 my-3">
                    You can reduce the outstanding balance on your total debt
                    and merge your payments for a lower loan instalment with a
                    Debt Consolidation Loan.
                  </p>
                  <p className="font-md color-brand-1 my-3">
                    You can combine up to 5 loans into 1 easy-to-manage
                    Consolidation Loan to the value of R250 000 and save cash
                    with a lower repayment.
                  </p>
                  <div className="mt-20 text-start">
                    <Link className="btn btn-brand-1 hover-up " href="#">
                      tell me more
                    </Link>
                  </div>
                  <h4 className="color-brand-1 mt-20">Other Loan Types</h4>
                  <p className="font-md color-brand-1 my-3">
                    Because you have the audacity to believe in yourself, if you
                    require a loan to help you with student life, or starting
                    your side hustle or even renovating your house to make it
                    your dream home, you can still apply for a Personal Loan
                    from African Bank because we believe in you too.
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
  
  
  export default PersonalLoan;