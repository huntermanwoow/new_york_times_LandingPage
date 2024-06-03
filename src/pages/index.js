// @/pages/index.js
import React, { useState } from 'react'
import Layout from '../components/Layout'
import Sidebar from '@/components/Layout/Sidebar';
import PriceCard from '@/components/PriceCard';
import Image from 'next/image';
import ArticleImage from '@/assets/imgs/article.jpg';
import DateImage from '@/assets/imgs/present-date.jpg';
import ChartIcon from '@/assets/icons/chart-breakout-square.svg'
import CommandIcon from '@/assets/icons/command.svg'
import headerImage from '@/assets/imgs/1.jpg';

export default function HomePage() {

	const [showMenu, setShowMenu] = useState(false);
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
					<div className="absolute bottom-[-1.1rem] md:bottom-[12px] flex w-[100%] h-[3rem] tall:h-[3.5rem]">
						<Image className="rounded-[20px] border-[#473728] border-[4.89px] m-auto h-[100%] w-auto" src={DateImage} alt='Present Date' />
					</div>
				</div>
				<div className="-mt-[1px] bg-newspaper bg-repeat-round px-4">
					<div className="max-w-[1376px] m-auto pb-4 pt-4">

						{/* <div className="bg-dark-green p-4 rounded-xl text-center">
							<div className="md:text-[92.4px] text-[48px] font-[400] font-[Chomsky] text-dark-white">The New York Times</div>
							<div className="text-[24px] font-[400] font-[Chomsky] text-dark-white">12/24/1913</div>
						</div> */}
						<div className="flex flex-wrap justify-center tall:justify-between">
							
							<div className="flex flex-grow flex-wrap justify-around tall:justify-between border-b pb-[20px] border-b-[#6d543d] border-b-[2px] tall:border-none">
								<Sidebar show={showMenu} setter={setShowMenu} />
								<div className='bg-[#6d543d] md:w-[2px] hidden large:block'></div>
								<div className="w-full min-w-[350px] md:w-[612px] mt-4 large:mt-0">
									<div>
										<iframe className="w-full h-[320px] md:h-[384px] rounded-[20px]" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" allowFullscreen></iframe>
									</div>
									<div className="flex mt-4 justify-between">
										<PriceCard icon={ChartIcon.src} price={'$31.55'} description={'Guranteed floor price'} />
										<PriceCard icon={CommandIcon.src} price={'$31332.55'} description={'Reserved money'} />
									</div>
								</div>
							</div>
							<div className='bg-[#6d543d] w-[2px] h-[553px] ml-2 hidden tall:block'></div>
							<div className="mt-4 tall:ml-2 tall:mt-0">
								<Image className="rounded-[20px] border-[#473728] border-[4.89px]" src={ArticleImage} alt='Article Image' />
							</div>
						</div>
						<div className="md:mt-20 mt-12 rounded-3xl bg-[#FFFFFF60] md:p-2">
							<div className="text-center md:text-[92.4px] text-[60.4px] font-[400] font-[Chomsky] text-[#2C231A]">
								Heading
							</div>
							<div className="text-center md:mt-0 md:text-[26px] font-[400] font-[Chomsky] text-[#2C231A]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
