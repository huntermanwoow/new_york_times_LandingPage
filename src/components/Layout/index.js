// @/components/Layout/index.js
import React, { useState } from 'react'
import Head from 'next/head'
import Header from './Header';

export default function Layout({ pageTitle, children, setShowMenu }) {

    return (
        <>
            <Head>
                <link href="https://fonts.cdnfonts.com/css/chomsky" rel="stylesheet"></link>
                <title>{pageTitle}</title>
            </Head>
            <div className="min-h-screen">
                <Header setter={setShowMenu} />
                <div className="flex">
                    <div className='flex flex-col flex-grow w-screen md:w-full'>
                        <div className="flex flex-col overflow-auto flex-grow w-screen md:w-full h-[calc(100vh-68px)] relative">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}