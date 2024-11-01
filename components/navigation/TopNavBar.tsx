"use client"
import Link from 'next/link';
import React from 'react'

const TopNavBar = () => {

  return (
    <div className="header-top bg--section">
      <div className="container">
        <ul className="header-top-area">
          <li className="me-auto"></li>
          <li className="links">
            <Link href="/auth/sign-in">Sign in</Link>
          </li>
          <li className="links b-left">
            <Link href="/auth/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopNavBar