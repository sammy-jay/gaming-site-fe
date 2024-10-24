import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const PlayPage = () => {
  return (
    <main className="w-full max-w-[1440px] mx-auto">
      {/* Hero section */}
      <section
        className="min-h-[60vh] max-w-[1440px] overflow-x-hidden bg-[#0F0C21] flex relative justify-between items-center px-8 lg:px-24 py-8"
        id="play-hero-section"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-[28px] lg:text-[56px] text-white font-medium">
            Play as you go
          </h1>
          <div className="flex flex-row gap-1 text-white text-[14px] w-full lg:text-[16px] items-center">
            <Link href="/">Home</Link>
            <IoIosArrowForward className="w-7 h-7 text-white" />
            <Link href="/play">Play</Link>
            <IoIosArrowForward className="w-7 h-7 text-white" />
            <Link href="/play">Play As You Go</Link>
          </div>
        </div>
        <Image
          src="/images/banner-play-go-illus.png"
          width={435}
          height={410}
          alt="compete-1"
          className=""
        />
      </section>

      <section className="bg-[#212129] px-[8%] pt-12 pb-[100px]">
        <div className="flex flex-row justify-center">
          <h1 className="font-bold text-[24px] lg:text-[43px] pb-4 text-left lg:text-center text-white">
            Compete In
          </h1>
        </div>
        <div className=" gap-4 wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-y-2 rounded-md border-[1px] border-gray-800 bg-[#1A1A22]">
            <Image
              src="/images/compete-img-1.png"
              width={425}
              height={190}
              alt="compete-1"
              className=""
            />
            <div className="p-4 flex flex-col gap-y-1">
              <p className="text-gray-300 text-[16px]">Ends in 14H 21M 16S</p>
              <p className="text-white text-[22px] ">Ninja Assassin</p>
              <p className="text-gray-300 text-[16px]"></p>

              <button className="bg-[#313144] mt-4 py-3 px-4 rounded-md text-white">
                Prize Pool
              </button>
              <button className="bg-[#FFCC00] mt-4  py-3 px-4 font-bold rounded-md text-black">
                Play Now
              </button>
              <p className="text-gray-300 text-[16px] text-center">
                Game ID: 435
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 rounded-md border-[1px] border-gray-800 bg-[#1A1A22]">
            <Image
              src="/images/compete-img-2.png"
              width={425}
              height={190}
              alt="compete-1"
              className=""
            />
            <div className="p-4 flex flex-col gap-y-1">
              <p className="text-gray-300 text-[16px]">Ends in 14H 21M 16S</p>
              <p className="text-white text-[22px] ">Ninja Assassin</p>
              <p className="text-gray-300 text-[16px]"></p>

              <button className="bg-[#313144] mt-4 py-3 px-4 rounded-md text-white">
                Prize Pool
              </button>
              <button className="bg-[#FFCC00] mt-4  py-3 px-4 font-bold rounded-md text-black">
                Play Now
              </button>
              <p className="text-gray-300 text-[16px] text-center">
                Game ID: 435
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 rounded-md border-[1px] border-gray-800 bg-[#1A1A22]">
            <Image
              src="/images/compete-img-3.png"
              width={425}
              height={190}
              alt="compete-1"
              className=""
            />
            <div className="p-4 flex flex-col gap-y-1">
              <p className="text-gray-300 text-[16px]">Ends in 14H 21M 16S</p>
              <p className="text-white text-[22px] ">Ninja Assassin</p>
              <p className="text-gray-300 text-[16px]"></p>

              <button className="bg-[#313144] mt-4 py-3 px-4 rounded-md text-white">
                Prize Pool
              </button>
              <button className="bg-[#FFCC00] mt-4  py-3 px-4 font-bold rounded-md text-black">
                Play Now
              </button>
              <p className="text-gray-300 text-[16px] text-center">
                Game ID: 435
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 rounded-md border-[1px] border-gray-800 bg-[#1A1A22]">
            <Image
              src="/images/compete-img-1.png"
              width={425}
              height={190}
              alt="compete-1"
              className=""
            />
            <div className="p-4 flex flex-col gap-y-1">
              <p className="text-gray-300 text-[16px]">Ends in 14H 21M 16S</p>
              <p className="text-white text-[22px] ">Ninja Assassin</p>
              <p className="text-gray-300 text-[16px]"></p>

              <button className="bg-[#313144] mt-4 py-3 px-4 rounded-md text-white">
                Prize Pool
              </button>
              <button className="bg-[#FFCC00] mt-4  py-3 px-4 font-bold rounded-md text-black">
                Play Now
              </button>
              <p className="text-gray-300 text-[16px] text-center">
                Game ID: 435
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 rounded-md border-[1px] border-gray-800 bg-[#1A1A22]">
            <Image
              src="/images/compete-img-2.png"
              width={425}
              height={190}
              alt="compete-1"
              className=""
            />
            <div className="p-4 flex flex-col gap-y-1">
              <p className="text-gray-300 text-[16px]">Ends in 14H 21M 16S</p>
              <p className="text-white text-[22px] ">Ninja Assassin</p>
              <p className="text-gray-300 text-[16px]"></p>

              <button className="bg-[#313144] mt-4 py-3 px-4 rounded-md text-white">
                Prize Pool
              </button>
              <button className="bg-[#FFCC00] mt-4  py-3 px-4 font-bold rounded-md text-black">
                Play Now
              </button>
              <p className="text-gray-300 text-[16px] text-center">
                Game ID: 435
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 rounded-md border-[1px] border-gray-800 bg-[#1A1A22]">
            <Image
              src="/images/compete-img-3.png"
              width={425}
              height={190}
              alt="compete-1"
              className=""
            />
            <div className="p-4 flex flex-col gap-y-1">
              <p className="text-gray-300 text-[16px]">Ends in 14H 21M 16S</p>
              <p className="text-white text-[22px] ">Ninja Assassin</p>
              <p className="text-gray-300 text-[16px]"></p>

              <button className="bg-[#313144] mt-4 py-3 px-4 rounded-md text-white">
                Prize Pool
              </button>
              <button className="bg-[#FFCC00] mt-4  py-3 px-4 font-bold rounded-md text-black">
                Play Now
              </button>
              <p className="text-gray-300 text-[16px] text-center">
                Game ID: 435
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gradient-to-b from-[#191921] via-[#060518] to-[#191921] w-full px-[8%] pt-12 pb-[100px]">
        <div className="flex flex-row justify-start">
          <h1 className="font-bold text-[24px] lg:text-[43px] pb-4 text-left lg:text-center text-white">
            Gamers Review
          </h1>
        </div>
        <div className="w-full flex flex-row gap-4 overflow-x-auto">
          <div className="flex flex-col gap-y-4 rounded-md border-[1px] p-6 py-8 min-w-[400px] border-gray-800 bg-[#100E21]">
            <p className="text-gray-300 text-[18px]">100% Transparency</p>
            <p className="text-white text-[20px] font-serif">
              I can say the innovation behind Dooplo is nothing short of
              incredible. You can’t beat the on-chain experience with its
            </p>
            <div className="text-gray-300 mt-4 text-[16px] flex flex-row gap-3">
              <Image
                src="/images/profile-image-3.png"
                width={40}
                height={40}
                alt="profile-image-3"
                className="rounded-full object-contain"
              />
              <div className="flex flex-col gap-1">
                <p className="text-white">Devon Lee</p>
                <p className="text-[#FFCC00]">3244 followers</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 rounded-md border-[1px] p-6 py-8 min-w-[400px] border-gray-800 bg-[#100E21]">
            <p className="text-gray-300 text-[18px]">100% Transparency</p>
            <p className="text-white text-[20px] font-serif">
              I can say the innovation behind Dooplo is nothing short of
              incredible. You can’t beat the on-chain experience with its
            </p>
            <div className="text-gray-300 mt-4 text-[16px] flex flex-row gap-3">
              <Image
                src="/images/profile-image-3.png"
                width={40}
                height={40}
                alt="profile-image-3"
                className="rounded-full object-contain"
              />
              <div className="flex flex-col gap-1">
                <p className="text-white">Devon Lee</p>
                <p className="text-[#FFCC00]">3244 followers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
    </main>
  );
}

export default PlayPage