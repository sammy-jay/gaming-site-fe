"use client";
import Link from "next/link";
import React from "react";
import { SignInButton,SignUpButton, SignedIn,SignOutButton, SignedOut } from "@clerk/nextjs";

const TopNavBar = () => {
  return (
    <div className="header-top bg--section">
      <div className="container">
        <ul className="header-top-area py-2">
          <li className="me-auto"></li>

          <SignedOut>
            <SignInButton />
            <div className="mx-2"/>
            <SignUpButton />
          </SignedOut>

          <SignedIn>
            <li className="links">
              <Link href="/user/dashboard">Dashboard</Link>
            </li>
            <SignOutButton/>
          </SignedIn>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
