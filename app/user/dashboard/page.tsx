"use client";
import BottomNavBar from "@/components/navigation/user/BottomNavBar";
import TopNavBar from "@/components/navigation/user/TopNavBar";
import Script from "next/script";
import { ACCOUNT_QUERY, USER_PROFILE_QUERY } from "@/lib/sanity/queries";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity/client";
import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();
  const [account, setAccount] = useState({
    username: "",
    userId: "",
    email: "",
    deposit: 0,
    withdraw: 0,
    interest: 0,
    totalBalance: 0,
  });
  const [sanityUser, setSanityUser] = useState({
    username: "",
    userId: "",
    email: "",
    isUserVerified: false,
  });

  useEffect(() => {
    function loadData() {
      client.fetch(ACCOUNT_QUERY, { userId: user?.id }, {}).then((data) => {
        if (data.length > 0) {
          setAccount(data[0]);
        }
      });
      client
        .fetch(USER_PROFILE_QUERY, { userId: user?.id }, {})
        .then((data) => {
          if (data.length > 0) {
            setSanityUser(data[0]);
          }
        });
    }

    loadData();
  }, [user]);

  return (
    <main>
      <Script src="/js/index.js" />
      <Link href="#" className="scrollToTop">
        <i className="las la-angle-up"></i>
      </Link>

      <header className="header-section">
        <TopNavBar />
        <BottomNavBar />
      </header>

      <section
        className="hero-section bg--overlay bg_img bg_fixed"
        id="user-hero-section"
      >
        <div className="container">
          <div className="hero-content text-center">
            <h2 className="m-0">Dashboard</h2>
          </div>
        </div>
      </section>

      <div className="dashboard-section pt-120 pb-120 bg--section">
        <div className="container">
          <div className="row justify-content-center gy-4">
            <div className="col-12">
              {!sanityUser.isUserVerified && (
                <div className="alert bg--body mb-0">
                  <h4 className="alert-heading text--danger">
                    KYC Verification Required
                  </h4>
                  <hr />
                  <p className="mb-0">
                    Dear User, we need your KYC documents to verify the
                    authenticity of your information and to help you recover
                    your account in the event that you lose it. After
                    verification, your data is automatically deleted from our
                    system and thus removes the risk of any form of re-use.
                    <Link href="/user/kyc-form" className="text--base fw-bold">
                      Click Here to Verify
                    </Link>
                  </p>
                </div>
              )}
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="dashboard__item">
                <div className="dashboard__thumb">
                  <i className="las la-dollar-sign"></i>
                </div>
                <div className="dashboard__content">
                  <h4 className="dashboard__title">${account?.totalBalance}</h4>
                  <span className="subtitle d-block">Current Balance</span>
                  <Link
                    href="/user/transactions"
                    className="btn btn--sm btn--base"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="dashboard__item">
                <div className="dashboard__thumb">
                  <i className="las la-wallet"></i>
                </div>
                <div className="dashboard__content">
                  <h4 className="dashboard__title">${account?.deposit}</h4>
                  <span className="subtitle d-block">Total Deposit</span>
                  <Link
                    href="/user/deposit/history"
                    className="btn btn--sm btn--base"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="dashboard__item">
                <div className="dashboard__thumb">
                  <i className="las la-credit-card"></i>
                </div>
                <div className="dashboard__content">
                  <h4 className="dashboard__title">${account?.withdraw}</h4>
                  <span className="subtitle d-block">Total Withdraw</span>
                  <Link
                    href="/user/withdraw/history"
                    className="btn btn--sm btn--base"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="dashboard__item">
                <div className="dashboard__thumb">
                  <i className="las la-money-bill"></i>
                </div>
                <div className="dashboard__content">
                  <h4 className="dashboard__title">0</h4>
                  <span className="subtitle d-block">Total Transactions</span>
                  <Link
                    href="/user/transactions"
                    className="btn btn--sm btn--base"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="dashboard__item">
                <div className="dashboard__thumb">
                  <i className="las la-gamepad"></i>
                </div>
                <div className="dashboard__content">
                  <h4 className="dashboard__title">0</h4>
                  <span className="subtitle d-block">Total Trade</span>
                  <Link
                    href="/user/trade/log"
                    className="btn btn--sm btn--base"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="dashboard__item">
                <div className="dashboard__thumb">
                  <i className="las la-trophy"></i>
                </div>
                <div className="dashboard__content">
                  <h4 className="dashboard__title">0</h4>
                  <span className="subtitle d-block">Total Wining Trade</span>
                  <Link
                    href="/user/trade/wining/log"
                    className="btn btn--sm btn--base"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="dashboard__item">
                <div className="dashboard__thumb">
                  <i className="las la-slash"></i>
                </div>
                <div className="dashboard__content">
                  <h4 className="dashboard__title">0</h4>
                  <span className="subtitle d-block">Total Losing Trade</span>
                  <Link
                    href="/user/trade/losing/log"
                    className="btn btn--sm btn--base"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="dashboard__item">
                <div className="dashboard__thumb">
                  <i className="las la-pencil-ruler"></i>
                </div>
                <div className="dashboard__content">
                  <h4 className="dashboard__title">0</h4>
                  <span className="subtitle d-block">Total Draw Trade</span>
                  <Link
                    href="/user/trade/draw/log"
                    className="btn btn--sm btn--base"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group">
                <span className="input-group-text bg--base text-white border-0">
                  My Referral Link
                </span>
                <input
                  type="text"
                  name="key"
                  value="https://www.cryptoplustrader.com?reference=pure_smoke"
                  className="form-control cmn--form--control bg--section referralURL"
                  readOnly
                />
                <span
                  className="input-group-text bg--base cursor-pointer text-white border-0"
                  id="copyBoard"
                >
                  <i className="lar la-copy"></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="table-responsive">
                <table className="table cmn--table">
                  <thead>
                    <tr>
                      <th>S.N.</th>
                      <th>Crypto</th>
                      <th>Amount</th>
                      <th>High/Low</th>
                      <th>Result</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={7} className="text-center text-muted">
                        Data not found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-section">
        <div className="footer-top pt-120 pb-120">
          <div className="container">
            <div className="row gy-5 justify-content-between">
              <div className="col-lg-4 col-md-6">
                <div className="footer__widget">
                  <Link href="/" className="logo">
                    <img src="/images/logo.png" />
                  </Link>
                  <p>
                    Make signals become figures, figures become money and money
                    become yours.
                  </p>
                  <ul className="post__share"></ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer__widget">
                  <h5 className="title">Quick Links</h5>
                  <ul className="widget__links">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/user/dashboard">Dashboard</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer__widget">
                  <h5 className="title">Policies</h5>
                  <ul className="widget__links">
                    <li>
                      <Link href="/policy/terms-of-use/99">Terms of Use</Link>
                    </li>
                    <li>
                      <Link href="/policy/terms-of-service/94">
                        Terms Of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/policy/privacy-policy/92">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer__widget">
                  <h5 className="title">Our Newsletter</h5>
                  <p>
                    Subscribe our newsletter to get regular news and tips. We
                    promise we won&#039;t harass you.
                  </p>
                  <form className="subscribe-form" id="subscribe-form">
                    <input
                      type="email"
                      className="form-control subscribe--form--control"
                      required
                      name="email"
                      placeholder="Your Email Address"
                    />
                    <button type="submit" className="cmn--btn">
                      <i className="lab la-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="footer-middle-wrapper">
              <div className="row g-0">
                <div className="col-lg-4">
                  <div className="footer__contact__item">
                    <div className="footer__contact__thumb">
                      <i className="las la-envelope-open-text"></i>
                    </div>
                    <div className="footer__contact__content">
                      <h6 className="footer__contact__title">
                        <Link href="mailto:support@tetracryptoplus.com">
                          support@tetracryptoplus.com
                        </Link>
                      </h6>
                      <span className="info">Email Address</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer__contact__item">
                    <div className="footer__contact__thumb">
                      <i className="las la-phone-volume"></i>
                    </div>
                    <div className="footer__contact__content">
                      <h6 className="footer__contact__title">
                        <Link href="tel:+1 (615) 769-8768">
                          +1 (615) 769-8768
                        </Link>
                      </h6>
                      <span className="info">Call Us Now</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer__contact__item">
                    <div className="footer__contact__thumb">
                      <i className="las la-map-marked-alt"></i>
                    </div>
                    <div className="footer__contact__content">
                      <h6 className="footer__contact__title">
                        <Link href="#">
                          1207 Bittern Way Suisun City, California.
                        </Link>
                      </h6>
                      <span className="info">Our Address</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            Copyright © 2024. All Rights Reserved By
            <Link href="/" className="text--base">
              TetraCryptoPlus
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
