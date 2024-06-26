import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';
import PageHead from './PageHead';
import Sidebar from './Sidebar';
import Breadcrumbs from '../elements/Breadcrumbs';
import Banner from '../elements/Banner'



const Layout = ({ children }) => {
    const [openClass, setOpenClass] = useState('');


    const { asPath } = useRouter();
    // const cleanPath = asPath.split('#')[0].split('?')[0];
    const cleanPath = asPath.trim();

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    }

    

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }
    return (
        <>

<div className="d-flex flex-column">
            <PageHead />
            <div className="body-overlay-1" onClick={handleRemove} />
            <Header handleOpen={handleOpen} handleRemove={handleRemove} openClass={openClass} addClass="header-home7" />
            <div>
                <br/>
                <br/>
                {cleanPath === "/" ? <Banner /> : <Breadcrumbs />}
            </div>
            <Sidebar openClass={openClass} />
            <main className="main">
                {children}
            </main>
            <Footer />
</div>
           
        </>
    );
};

export default Layout;