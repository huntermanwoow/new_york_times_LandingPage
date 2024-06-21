// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Sidebar({ show, setter, reservesSectionRef, yieldSectionRef, pricingSectionRef, geoblockingSectionRef, scrollToSection }) {
    const router = useRouter();

    // Define our base class
    const className = "bg-dark-green w-[250px] md:w-[327px] md:rounded-[20px] md:h-[553px] transition-[margin-left] ease-in-out duration-500 p-4 fixed sattic md:relative top-0 bottom-0 left-0 z-50 md:z-30";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

    // Clickable menu items
    const MenuItem = ({ icon, name, route, scrollTo }) => {
        // Highlight menu item based on currently displayed route
        const colorClass = router.pathname === route ? "text-dark-white bg-[#524131]" : "text-[#DABC9ECC] hover:text-dark-white hover:bg-[#524131]";

        if (route)
            return (
                <Link
                    href={route}
                    onClick={() => {
                        setter(oldVal => !oldVal);
                    }}
                    className={`transition duration-300 ease-in-out flex gap-[10px] rounded-[12px] [&>*]:my-auto text-md px-4 py-[7px] font-[Inter] text-[600] text-[22px] text-[#DABC9ECC] hover:text-dark-white hover:bg-[#524131]`}
                    target="_blank"
                >
                    {name}
                </Link>
            )
        else
            return (
                <div
                    onClick={() => {
                        setter(oldVal => !oldVal);
                        scrollTo()
                    }}
                    className={`hover:cursor-pointer transition duration-300 ease-in-out flex gap-[10px] rounded-[12px] [&>*]:my-auto text-md px-4 py-[7px] font-[Inter] text-[600] text-[22px] text-[#DABC9ECC] hover:text-dark-white hover:bg-[#524131]`}
                >
                    {name}
                </div>
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
                        scrollTo={() => scrollToSection(reservesSectionRef)}
                    />
                    <MenuItem
                        name="Yield Bearing Schedule"
                        scrollTo={() => scrollToSection(yieldSectionRef)}
                    />
                    <MenuItem
                        name="$1913 Price History"
                        scrollTo={() => scrollToSection(pricingSectionRef)}
                    />
                    <MenuItem
                        name="Twitter"
                        route="https://x.com/RealAssetDAO"
                    />
                    <MenuItem
                        name="YouTube"
                        route="https://www.youtube.com/@RAD1913"
                    />
                    <MenuItem
                        name="TikTok"
                        route="https://www.tiktok.com/@realassetdao"
                    />
                    <MenuItem
                        name="Geoblocking"
                        scrollTo={() => scrollToSection(geoblockingSectionRef)}
                    />
                    <MenuItem
                        name="Learning"
                        route="https://realassetss-organization.gitbook.io/crypto-research/"
                    />
                    <MenuItem
                        name="M0n0p0ly.com"
                        route="https://m0n0p0ly.com/"
                    />
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}
