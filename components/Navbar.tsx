"use client";

import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { BASE_URL } from "@/utils/constants";
import { useQuery } from "react-query";
import { getLocalStorageItem } from "@/utils/localStorage";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const storedData = getLocalStorageItem("auth-info");
  const access_token = storedData?.access_token || "";
  const router = useRouter();

  const { status, data } = useQuery("profile", async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    };
    const res = await fetch(`${BASE_URL}/players/profile`, options);

    if (!res.ok) {
      localStorage.removeItem("auth-info");
      router.replace("/sign-in");
    }
    return res.json();
  });

  const pathname = usePathname();

  if (status === "loading" || status === "error") {
    return (
      <nav className="z-10 fixed top-0 left-0 right-0 w-full text-lg py-4 px-6 lg:px-16 bg-[#212129] flex flex-row justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-white">
          Mizuk
        </Link>
        <ul className="hidden lg:flex flex-row gap-6 justify-center text-white">
          <li>
            <Link
              href="/"
              className={`font-semibold hover:scale-105 transition-all duration-400 ${
                pathname === "/" ? "text-[#FFCC00]" : "text-white"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/play"
              className={`font-semibold hover:scale-105 transition-all duration-400 ${
                pathname === "/play" ? "text-[#FFCC00]" : "text-white"
              }`}
            >
              Play
            </Link>
          </li>
          <li>
            <Link
              href="/games"
              className={`font-semibold hover:scale-105 transition-all duration-400 ${
                pathname === "/games" ? "text-[#FFCC00]" : "text-white"
              }`}
            >
              Games
            </Link>
          </li>
          <li>
            <Link
              href="/matchfinders"
              className={`font-semibold hover:scale-105 transition-all duration-400 ${
                pathname === "/matchfinders" ? "text-[#FFCC00]" : "text-white"
              }`}
            >
              Matchfinders
            </Link>
          </li>
          <li>
            <Link
              href="/leaderboard"
              className={`font-semibold hover:scale-105 transition-all duration-400 ${
                pathname === "/leaderboard" ? "text-[#FFCC00]" : "text-white"
              }`}
            >
              Leaderboard
            </Link>
          </li>
        </ul>
        <div className="gap-4 flex flex-row text-white items-center">
          <IoSearchOutline className="w-5 h-5 text-gray-400 cursor-pointer" />
          <Link href="/sign-in" className="bg-transparent py-2 px-4">
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="bg-[#FFCC00] py-2 px-4 rounded-md text-black"
          >
            Sign up
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="z-10 fixed top-0 left-0 right-0 w-full text-lg py-4 px-6 lg:px-16 bg-[#212129] flex flex-row justify-between items-center">
      <Link href="/" className="font-bold text-2xl text-white">
        Mizuk
      </Link>
      <ul className="hidden lg:flex flex-row gap-6 justify-center text-white">
        <li>
          <Link
            href="/"
            className={`font-semibold hover:scale-105 transition-all duration-400 ${
              pathname === "/" ? "text-[#FFCC00]" : "text-white"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/play"
            className={`font-semibold hover:scale-105 transition-all duration-400 ${
              pathname === "/play" ? "text-[#FFCC00]" : "text-white"
            }`}
          >
            Play
          </Link>
        </li>
        <li>
          <Link
            href="/games"
            className={`font-semibold hover:scale-105 transition-all duration-400 ${
              pathname === "/games" ? "text-[#FFCC00]" : "text-white"
            }`}
          >
            Games
          </Link>
        </li>
        <li>
          <Link
            href="/matchfinders"
            className={`font-semibold hover:scale-105 transition-all duration-400 ${
              pathname === "/matchfinders" ? "text-[#FFCC00]" : "text-white"
            }`}
          >
            Matchfinders
          </Link>
        </li>
        <li>
          <Link
            href="/leaderboard"
            className={`font-semibold hover:scale-105 transition-all duration-400 ${
              pathname === "/leaderboard" ? "text-[#FFCC00]" : "text-white"
            }`}
          >
            Leaderboard
          </Link>
        </li>
      </ul>
      <div className="gap-2 flex flex-row text-white items-center">
        <IoSearchOutline className="w-5 h-5 text-gray-400 cursor-pointer mr-6" />
        <p className="text-[14px] md:text-[18px] text-gray-400">
          Hi, <span className="font-semibold">{data && data.username}</span>
        </p>
        <Link href="/player/dashboard">
          <FaRegUserCircle className="cursor-pointer hover:animate-bounce transition-all w-7 h-7 text-gray-200" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
