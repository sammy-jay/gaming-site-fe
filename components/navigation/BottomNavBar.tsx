"use client";

import Link from "next/link";
import React, { useState } from "react";

const BottomNavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="header-bottom">
      <div className="container bg-[#1E272E] md:bg-transparent">
        <div className="header-wrapper ">
          <div className="logo ">
            <Link href="/">
              <img src="/images/logo.png" alt="image" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link className="active" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog" className="">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="">
                Contact
              </Link>
            </li>
          </ul>
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
          <Link className="w-full text-white no-underline active" href="/">
            Home
          </Link>
        </li>
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/faq">
            FAQ
          </Link>
        </li>
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/services">
            Services
          </Link>
        </li>
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/about">
            About
          </Link>
        </li>
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/blog">
            Blog
          </Link>
        </li>
        <li className="mobile-li">
          <Link className="w-full text-white no-underline" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavBar;
