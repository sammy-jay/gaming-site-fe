import Link from "next/link";
import React from "react";

const PlayerAffliate = () => {
  return (
    <main className="w-full max-w-[1440px] mx-auto">
      {/* Hero section */}
      <section
        className="h-[20vh] max-w-[1440px] overflow-x-hidden bg-[#0F0C21] flex flex-col gap-4 lg:flex-row relative justify-between items-center px-8 lg:px-24 py-8 mt-16"
        id="player-hero-section"
      >
        <h3 className="text-[22px] text-white font-medium">Hello, {}</h3>
        <p className="text-[16px] text-white font-sans font-medium">
          Last session start: 24 October 2024
        </p>
      </section>

      <section className="bg-[#1D1C26] py-12 px-[8%] flex flex-col lg:grid grid-cols-12 gap-4">
        <div className="col-span-4 flex flex-col gap-y-6">
          <div className=" bg-[#313144] rounded-xl p-8 flex flex-col font-sans gap-4 items-center">
            <Link
              href="/player/dashboard"
              className="px-4 py-4 w-full rounded-md text-white  bg-[#4B4B69] "
            >
              Dashboard
            </Link>
            <Link
              href="/player/wallet"
              className="px-4 py-4 w-full rounded-md text-white  bg-[#4B4B69]"
            >
              Wallet
            </Link>
            <Link
              href="/player/affliate-program"
              className="px-4 py-4 w-full rounded-md text-white  bg-[#4B4B69] border-[3px] border-gray-400"
            >
              Affliate Program
            </Link>
            <div className="border-b-[1px] w-full border-gray-700 my-4 mt-4" />
            <Link
              href="/player/affliate-program"
              className="px-4 py-2 w-max text-center rounded-md text-white  bg-red-500"
            >
              Sign Out
            </Link>
          </div>
          <div className=" bg-[#313144] rounded-xl p-8 flex flex-col gap-4 items-center">
            <h3 className="w-full text-center rounded-md text-white text-[22px]">
              Need Help?
            </h3>
            <p className="w-full rounded-md font-sans text-center text-[16px] text-white">
              Have questions or concerns regrading your account?Our experts are
              here to help!.
            </p>

            <button className="px-4 py-2 w-max text-center rounded-md text-black  bg-[#FFCC00]">
              Chat With Us
            </button>
          </div>
        </div>
        <div className="col-span-8 bg-[#313144]  rounded-xl p-4 flex flex-col gap-2"></div>
      </section>

      {/* footer */}
    </main>
  );
};

export default PlayerAffliate;
