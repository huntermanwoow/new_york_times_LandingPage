// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { SlHome } from 'react-icons/sl'
import { BsInfoSquare, BsEnvelopeAt } from 'react-icons/bs'
import { FaTshirt, FaRedhat } from 'react-icons/fa'

import logo from '@/assets/imgs/logo.svg'

export default function Sidebar({ show, setter }) {
    const router = useRouter();

    // Define our base class
    const className = "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

    // Clickable menu items
    const MenuItem = ({ icon, name, route }) => {
        // Highlight menu item based on currently displayed route
        const colorClass = router.pathname === route ? "text-white" : "text-white/50 hover:text-white";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
                className={`flex gap-1 [&>*]:my-auto text-md px-2 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
            >
                <div>{name}</div>
            </Link>
        )
    }

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
            onClick={() => {
                setter(oldVal => !oldVal);
            }}
        />
    )

    return (
        <>
            <div className={`${className}${appendClass}`}>
                <div className="flex flex-col">
                    <MenuItem
                        name="Menu"
                        route="/"
                    />
                    <MenuItem
                        name="RealAssetDAO"
                        route="/RealAssetDAO"
                    />
                    <MenuItem
                        name="Reserves"
                        route="/Reserves"
                    />
                    <MenuItem
                        name="Yield Bearing Schedule"
                        route="/Yield Bearing Schedule"
                    />
                    <MenuItem
                        name="$1913 Price History"
                        route="/$1913 Price History"
                    />
                    <MenuItem
                        name="Yield Bearing Schedule"
                        route="/Yield Bearing Schedule"
                    />
                    <MenuItem
                        name="Twitter"
                        route="/Twitter"
                    />
                    <MenuItem
                        name="YouTube"
                        route="/YouTube"
                    />
                    <MenuItem
                        name="TikTok"
                        route="/TikTok"
                    />
                    <MenuItem
                        name="Geoblocking"
                        route="/Geoblocking"
                    />
                    <MenuItem
                        name="Learning"
                        route="/Learning"
                    />
                    <MenuItem
                        name="MMMOG"
                        route="/MMMOG"
                    />
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}
