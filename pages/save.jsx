/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Accordion from "../components/elements/Accordion";
import { BsChevronRight } from "react-icons/bs";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Bank = () => {
  return (
    <>
      <Head>
        <title>African Bank - Save</title>
      </Head>
      <Layout>
        {/* open an account */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Save with African Bank
                </h1>
                <p className="font-md color-brand-1">
                  Looking to save more while maintaining your lifestyle?
                  We&apos;ve simplified the process of saving on banking fees
                  and more! With the MyWORLD bank account from African Bank, you
                  and your family can enjoy the convenience of shared banking.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Try shared banking today and discover its unique benefits
                  first-hand, all while enjoying South Africa&apos;s lowest
                  banking fees. Create your own banking world and start saving
                  now.
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
                  src="assets\imgs\new-site\loan.png"
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
                  Open a MyWORLD account today
                </h1>
                <p className="font-md color-brand-1">
                  Experience the convenience of banking, sharing, and saving all
                  in one place with African Bank&apos;s MyWORLD account!
                </p>
                <p className="font-md color-brand-1 mt-20">
                  MyWORLD is African Bank&apos;s comprehensive banking solution
                  made to empower you to bank, share, and save effortlessly.
                  With the MyWORLD account, you gain the unique ability to bank
                  with your loved ones through shared banking, all while
                  enjoying the benefit of South Africa&apos;s lowest banking
                  fees. Discover more about the convenience of banking, sharing,
                  and saving with MyWORLD.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Create your own personalised world of banking with MyWORLD
                  with the option to create up to 5 unique Pocket accounts to
                  share with friends and family. This way you can enjoy the
                  benefits of shared banking and SA&apos;s lowest banking fees.
                </p>
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
        {/* Over draft */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  MyWORLD: Made to share
                </h1>
                <p className="font-md color-brand-1">
                  MyWORLD is intended for sharing. Just as we share DNA, homes,
                  and ideas, why not share a banking account?
                </p>
                <p className="font-md color-brand-1 mt-20">
                  With MyWORLD, you can open up to 5 accounts with no monthly
                  fees, allowing you to share finances seamlessly with friends
                  and family.
                </p>

                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    Open Now
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
        {/* discover the right credit card */}
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Efficient banking made simple
                </h1>
                <p className="font-md color-brand-1">
                  Save valuable time by banking conveniently through our Banking
                  App or Online Banking. You also have the option to bank
                  effortlessly with Cellphone Banking by dialling *120*321#.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  With our digital banking platforms, you can access your
                  accounts anytime, anywhere. For added security, remember not
                  to share your username, PIN, or password with anyone.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Best of all, our banking platforms are completely free to use,
                  and you won&apos;t have to pay any charges for data usage.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up " href="#">
                    open now
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
        {/* open an account */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">
                  Unlock savings opportunities
                </h1>
                <p className="font-md color-brand-1">
                  Bank confidently with South Africa&apos;s lowest banking fees
                  when you choose African Bank. Plus, enjoy big savings with our
                  competitive interest rate of 4.00% on any positive balance in
                  your Savings Pocket.
                </p>
                <p className="font-md color-brand-1 mt-20">
                  Access our range of banking platforms for free, without paying
                  any data usage charges. Experience seamless banking while
                  maximising your savings potential with African Bank.
                </p>
                <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    open now
                    <BsChevronRight className="right-icon"/>
                  </Link>
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
        <section className="section-800">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">How MyWORLD works</h1>
                <p className="font-md color-brand-1">
                  The primary account holder is the person who opens a MyWORLD
                  bank account. Your MyWORLD account includes:
                </p>
                <h4 className="color-brand-1 mt-20">Power Pocket</h4>
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
                      Connect a separate account to your Primary Account
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
                      Link a separate card to your Power Pocket Account
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
                      Each account has its own unique account number
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
                      Allow a Pocket user to bank using the Power Pocket card
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
                      It&apos;s designed for sharing with friends and family
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
                      Up to 10 members can view the account
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
                      You control who can use the Power Pocket and how it&apos;s
                      used
                    </li>
                  </ul>
                </div>
                <div className="mt-20 text-start">
                  <Link className="btn btn-brand-1 hover-up " href="#">
                    OPEN NOW
                    <BsChevronRight className="right-icon"/>
                  </Link>
                </div>
                <h4 className="color-brand-1 mt-20">Savings Pocket</h4>
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
                      Separate account with a unique account number
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
                      Earn interest at South Africa’s best rates
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
                      Instant access to your funds
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
                      No card linking option available for Savings Pocket
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
                      Up to 10 members can view the account
                    </li>
                  </ul>
                </div>
                <div className="mt-20 text-start">
                  <Link className="btn btn-brand-1 hover-up " href="#">
                    OPEN NOW
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
        {/* faq */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <h1 className="color-brand-1 mt-15 mb-20 text-center">
                  Link innovative pockets to your MyWORLD account
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
                  Discovering Notice Deposits
                </h1>
                <p className="font-md color-brand-1 mtb-10">
                  Start earning interest from day one by opening a Notice
                  Deposit Account with African Bank. We would like to let you
                  know that the interest rates on a Notice Deposit are aligned
                  with prevailing market conditions.
                </p>
                <h4 className="color-brand-1 mtb-10">Notice Period</h4>
                <p className="font-md color-brand-1">
                  Select your preferred notice period from 7, 32, or 90 days.
                </p>
                <h4 className="color-brand-1 mtb-10">Additional Deposits</h4>
                <p className="font-md color-brand-1">
                  Set up a debit order or make extra deposits from as little as
                  R100 to boost your investment.
                </p>
                <h4 className="color-brand-1 mtb-10">Easy Notice</h4>
                <p className="font-md color-brand-1">
                  Download the Banking App or register for Online Banking.
                  Opening your account takes less than 3 minutes.
                </p>
                <h4 className="color-brand-1 mtb-10">How to Apply?</h4>
                <p className="font-md color-brand-1">
                  Set up a debit order or make extra deposits from as little as
                  R100 to boost your investment.
                </p>
                <h4 className="color-brand-1 mtb-10">
                  Flexible Interest Rates
                </h4>
                <p className="font-md color-brand-1">
                  Interest rates may vary to remain in line with prevailing
                  market conditions.
                </p>
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
        {/* discover the right credit card */}
        <section className="section-800 bg-grey-60">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h1 className="color-brand-1 mt-15 mb-20">Ways to bank</h1>
                <p className="font-md color-brand-1">
                  Experience seamless and simplified banking in just a few easy
                  steps, available 24/7 anywhere, anytime through Online
                  Banking, our Banking App, or Cellphone Banking on *120*225#.
                </p>
                <h4 className="color-brand-1 mtb-10">Online Banking</h4>
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
                      Register now to access Online Banking and manage your
                      accounts.
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
                      Simply log in after registration to use Online Banking.
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
                      Make sure you have an email address, cellphone number, and
                      ID for registration.
                    </li>
                  </ul>
                </div>
                <h4 className="color-brand-1 mtb-10">Cellphone Banking</h4>
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
                      Register for Cellphone Banking with your consultant
                      in-branch or via Online Banking.
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
                      Dial *120*225# to accept the terms and start banking from
                      your phone.
                    </li>
                  </ul>
                </div>
                <h4 className="color-brand-1 mtb-10">WhatsApp Banking</h4>
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
                      You can save 0600 123 716 as a WhatsApp contact for
                      African Bank.
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
                      Send a message with &quot;Hi&quot; to initiate the setup
                      process.
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
                      Remember, you need to register online to use WhatsApp
                      Banking feature.
                    </li>
                  </ul>
                </div>
                <div className="mt-10 text-start">
                  <Link className="btn btn-brand-1 hover-up " href="#">
                    register now
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
      </Layout>
    </>
  );
};


export default Bank;