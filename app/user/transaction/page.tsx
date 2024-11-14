"use client";

import BottomNavBar from "@/components/navigation/user/BottomNavBar";
import TopNavBar from "@/components/navigation/user/TopNavBar";
import Link from "next/link";
import Script from "next/script";
import { TRANSACTION_HISTORY_QUERY } from "@/lib/sanity/queries";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity/client";
import { useUser } from "@clerk/nextjs";

type transactionHistory = {
  username: "";
  userId: "";
  email: "";
  amountInBTC: 0;
  transactionDate: null;
  transactionType: null;
  transactionStatus: null;
};
export default function TransactionLogPage() {
    const { user } = useUser();
  const [transactionHistory, setTransactionHistory] = useState<
    transactionHistory[]
  >([]);

  useEffect(() => {
    function loadData() {
      client
        .fetch(TRANSACTION_HISTORY_QUERY, { userId: user?.id }, {})
        .then((data) => {
          if (data.length > 0) {
            setTransactionHistory(data);
            console.log(transactionHistory);
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
            <h2 className="m-0">Transactions</h2>
          </div>
        </div>
      </section>

      <div className="dashboard-section pt-120 pb-120 bg--section">
        <div className="container">
          <div className="row justify-content-center gy-4">
            <div className="col-12">
              <div className="show-filter text-end">
                <button
                  type="button"
                  className="cmn--btn btn-block showFilterBtn btn-sm"
                >
                  <i className="las la-filter"></i>Filter
                </button>
              </div>
              <div className="card responsive-filter-card custom--card border-0">
                <div className="card-body">
                  <form action="">
                    <div className="d-flex flex-wrap gap-4">
                      <div className="flex-grow-1">
                        <label>Transaction Number</label>
                        <input
                          type="text"
                          name="search"
                          value=""
                          className="form-control cmn--form--control"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <label>Type</label>
                        <select
                          name="trx_type"
                          className="form-control cmn--form--control"
                        >
                          <option value="">All</option>
                          <option value="+">Plus</option>
                          <option value="-">Minus</option>
                        </select>
                      </div>
                      <div className="flex-grow-1">
                        <label>Remark</label>
                        <select
                          className="form-control cmn--form--control"
                          name="remark"
                        >
                          <option value="">Any</option>
                          <option value="balance_add">Balance add</option>
                          <option value="balance_subtract">
                            Balance subtract
                          </option>
                          <option value="deposit">Deposit</option>
                          <option value="withdraw">Withdraw</option>
                          <option value="withdraw_reject">
                            Withdraw reject
                          </option>
                        </select>
                      </div>
                      <div className="flex-grow-1 align-self-end">
                        <button className="cmn--btn btn-block h-100">
                          <i className="las la-filter"></i> Filter
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="table-responsive">
                <table className="table cmn--table">
                  <thead>
                    <tr>
                      <th>Transaction Type</th>
                      <th>Transaction Date</th>
                      <th>Amount (BTC)</th>
                      <th>Transaction Status</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                     {transactionHistory?.length === 0 ? (
                      <tr>
                        <td className="text-muted text-center" colSpan={6}>
                        Data not found
                      </td>
                      </tr>
                    ) : (
                      transactionHistory.map((transaction) => {
                        return (
                          <tr key={transaction?.transactionDate}>
                            <td>{transaction?.transactionType}</td>
                            <td>{transaction?.transactionDate}</td>
                            <td>{transaction?.amountInBTC}</td>
                            <td>{transaction?.transactionStatus}</td>
                            <td></td>
                          </tr>
                        );
                      })
                    )}
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
