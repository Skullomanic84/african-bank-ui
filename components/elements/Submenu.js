import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import Image from 'next/image';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Submenu = () => {
  return (
    <div className="sub-menu">
      <div className="container box-sub">
        <div className="row justify-content-center">
          <div className="col-lg-6 hero-col-1 text-center">
            <div className="modal-pop">
              <h5 className="modal-title">
                I Would Like
                <br /> To Apply For…
              </h5>
              <div className="d-none d-sm-inline-block modal-btn">
                <Link href="/" passHref>
                  <a className="btn btn-brand-1 newBtn">
                    <span>PLEASE SELECT</span>
                    <BsChevronRight className="right-icon"/>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 hero-col-2 icon-section">
            <div className="box-button">
              <Link href="/bank" passHref>
                <a className="btn-app">
                  <Image
                    src="/assets/imgs/new-site/Component_140.svg"
                    alt="iori"
                    width={100}
                    height={100}
                    layout="responsive"
                 
                  />
                  <span className="btn-title">Bank</span>
                </a>
              </Link>
              <Link href="/borrow" passHref>
                <a className="btn-app">
                  <Image
                    src="/assets/imgs/new-site/snicon2.svg"
                    alt="iori"
                    className="snicon"
                    width={100}
                    height={100}
                    layout="responsive"
       
                  />
                  <span className="btn-title">Borrow</span>
                </a>
              </Link>
              <Link href="/invest" passHref>
                <a className="btn-app">
                  <Image
                    src="/assets/imgs/new-site/Mask Group 8.svg"
                    alt="iori"
                    width={100}
                    height={100}
                    layout="responsive"
                 
                  />
                  <span className="btn-title">Invest</span>
                </a>
              </Link>
              <Link href="/insure" passHref>
                <a className="btn-app">
                  <Image
                    src="/assets/imgs/new-site/Mask Group 10.svg"
                    alt="iori"
                    width={100}
                    height={100}
                    layout="responsive"
                 
                  />
                  <span className="btn-title">Insure</span>
                </a>
              </Link>
              <Link href="/" passHref>
                <a className="btn-app">
                  <Image
                    src="/assets/imgs/new-site/snicon6.svg"
                    alt="iori"
                    width={100}
                    height={100}
                    layout="responsive"
                   
                  />
                  <span className="btn-title">Rewards</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submenu;
