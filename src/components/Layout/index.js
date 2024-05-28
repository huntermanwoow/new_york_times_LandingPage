// @/components/Layout/index.js
import React, { useState } from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar';
import MenuBarMobile from './MenuBarMobile';
import Header from './Header';

export default function Layout({ pageTitle, children }) {

    // Mobile sidebar visibility state
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <div className="min-h-screen">
                <Header setter={setShowSidebar} />
                <div className="flex">
                    {/* <MenuBarMobile setter={setShowSidebar} /> */}
                    <Sidebar show={showSidebar} setter={setShowSidebar} />
                    <div className="flex flex-col flex-grow w-screen md:w-full max-h-[calc(100vh-64px)] overflow-auto">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}