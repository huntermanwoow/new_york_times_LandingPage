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
                    <div className='flex flex-col flex-grow w-screen md:w-full'>
                        <div className="bg-gray-800 text-white text-center p-1 z-5">
                            12/24/1913
                        </div>
                        <div className="flex flex-col overflow-auto flex-grow w-screen md:w-full h-[calc(100vh-216px)] relative">
                            <div
                                className={`flex fixed -z-50 opacity-[0.7] w-[100%] h-[100%] bg-newspaper bg-repeat-round`}
                            >
                            </div>
                            <div className="bg-[#CDAC8C75] flex-grow relative">
                                <div className="mt-16">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}