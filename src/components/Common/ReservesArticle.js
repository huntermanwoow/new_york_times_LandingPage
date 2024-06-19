import React from 'react';
import Link from 'next/link';

export default function ReservesArticle() {
    return (
        <>
            <div className="md:mt-20 mt-12 rounded-3xl bg-[#FFFFFF90] p-2 md:p-8" id="reserve-section">
            <div className="text-center md:text-[50px] text-[30px] font-[400] font-[Chomsky] text-[#2C231A]">
                    1913.money | 1913.app | 1913$ Token
                </div>
                <div className="md:mt-0 md:text-[20px] font-[600] font-[Inter] text-[#2C231A]">
                    <p className="mb-6"><Link className="text-blue-600" href="https://1913.money">1913.money</Link> is our home but we have a few other places that reside within the ecosystem. We are committed to the tokenization and transparency of our reserves. We will be posting our reserves here for all to see. Anyone, Anytime, Anywhere will be able to audit our reserves so that they can make their own informed decisions about the stability of our stable coin and the validity of it&apos;s pricing.</p>

                    <p className="mb-6">Some of our wallet addresses may not be integrated at the moment, but as our reserves grow they will get deposited. Here is where our reserves will reside:</p>
                    <ul className="mb-6 list-disc pl-8">
                        <li>reserves.dao</li>
                        <li>1913dollar.blockchain</li>
                        <li>1913dollar.crypto</li>
                        <li>1913dollar.dao</li>
                        <li>1913dollar.eth</li>
                        <li>1913dollar.nft</li>
                        <li>1913dollar.polygon</li>
                        <li>1913dollar.x</li>
                    </ul>

                    <p className="mb-6">Smart Contracts and Github Repositories:</p>
                    <p className="mb-6">The token smart contract wallet: <Link className="text-blue-600" href="https://1913$.eth">1913$.eth</Link></p>
                    <p className="mb-6">Our 1913$ coin: <Link className="text-blue-600" href="https://sepolia.etherscan.io/address/0xc209ec78F549b9B6E25cDB06b594e2D7e60cc812">0xc209ec78F549b9B6E25cDB06b594e2D7e60cc812</Link></p>
                    <p className="mb-6">The token swap smart contract: <Link className="text-blue-600" href="https://sepolia.etherscan.io/address/0xb9710cc7BFc9d7926EA41c5450a5998911698591#code">0xb9710cc7BFc9d7926EA41c5450a5998911698591</Link></p>
                    <p className="mb-6">Our DeFi smart contract on Github: <Link className="text-blue-600" href="https://github.com/RealAssetDAO/">https://github.com/RealAssetDAO/</Link></p>
                </div>
            </div>
        </>
    )
}
