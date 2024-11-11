"use client";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const TopNavBar = () => {
  return (
    <div className="header-top bg--section">
      <div className="container">
        <ul className="header-top-area gap-2 py-2 flex flex-row items-center">
          <li className="me-auto"></li>
          <li>
            <UserButton showName  />
          </li>
          <li className="dashboard-dashboard-icon">
            <div className="avatar">
              <span>
                <i className="las la-bars"></i>
              </span>
            </div>

            <ul className="dashboard-menu">
              <li>
                <Link href="/ticket">Support Ticket</Link>
              </li>
              {/* <li>
                <Link href="/user/profile-setting">Profile Setting</Link>
              </li> */}
              <li>
                <Link href="/user/change-password">Change Password</Link>
              </li>
              <li>
                <Link href="/user/twofactor">2FA Security</Link>
              </li>

            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
