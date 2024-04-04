import Head from 'next/head';
// import "swiper/css";
// import "swiper/css/navigation";
import '../public/assets/css/style.css';
import "react-modal-video/css/modal-video.css"
import { useEffect, useState } from "react";
import Preloader from '../components/elements/Preloader';
import Script from 'next/script'; 

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
    }, []);
    return (
        <>
        <Script
                src="https://karabo-chatbot.s3.eu-west-1.amazonaws.com/script/mvskarabo.js"
                defer
        />
            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <Preloader />
            )}
        </>
    )
}

export default MyApp
