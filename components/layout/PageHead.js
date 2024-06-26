import React from 'react';
import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "African bank"}

                </title>

            </Head>
        </>
    );
};

export default PageHead;