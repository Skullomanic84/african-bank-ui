/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { useRouter } from 'next/router';

const Header = ({ handleOpen, handleRemove, openClass, addClass }) => {
    const [scroll, setScroll] = useState(0)
    const [isSearchToggled, setSearchToggled] = useState(false);
    const [isLanguageToggled, setLanguageToggled] = useState(false);
    const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
    const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);
    const router = useRouter();
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
              console.log(router.pathname);
                setScroll(scrollCheck);
            }
        })
    })
    return (
      <>
        <header
          className={`${
            scroll ? "header sticky-bar stick" : "header sticky-bar"
          } ${addClass}`}
        >
          <div className="container">
            <div className='row'>
            <div className="main-header">
              <div className="header-left">
                <div className="header-logo">
                    {/* Desktop Logo */}
                  <Link className="d-flex desktop-logo" href="/">
                    <img
                      alt="African Bank"
                      src="assets/imgs/new-site/Logo.png"
                    />
                  </Link>
                    {/* mobile Logo */}
                    <Link className="d-flex mobile-logo" href="/">
                    <img
                      alt="African Bank"
                      src="assets/imgs/new-site/logo-two.png"
                    />
                  </Link>
                </div>
                <div className="header-nav">
                  <nav className="nav-main-menu d-none d-xl-block">
                    <ul className="main-menu">
                      <li className={` ${router.pathname === "/" ? "active" : ""}`}>
                        <Link className={  `forMe ${router.pathname === "/" ? "active" : ""}`} href="/">
                          For me
                        </Link>
                      </li>

                      <li>
                        <Link href="/contact">FOR MY BUSINESS</Link>
                      </li>
                    </ul>
                  </nav>
                  
                </div>

              </div>
                <div className="header-right">
                  <div className="d-inline-block box-search-top">
                    <div
                      className={
                        isSearchToggled
                          ? "form-search-top d-block"
                          : " form-search-top d-none"
                      }
                    >
                      <form action="#">
                        <input
                          className="input-search"
                          type="text"
                          placeholder="Search..."
                        />
                        <button className="btn btn-search">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </button>
                      </form>
                    </div>
                    <span
                      className="font-lg icon-list search-post"
                      onClick={toggleSearchTrueFalse}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="d-sm-inline-block pr-5">
                    <Link className="btn smbtn btn-brand-1 hover-up" href="#">
                      Open Account
                    </Link>
                  </div>
                  <div className="d-sm-inline-block mx-4">
                    <Link className="btn btn-brand-2 hover-up" href="#">
                      <span class="">
                        <FaCircleUser
                          className="user-icon"
                          style={{ color: "#FFF", opacity: "0.13" }}
                        />
                      </span>
                      LOGIN
                    </Link>
                  </div>

                 
                </div>
                <div
                    className={`burger-icon burger-icon-white ${
                      openClass && "burger-close"
                    }`}
                    onClick={() => {
                      handleOpen();
                      handleRemove();
                    }}
                  >
                    <span className="burger-icon-top" />
                    <span className="burger-icon-mid" />
                    <span className="burger-icon-bottom" />
                  </div>
            </div>
            </div>
          </div>
        </header>
      </>
    );
};

export default Header;
