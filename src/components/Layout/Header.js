// @/components/Layout/index.js
import React, { useState } from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar';
import MenuBarMobile from './MenuBarMobile';
import { FiMenu as Icon } from 'react-icons/fi';
import Link from 'next/link'

import logo from '@/assets/imgs/logo.svg'

export default function Header ({ setter }) {

    return (
        <div className="h-16 flex justify-between bg-dark-green px-4 md:px-8">
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
            <div className="text-dark-white flex items-center">
                <span className="text-base">1913$</span>
            </div>
            <div className="text-dark-white flex items-center">Launch App</div>
        </div>
    )
}