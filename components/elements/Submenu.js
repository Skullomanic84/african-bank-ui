import React from 'react';
import SwiperCore, { Autoplay, Navigation,Pagination } from "swiper";
import Link from "next/link";

SwiperCore.use([Autoplay, Navigation,Pagination]);
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
              <Link className="btn btn-brand-banner btn-brand-banner-business-banking " href="/">
                <span>PLEASE SELECT</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 hero-col-2 icon-section">
          <div className="box-button">
            {" "}
            <Link className="btn-app" href="/bank">
              {" "}
              <img
                src="assets/imgs/new-site/Component_140.svg"
                alt="iori"
              />
              <span className="btn-title">Bank</span>
            </Link>
            <Link className="btn-app" href="/borrow">
              {" "}
              <img
                src="assets/imgs/new-site/snicon2.svg"
                alt="iori"
                className="snicon"
              />
              <span className="btn-title">Borrow</span>
            </Link>
            <Link className="btn-app" href="/invest">
              {" "}
              <img
                src="assets/imgs/new-site/Mask Group 8.svg"
                alt="iori"
              />
              <span className="btn-title">Invest</span>
            </Link>
            {/* <Link className="btn-app" href="/save">
              {" "}
              <img
                src="assets/imgs/new-site/Mask Group 9.svg"
                alt="iori"
              />
              <span className="btn-title">Save</span>
            </Link> */}
            <Link className="btn-app" href="/insure">
              {" "}
              <img
                src="assets/imgs/new-site/Mask Group 10.svg"
                alt="iori"
              />
              <span className="btn-title">Insure</span>
            </Link>
            <Link className="btn-app" href="/">
              {" "}
              <img src="assets/imgs/new-site/snicon6.svg" alt="iori" />
              <span className="btn-title">Rewards</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Submenu