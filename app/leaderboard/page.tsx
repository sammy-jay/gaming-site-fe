import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const LeaderboardPage = () => {
  return (
    <main className="w-full max-w-[1440px] mx-auto">
      {/* Hero section */}
      <section
        className="min-h-[60vh] max-w-[1440px] overflow-x-hidden bg-[#0F0C21] flex relative justify-between items-center px-24 py-8"
        id="play-hero-section"
      >
        <div className="flex flex-col gap-2 relative">
          <h1 className="text-[56px] text-white font-medium">Leaderboard</h1>
          <div className="flex flex-row gap-1 text-white text-[16px] items-center">
            <Link href="/">Home</Link>
            <IoIosArrowForward className="w-7 h-7 text-white" />
            <Link href="/leaderboard">Leaderboard</Link>
          </div>
        </div>
      
      </section>
    </main>
  );
};

export default LeaderboardPage;
