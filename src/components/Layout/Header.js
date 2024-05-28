// @/components/Layout/index.js
import React, { useState } from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar';
import MenuBarMobile from './MenuBarMobile';
import { FiMenu as Icon } from 'react-icons/fi';
import Link from 'next/link'

import logo from '@/assets/imgs/logo.svg'

export default function Header({ setter }) {

    return (
        <>
            <div className="h-16 flex h-t justify-between items-center bg-dark-green px-4 md:px-8">
                <div className="md:hidden z-20 h-[60px] flex [&>*]:my-auto">
                    <button
                        className="text-4xl flex text-white"
                        onClick={() => {
                            setter(oldVal => !oldVal);
                        }}
                    >
                        <Icon />
                    </button>
                </div>
                <div className="text-dark-white flex items-center w-100px h-36px">
                    <span>
                        <img src="images/logo.png" className='w-36px' />
                    </span>
                    <span className="text-base pl-1">1913$</span>
                </div>
                <div className="rounded-48px flex bg-white px-3 py-2 items-center text-black font-bold w-147px h-35px">
                    <div>
                        <img src='images/Vector.png' />
                    </div>
                    <div className='pl-1'>
                        Launch App
                    </div>
                </div>
            </div>
            <div className="h-24 flex h-b justify-center items-center bg-dark-seashell">
                <img src='images/header_image.png' className='w-[100%] h-[100%]' />
            </div>
        </>
    )
}