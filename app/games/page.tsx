import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const GamesPage = () => {
  return (
    <main className="w-full max-w-[1440px] mx-auto">
      {/* Hero section */}
      <section
        className="min-h-[60vh] max-w-[1440px] overflow-x-hidden bg-[#0F0C21] flex relative justify-between items-center px-24 py-8"
        id="play-hero-section"
      >
        <div className="flex flex-col gap-2 relative">
          <h1 className="text-[56px] text-white font-medium">Games</h1>
          <div className="flex flex-row gap-1 text-white text-[16px] items-center">
            <Link href="/">Home</Link>
            <IoIosArrowForward className="w-7 h-7 text-white" />
            <Link href="/games">Games</Link>
          </div>
        </div>
        <Image
          src="/images/game-banner-illus-4.png"
          width={216}
          height={373}
          alt="compete-1"
          className="absolute bottom-3 right-24"
        />
      </section>

      <section className="bg-[#212129] pt-12 px-[8%] pb-[100px]">
        <div className="flex flex-row">
          <h1 className="font-bold text-[24px] lg:text-[43px] pb-4 text-left lg:text-center py-12 text-white">
            All Games
          </h1>
        </div>
        <div className="gap-4 wrap grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <div className="flex flex-col gap-y-2">
            <Image
              src="/images/browse-game-img-1.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Warzone</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <Image
              src="/images/browse-game-img-2.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Redsquad</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <Image
              src="/images/browse-game-img-3.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Cyborg</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <Image
              src="/images/browse-game-img-4.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Headshot Master</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <Image
              src="/images/browse-game-img-6.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Army</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <Image
              src="/images/browse-game-img-1.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Warzone</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <Image
              src="/images/browse-game-img-2.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Redsquad</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <Image
              src="/images/browse-game-img-3.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Cyborg</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <Image
              src="/images/browse-game-img-4.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Headshot Master</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <Image
              src="/images/browse-game-img-6.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Army</p>
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
};

export default GamesPage;
