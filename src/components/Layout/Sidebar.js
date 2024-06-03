// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Sidebar({ show, setter }) {
    const router = useRouter();

    // Define our base class
    const className = "bg-dark-green w-[250px] md:w-[327px] md:rounded-[20px] md:h-[553px] transition-[margin-left] ease-in-out duration-500 p-4 fixed sattic md:relative top-0 bottom-0 left-0 z-50 md:z-30";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

    // Clickable menu items
    const MenuItem = ({ icon, name, route }) => {
        // Highlight menu item based on currently displayed route
        const colorClass = router.pathname === route ? "text-dark-white bg-[#524131]" : "text-[#DABC9ECC] hover:text-dark-white hover:bg-[#524131]";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
                className={`flex gap-[10px] rounded-[12px] [&>*]:my-auto text-md px-4 py-[7px] font-[Inter] text-[600] text-[22px] text-[#DABC9ECC] hover:text-dark-white hover:bg-[#524131]`}
                target='_blank'
            >
                <div>{name}</div>
            </Link>
        )
    }

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-40`}
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
                        name="RealAssetDAO"
                        route="https://realassetdao.com/"
                    />
                    <MenuItem
                        name="Reserves"
                        route="/"
                    />
                    <MenuItem
                        name="Yield Bearing Schedule"
                        route="/"
                    />
                    <MenuItem
                        name="$1913 Price History"
                        route="/"
                    />
                    <MenuItem
                        name="Yield Bearing Schedule"
                        route="/"
                    />
                    <MenuItem
                        name="Twitter"
                        route="https://twitter.com/RealExDAO"
                    />
                    <MenuItem
                        name="YouTube"
                        route="/"
                    />
                    <MenuItem
                        name="TikTok"
                        route="/"
                    />
                    <MenuItem
                        name="Geoblocking"
                        route="/"
                    />
                    <MenuItem
                        name="Learning"
                        route="/"
                    />
                    <MenuItem
                        name="MMMOG"
                        route="/"
                    />
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}
