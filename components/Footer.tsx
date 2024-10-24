import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#191921] px-[8%] py-10 -mt-1">
      <div className="flex flex-col lg:flex-row gap-4 items-baseline">
        <Link href="/" className="mr-10 text-white font-bold text-[22px]">
          Mizuk
        </Link>

        <Link href="/" className="text-white gap-x-3 text-[16px]">
          Home
        </Link>
        <Link href="/games" className="text-white gap-x-3 text-[16px]">
          Game
        </Link>
        <Link href="#" className="text-white gap-x-3 text-[16px]">
          Shop
        </Link>
        <Link href="#" className="text-white gap-x-3 text-[16px]">
          About Us
        </Link>
        <Link href="#" className="text-white gap-x-3 text-[16px]">
          Support
        </Link>
      </div>
      <div className="border-b-[1px] w-full border-gray-700 my-4 mt-12" />
      <div className="flex flex-col-reverse lg:flex-row font-sans justify-between">
        <h2 className="text-white gap-3 text-[16px]">
          Copyright &copy; 2024
        </h2>
        <div className="flex flex-row gap-3">
          <Link href="#" className="text-white gap-x-3 text-[16px]">
            Terms of Service
          </Link>
          <Link href="#" className="text-white gap-x-3 text-[16px]">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer