// @/components/Layout/index.js
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
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
                <div className="text-dark-white h-36px">
                    <Link className="flex items-center" href="/">
                        <span>
                            <Image src={logo} alt="logo" className='w-36px' />
                        </span>
                        <span className="hidden md:block text-[18px] font-[Outfit] text-dark-white pl-[6px]">1913$</span>
                    </Link>
                </div>
                <Link href="https://1913.app/" target="_blank">
                    <div className="rounded-48px flex font-[Outfit] bg-white px-3 py-2 items-center justify-center text-dark-green font-bold h-35px">
                        <div>
                            <Image src={vectorImage} alt="sub-logo"/>
                        </div>
                        <div className='hidden md:block pl-2'>
                            Launch App
                        </div>
                    </div>
                </Link>
            </div>
            
        </>
    )
}