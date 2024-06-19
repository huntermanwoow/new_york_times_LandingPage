// @/components/Layout/index.js
import React, { useRef } from 'react'
import Head from 'next/head'
import Header from './Header';
import ScrollUpButton from '../Common/ScrollUpButton';

export default function Layout({ pageTitle, children, setShowMenu }) {
    const contentRef = useRef(null);

    return (
        <>
            <Head>
                <link href="https://fonts.cdnfonts.com/css/chomsky" rel="stylesheet"></link>
                <title>{pageTitle}</title>
            </Head>
            <div className="min-h-screen">
                <Header setter={setShowMenu} />
                <div className="flex">
                    <div className='w-screen md:w-full'>
                        <div ref={contentRef} className="flex flex-col overflow-auto flex-grow w-screen md:w-full h-[calc(100vh-68px)]">
                            {children}
                        </div>
                        <ScrollUpButton contentRef={contentRef} />
                    </div>
                </div>
            </div>
        </>
    )
}