"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoIosArrowDown } from "react-icons/io";

const BottomNavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="header-bottom">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo.png" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="menu">
              <li>
                <Link href="/user/dashboard" className="active">
                  Dashboard
                </Link>
              </li>
              <li>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger className="flex flex-row justify-start items-center">
                      <Link href="#" className="">
                        Practice
                      </Link>
                      <IoIosArrowDown className="w-5 h-5 -ml-2 text-white" />
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="flex flex-col gap-2 rounded-none m-0 p-0 bg-[#1E272E] border-0 outline-0  w-[100vw] lg:w-[200px]"
                    >
                      <Link
                        href="/user/practice/trade"
                        className="menu-nav-link"
                      >
                        Practice Now
                      </Link>
                      <div className="border-[0.5px] border-gray-700" />
                      <Link
                        href="/user/practice/trade/log"
                        className="menu-nav-link"
                      >
                        Practice Log
                      </Link>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>

              <li>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger className="flex flex-row justify-start items-center">
                      <Link href="#" className="">
                        Trade
                      </Link>
                      <IoIosArrowDown className="w-5 h-5 -ml-2 text-white" />
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="flex flex-col gap-2 rounded-none m-0 p-0 bg-[#1E272E] border-0 outline-0 lg:w-[200px]"
                    >
                      <Link href="/user/trade" className="menu-nav-link">
                        Trade Now
                      </Link>
                      <div className="border-[0.5px] border-gray-700" />
                      <Link href="/user/trade/log" className="menu-nav-link">
                        Trade Log
                      </Link>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>

              <li>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger className="flex flex-row justify-start items-center">
                      <Link href="#" className="">
                        Deposit
                      </Link>
                      <IoIosArrowDown className="w-5 h-5 -ml-2 text-white" />
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="flex flex-col gap-2 rounded-none m-0 p-0 bg-[#1E272E] border-0 outline-0 lg:w-[200px]"
                    >
                      <Link href="/user/deposit" className="menu-nav-link">
                        Deposit Money
                      </Link>
                      <div className="border-[0.5px] border-gray-700" />
                      <Link
                        href="/user/deposit/history"
                        className="menu-nav-link"
                      >
                        Deposit History
                      </Link>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>

              <li>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger className="flex flex-row justify-start items-center">
                      <Link href="#" className="">
                        Withdraw
                      </Link>
                      <IoIosArrowDown className="w-5 h-5 -ml-2 text-white" />
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="flex flex-col gap-2 rounded-none m-0 p-0 bg-[#1E272E] border-0 outline-0 lg:w-[200px]"
                    >
                      <Link href="/user/kyc-form" className="menu-nav-link">
                        Withdraw Money
                      </Link>
                      <div className="border-[0.5px] border-gray-700" />
                      <Link
                        href="/user/withdraw/history"
                        className="menu-nav-link"
                      >
                        Withdraw History
                      </Link>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>

              <li>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger className="flex flex-row justify-start items-center">
                      <Link href="#" className="">
                        Referral
                      </Link>
                      <IoIosArrowDown className="w-5 h-5 -ml-2 text-white" />
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="flex flex-col gap-2 rounded-none m-0 p-0 bg-[#1E272E] border-0 outline-0 lg:w-[200px]"
                    >
                      <Link href="/user/referral/log" className="menu-nav-link">
                        Referral Log
                      </Link>
                      <div className="border-[0.5px] border-gray-700" />
                      <Link
                        href="/user/commission/log"
                        className="menu-nav-link"
                      >
                        Commission Log
                      </Link>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>

              <li>
                <Link href="/user/transactions">Transaction Log</Link>
              </li>
            </ul>
          </div>

          <div
            className="header-bar m-0"
            onClick={() => setShowNav((showNav) => !showNav)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <ul
        className={`text-white md:hidden  ${
          showNav ? "flex flex-col" : "hidden"
        }`}
      >
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/user/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/user/practice/trade">
            Practice
          </Link>
        </li>
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/user/trade">
            Trade
          </Link>
        </li>
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/user/deposit">
            Deposit Money
          </Link>
        </li>
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/user/withdraw">
            Withdraw Money
          </Link>
        </li>
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/user/referral/log">
            Referral Log
          </Link>
        </li>
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/user/commission/log">
            Commission Log
          </Link>
        </li>
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/user/transaction">
            Transaction Log
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavBar;
