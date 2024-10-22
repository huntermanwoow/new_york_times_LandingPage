// @/pages/index.js
import React, { useState, useRef } from 'react'
import Layout from '../components/Layout'
import Sidebar from '@/components/Layout/Sidebar';
import PriceCard from '@/components/PriceCard';
import Image from 'next/image';
import ArticleImage from '@/assets/imgs/article.jpg';
import DateImage from '@/assets/imgs/present-date.jpg';
import headerImage from '@/assets/imgs/1.jpg';
import VideoCard from '@/components/Common/VideoCard';
import Article from '@/components/Common/Article';
import ReservesArticle from '@/components/Common/ReservesArticle';
import PricingHistoryArticle from '@/components/Common/PricingHistoryArticle';
import YieldBearingArticle from '@/components/Common/YieldBearingArticle';
import GeoblockingArticle from '@/components/Common/GeoblockingArticle';

export default function HomePage () {

	const reservesSectionRef = useRef(null);
	const yieldSectionRef = useRef(null);
  	const pricingSectionRef = useRef(null);
  	const geoblockingSectionRef = useRef(null);

	const [showMenu, setShowMenu] = useState(false);
	const [content, setContent] = useState('youtube');

	const scrollToSection = (ref) => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

	return (
		<Layout
			pageTitle={'1913$'}
			setShowMenu={setShowMenu}
		>
			<div>
				<div className="sticky top-0 z-30 md:z-40 w-full">
					<div>
						<Image className="w-full" src={headerImage} alt="header-img" />
					</div>
					<div className="absolute bottom-[-1.1rem] md:bottom-[8px] flex w-[100%] h-[3rem] tall:h-[3.5rem]">
						<Image className="rounded-[20px] border-[#473728] border-[4.89px] m-auto h-[100%] w-auto" src={DateImage} alt='Present Date' />
					</div>
				</div>
				<div className="-mt-[1px] bg-newspaper bg-repeat-round px-4">
					<div className="max-w-[1376px] m-auto pb-4 pt-4">
						<div className="flex flex-wrap justify-center tall:justify-between">
							
							<div className="flex flex-grow flex-wrap justify-around tall:justify-between border-b pb-[20px] border-b-[#6d543d] border-b-[2px] tall:border-none">
								<Sidebar
									show={showMenu}
									setter={setShowMenu}
									scrollToSection={scrollToSection}
									reservesSectionRef={reservesSectionRef}
									yieldSectionRef={yieldSectionRef}
									pricingSectionRef={pricingSectionRef}
									geoblockingSectionRef={geoblockingSectionRef}
								/>
								<div className='bg-[#6d543d] md:w-[2px] hidden large:block'></div>
								<div className="w-full min-w-[350px] md:w-[612px] mt-4 large:mt-0">
									{content == 'youtube' && <VideoCard />}
								</div>
							</div>
							<div className='bg-[#6d543d] w-[2px] h-[553px] ml-2 hidden tall:block'></div>
							<div className="mt-4 tall:ml-2 tall:mt-0">
								<Image className="rounded-[20px] border-[#473728] border-[4.89px]" src={ArticleImage} alt='Article Image' />
							</div>
						
							<Article />
							<div ref={reservesSectionRef} className="scroll-mt-[4rem] md:scroll-mt-[6rem] tall:scroll-mt-[8.5rem]">
								<ReservesArticle />
							</div>
							<div ref={yieldSectionRef} className="scroll-mt-[4rem] md:scroll-mt-[6rem] tall:scroll-mt-[8.5rem]">
								<YieldBearingArticle />
							</div>
							<div ref={pricingSectionRef} className="scroll-mt-[4rem] md:scroll-mt-[6rem] tall:scroll-mt-[8.5rem]">
								<PricingHistoryArticle />
							</div>
							<div ref={geoblockingSectionRef} className="scroll-mt-[4rem] md:scroll-mt-[6rem] tall:scroll-mt-[8.5rem]">
								<GeoblockingArticle />
							</div>
							
						</div>
					</div>
				</div>
			</div>
			
		</Layout>
	)
}
