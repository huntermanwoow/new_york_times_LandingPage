import React from 'react';

export default function GeoblockingArticle() {
  return (
    <>
      <div className="md:mt-20 mt-12 rounded-3xl bg-[#FFFFFF90] p-2 md:p-8">
        <div className="text-center md:text-[50px] text-[30px] font-[400] font-[Chomsky] text-[#2C231A]">
          GeoBlocking
        </div>
        <div className="md:mt-0 md:text-[20px] font-[600] font-[Inter] text-[#2C231A]">
          <p className="mb-6">
            Unfortunately, some countries take a hostile stance against inovation and new technologies. Here is a list of hostile regimes that prevent its citizens from purchasing cryptocurrencies. Not all, but most.
          </p>
          <p className="mb-6">
            Here is our list of countries that prohibited, and we have geoblocked for legal reasons:
          </p>
          <ul className="mb-6">
            <li>The United States,</li>
            <li>North Korea,</li>
            <li>Cuba,</li>
            <li>Sudan,</li>
            <li>Syria,</li>
            <li>Iran,</li>
            <li>Crimea,</li>
            <li>Mainland China,</li>
            <li>Indonesia,</li>
            <li>Singapore,</li>
            <li>Venezuela,</li>
            <li>Canada</li>
          </ul>
          <p className="mb-6">
            Please call your country&apos;s securities agency, and political leaders to help pave the way to change.
          </p>
          <div>
            <p className="mb-6">
              The legal mumbo-jumbo:
            </p>
            <p className="mb-6">
              You must ensure that you are not a resident of Prohibited Countries. Currently, we do not provide Services, nor do we accept registration of Users or trade applications, in the following countries: North Korea, Cuba, Sudan, Syria, Iran, Crimea, Mainland China, Indonesia, Singapore, Venezuela, the United States, and Canada (altogether referred to as &apos;Prohibited Countries&apos;). For the sake of clarification, the Prohibited Countries list is non-exclusive and is subject to change, at any time and from time to time, we in our absolute sole discretion may decide, taking into account legal and compliance considerations. You understand and acknowledge that if it is determined that you have given false representations of your location or place of residence, we reserve the right to take any appropriate actions in compliance with applicable laws and regulations, including termination of any Account immediately and liquidating any open positions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
