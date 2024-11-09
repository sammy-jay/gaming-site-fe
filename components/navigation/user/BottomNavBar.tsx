import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoIosArrowDown } from "react-icons/io";

const BottomNavBar = () => {
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

          <div className="header-bar m-0">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
