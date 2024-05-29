// @/components/Layout/index.js
import React, { useState } from 'react'
import Image from 'next/image';
import { FiMenu as Icon } from 'react-icons/fi';

import logo from '@/assets/imgs/logo.png';
import vectorImage from '@/assets/imgs/vector.png';


export default function Header({ setter }) {

    return (
        <>
            <div className="h-[68px] flex h-t justify-between items-center bg-dark-green px-4 md:px-8">
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
                        <Image src={logo} alt="logo" className='w-36px' />
                    </span>
                    <span className="text-[18px] font-[Outfit] text-dark-white pl-[6px]"><a href="/">1913$</a></span>
                </div>
                <div className="rounded-48px flex font-[Outfit] bg-white px-3 py-2 items-center justify-center text-dark-green font-bold w-147px h-35px">
                    <div>
                        <Image src={vectorImage} alt="sub-logo"/>
                    </div>
                    <div className='pl-1'>
                        <a href="https://1913.app/" target="_blank">Launch App</a>
                    </div>
                </div>
            </div>
        </>
    )
}