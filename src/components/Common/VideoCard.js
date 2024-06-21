import React from 'react';
import PriceCard from '../PriceCard';
import ChartIcon from '@/assets/icons/chart-breakout-square.svg'
import CommandIcon from '@/assets/icons/command.svg'

export default function VideoCard () {
    return (
        <>
            <div>
                <iframe className="w-full h-[320px] md:h-[384px] rounded-[20px]" src="https://www.youtube.com/@RAD1913" allowFullScreen></iframe>
            </div>
            <div className="flex mt-4 justify-between">
                <PriceCard icon={ChartIcon.src} price={'$31.72'} description={'Guranteed floor price'} />
                <PriceCard icon={CommandIcon.src} price={'$31332.55'} description={'Reserved money'} />
            </div>
        </>
    )
}