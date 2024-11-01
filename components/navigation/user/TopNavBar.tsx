"use client";
import { getLocalStorageItem } from "@/utils/localStorage";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TopNavBar = () => {
  const [authInfo, setAuthInfo] = useState({user: {username: "", id: ""}});

  useEffect(() => {
    setAuthInfo(getLocalStorageItem("auth-info"));
  }, []);

  return (
    <div className="header-top bg--section">
      <div className="container">
        <ul className="header-top-area">
          <li className="me-auto"></li>
          <li className="dashboard-dashboard-icon">
            <div className="avatar">
              <span>{authInfo?.user?.username.slice(0, 2).toUpperCase()}</span>
            </div>

            <ul className="dashboard-menu">
              <li>
                <Link href="/ticket">Support Ticket</Link>
              </li>
              <li>
                <Link href="/user/profile-setting">Profile Setting</Link>
              </li>
              <li>
                <Link href="/user/change-password">Change Password</Link>
              </li>
              <li>
                <Link href="/user/twofactor">2FA Security</Link>
              </li>
              <li>
                <Link href="/user/logout">Logout</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
