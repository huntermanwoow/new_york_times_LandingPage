// @/components/DummyPage.js
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function PriceCard({ icon, price, description }) {
    return (
        <div className='first:mr-[5px] bg-dark-green p-[16px] w-full md:w-[296px] rounded-[12px] text-[#CDAC8C]'>
            <div className="p-[10px] w-[40px] rounded-[8.35px] bg-[#D2CBBB1A]">
                <Link href='/' target='_blank'>
                    <Image
                        src={icon}
                        alt="chart breakout square svg"
                        width={20}
                        height={20}
                    />
                </Link>
            </div>
            <div className="text-[23px] font-[700] font-[Outfit] text-dark-white mt-4">{price}</div>
            <div className="text-[15px] font-[400] font-[Outfit] text-dark-white mt-[7px]">{description}</div>
        </div>
    )
}
