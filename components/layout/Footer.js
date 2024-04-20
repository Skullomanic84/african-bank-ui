/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaBlog, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import Image from 'next/image';

const Footer = () => {
    return (
      <>
              {/* call to action */}
              <section className="section bg-grey-63">
          <div className="container">
            <div className="box-newsletter">
              <div className="row text-center">
                <div className="col-lg-12 col-md-12">
                  <span className="font-lg color-brand-1">
                    1 Number to call
                  </span>
                  <h3 className="color-brand-1 mb-15 mt-5">0861 123 456</h3>
                  <p className="font-xs my-3 color-grey-500">
                    MyWorld Terms and Conditions | Website Terms and Conditions
                    | Registration Terms and Conditions
                  </p>
                  <p className="font-xs color-grey-500">
                    *Banking fees are based on Solidarity&apos;s methodology of
                    comparing defined baskets of transactions(12,17,25 and 30
                    transactions) across 6 biggest entry level bank accounts. In
                    this way, an average industry price was obtained.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-1">
            <div className="container">
              <div className="row">
                <div className="footer-item col-lg-3 col-md-3 mb-30">
                  <h5 className="mb-10">Legal</h5>
                  <ul className="menu-footer">
                    <li>
                      <Link href="#">Legal documents</Link>
                    </li>
                    <li>
                      <Link href="#">BEE Certificate</Link>
                    </li>
                    <li>
                      <Link href="#">Website terms &amp; conditions</Link>
                    </li>
                    <li>
                      <Link href="#">Disclaimer, privacy and security</Link>
                    </li>
                    <li>
                      <Link href="#">PAIA Manual</Link>
                    </li>
                    <li>
                      <Link href="#">Language Policy</Link>
                    </li>
                    <li>
                      <Link href="#">Regulations and compliance</Link>
                    </li>
                  </ul>
                </div>

                <div className="footer-item col-lg-3 col-md-3 mb-30">
                  <h5 className="mb-10">My African Bank</h5>
                  <ul className="menu-footer">
                    <li>
                      <Link href="/about">Connect Online</Link>
                    </li>
                    <li>
                      <Link href="/team">Easy ways to Pay</Link>
                    </li>
                    <li>
                      <Link href="/career">Partner Services Login</Link>
                    </li>
                    <li>
                      <Link href="#">Partner Services Registration</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-item col-lg-3 col-md-3 mb-30">
                  <h5 className="mb-10">Complaints and Compliments</h5>
                  <ul className="menu-footer">
                    <li>
                      <Link href="#">Call us on: 0861 111 0111</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-item col-lg-3 col-md-3 mb-30">
                  <h5 className="mb-10">Ethics and Fraud Hotline</h5>
                  <ul className="menu-footer">
                    <li>
                      <Link href="#">Call us on: 0800 633 633</Link>
                    </li>
                    <li>
                      <Link href="#">Fax us on: 0864 944 107</Link>
                    </li>
                    <li>
                      <Link href="#">Email us: africanbank@tip-offs.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-2">
            <div className="container">
              <div className="footer-bottom">
                <div className="row justify-content-between">
                  <div className="col-lg-2 col-md-12 text-center text-lg-start">
                    <ul className="menu-bottom">
                      <li>
                        <Link className="font-sm" href="/">
                          {/* <img
                            alt="African Bank"
                            src="assets/imgs/new-site/Logo.png"
                          /> */}
                          
                                    <Image
                                        alt="African Bank"
                                        src="/assets/imgs/new-site/Logo.png"
                                        width={500}
                  height={300}
                                       layout="responsive" // This keeps the aspect ratio of the image
                                     />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <p className="copyright">
                      © Copyright 2021 African Bank. An authorized financial
                      services and credit provider Reg No. 2014/176899/06
                      (NCRCP7638)
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-12 text-lg-end">
                    <div className="social-content">
                      <Link className="icon-socials" href="#">
                      <FaFacebookF className='socials-icons'/>
                      </Link>
                      <Link className="icon-socials" href="#">
                      <FaBlog className='socials-icons'/>
                      </Link>
                      <Link className="icon-socials" href="#">
                      <FaXTwitter className='socials-icons'/>
                      </Link>
                      <Link className="icon-socials" href="#">
                      <FaInstagram className='socials-icons'/>
                      </Link>
                      <Link className="icon-socials" href="#">
                      <FaLinkedinIn className='socials-icons'/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
};

export default Footer;