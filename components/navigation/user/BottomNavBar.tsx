import Link from 'next/link';
import React from 'react'

const BottomNavBar = () => {
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link href="/">
              <img src="https://www.cryptoplustrader.com/assets/images/logoIcon/logo.png" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link href="/user/dashboard" className="active">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                Practice
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/user/practice/trade">Practice Now</Link>
                </li>
                <li>
                  <Link href="/user/practice/trade/log">Practice Log</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#" className="">
                Trade
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/user/trade">Trade Now</Link>
                </li>
                <li>
                  <Link href="/user/trade/log">Trade Log</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#" className="">
                Deposit
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/user/deposit">Deposit Money</Link>
                </li>
                <li>
                  <Link href="/user/deposit/history">Deposit History</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#" className="">
                Withdraw
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/user/withdraw">Withdraw Money</Link>
                </li>
                <li>
                  <Link href="/user/withdraw/history">Withdraw History</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#" className="">
                Referral
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/user/referral/log">Referral Log</Link>
                </li>

                <li>
                  <Link href="/user/commissions/history">Commission Log</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/user/transactions">Transaction Log</Link>
            </li>
          </ul>
          <div className="header-bar m-0">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavBar