import React from 'react';
import Link from 'next/link';

export default function Article() {
    return (
        <>
            <div className="text-center md:text-[92.4px] text-[60.4px] font-[400] font-[Chomsky] text-[#2C231A]">
                1913 Dollar Stablecoin (1913$)
            </div>
            <div className="text-center md:mt-0 md:text-[32px] mb-4 font-[400] font-[Chomsky] text-[#2C231A]">
                More stable than a stable coin
            </div>
            <div className="md:mt-0 md:text-[26px] font-[600] font-[Inter] text-[#2C231A]">
                <p className="mb-6 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">I wanted to build a better stable coin, one that is resistant to inflation. A yield-bearing, inflation-resistant stable coin that is backed by an inflation-resistant asset. My DAO hinges around real-world assets (RWA) so why not real estate? Enter the 1913 dollar (1913$). A yield-bearing stable coin that goes up in value based on CPI numbers. Our goal is to fully back this token with tokenized real estate. This way, when our token price rises, it is virtually matched by a rising reserve value in the same manner.</p>

                <p className="mb-6">1913$ is also yield-bearing. Interest and rewards will be airdropped to wallets just simply for holding 1913$ tokens much like they were staked in a DeFi platform but without the staking. Not only will hodlers of 1913$ earn against inflation but they will also earn interest based on time the tokens are held in a wallet. Transfers out of a wallet resets this time and rewards bonuses.</p>

                <p className="mb-3">To incentivize adoption of the 1913$, we plan to offer a time-based reward system for early adopters and long-term hodlers. Earn 25% in 12 months:</p>
                <ul className="mb-6 list-disc pl-8">
                    <li>1% interest monthly return for each month held +</li>
                    <li>2% interest quarterly return for each quarter held +</li>
                    <li>5% interest annually return for the first year held.</li>
                </ul>

                <p className="mb-6">The total return airdropped to wallets holding 1913$ for a full year would be 25% + the rise of inflation that it automatically increases to. This is promotional for the first year of the contract. Yearly schedules will be released and change year to year as our project grows and revenues change.</p>

                <p className="mb-6">Why did I pick the year 1913? This is the year the Federal Reserve Act was signed into law by Woodrow Wilson. The Federal Reserve System is created as the central banking system of the United States by this law. Another major law passed in 1913 that had a major impact on money was the 16th Amendment ratified to the United States Constitution. This authorizes the federal government to impose and collect income taxes on all sources of income. Ironically, born in 1913, President Nixon who decided to break up the Bretton Woods system of international financial exchange in 1971, removing the United States dollar off the gold standard. It is widely seen as a major contributor to bad money policies that have plagued our country with stagnant wages vs. growing CPI of goods, services, & corporate profits.</p>

                <p className="mb-6">In 1913, the government introduced many negative reforms and laws that have affected American lives ever since. Despite these negative factors, our 1913$ token is meant to serve as an anti-inflationary store of value that grows as inflation robs value of today&apos;s dollars. Driven by CPI data produced by the market, our token will go up in value at the same rate as inflation countering the dolla&apos;s devaluation brought on by poor monetary policy that seeks to print money at will with no regard to how it affects those that are forced to use it. In 1913 a dollar was worth $1. However, in 1971 a dollar from 1913 would be worth $4.09 based on the CPI data used to calculate inflation. In 2023, a dollar from 1913 would be worth $31.02. As you can see, the increase up to 1971 was tolerable at 309%, but the increase from 1971 to today is a whopping 636% increase and in less time. Now, if inflation slows only slightly over the next 2 years, our 1913 dollar would be worth $35.85 in 2026. If you enjoy the certainty that stable coins in crypto bring to the space, you will love the 1913 dollar even more because it is unaffected by inflation. It is truly the most stable of stable coins. We post the current price of our 1913 dollar on our website: <Link className="text-blue-600" href="https://1913.money">1913.money</Link> and we guarantee its posted price by offering redemptions at said price. The price is updated at a minimum of once per quarter. We post our POR (Proof of Reserves) at <Link className="text-blue-600" href="https://1913dollar.nft">1913dollar.nft</Link> & <Link className="text-blue-600" href="https://reserves.dao">reserves.dao</Link> as well as how much of our reserve currency is in circulation.</p>

                <p className="mb-6">To maintain the price of our 1913$ and keep it from depegging event similarly to what happened to Terra-Luna and its TerraUSD token, we intend to run a DEX at <Link className="text-blue-600" href="https://1913dollar.com">1913dollar.com</Link> where its price is fixed based on the CPI index. It can be swapped just like any other DEX but there will be a fee for buybacks similar to how Visa charges per transaction. This means that we will not charge a massive fee such as what USDT charges to cash out their tokens, but it does mean that we guarantee the price but you&apos;re welcome to swap the token on any other DEX without those fees. We will never issue out more 1913$ than what our reserves can handle. We will be completely transparent with on-chain reserves, never over-leveraging capital we don&apos;t have.</p>

                <p className="">We also have a backup plan for 1913$ price stability during market volatility. A DAO that runs buybacks with our <Link className="text-blue-600" href="https://reserves.dao">reserves.dao</Link> wallet. If say our price of $31.55 takes a dip because of market volatility down say 7% to $29.34 an algorithm would activate and start buying back utilizing the reserves in hand until said pricing improved a couple of percentage points to a range that is in line with normal market trading. This is what reserves are for right? To help market perception and keeping a stable price of an asset. In this manner there is certainty that our reserves are what they are, a sourced backup for source money. Unlike fiat which has no standard of backing.</p>


            </div>
        </>
    )
}
