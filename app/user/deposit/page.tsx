"use client";

import BottomNavBar from "@/components/navigation/user/BottomNavBar";
import TopNavBar from "@/components/navigation/user/TopNavBar";
import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useStore from "@/lib/store";


export default function DepositPage() {
  const [depositData, setDepositData] = useState({
    gateway: "",
    amount: 0,
  });
  const router = useRouter();

  const updateDepositData = useStore((state) => state.updateDepositData);

  async function OnSubmit(){
    try {
      updateDepositData({
        gateway: depositData.gateway,
        amount: depositData.amount,
        charge: depositData.amount * 0.02 ,
        payable: depositData.amount + (depositData.amount * 0.02),
        finalAmount: depositData.amount + (depositData.amount * 0.02),
      });

      router.push("/user/deposit/manual");
    } catch (error) {
      console.log(error);
    }
  }

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
            <h2 className="m-0">Deposit Methods</h2>
          </div>
        </div>
      </section>

      <div className="dashboard-section pt-120 pb-120 bg--section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form>
                <div className="card custom--card">
                  <div className="card-header">
                    <h5 className="card-title">Deposit</h5>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label className="form-label">Select Gateway</label>
                      <select
                        className="form-control cmn--form--control"
                        value={depositData.gateway}
                        onChange={(e) =>
                          setDepositData({
                            ...depositData,
                            gateway: e.target.value,
                          })
                        }
                        required
                      >
                        <option value="" selected disabled>
                          Select One
                        </option>
                        {/* <option value="Bitcoin Deposit">Bitcoin Deposit</option> */}
                        <option value="USDT Deposit">USDT Deposit</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Amount</label>
                      <div className="input-group">
                        <input
                          type="number"
                          value={depositData.amount}
                          onChange={(e) =>
                            setDepositData({
                              ...depositData,
                              amount: parseFloat(e.target.value),
                            })
                          }
                          className="form-control cmn--form--control"
                          required
                        />
                        <span className="input-group-text">USD</span>
                      </div>
                    </div>
                    <div className="mt-3 preview-details">
                      <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item d-flex justify-content-between bg-transparent text-white b-input">
                          <span>Limit</span>
                          <span>
                            <span className="min fw-bold">100</span> USD -
                            <span className="max fw-bold">1000000</span> USD
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-transparent text-white b-input">
                          <span>Charge</span>
                          <span>
                            <span className="charge fw-bold">
                              {0.02 * depositData.amount}{" "}
                            </span>
                            USD
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-transparent text-white b-input">
                          <span>Payable</span>
                          <span>
                            <span className="payable fw-bold">
                              {depositData.amount + 0.02 * depositData.amount}{" "}
                            </span>
                            USD
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-transparent text-white b-input d-none rate-element"></li>
                        <li className="list-group-item d-flex justify-content-between bg-transparent text-white b-input d-none in-site-cur">
                          <span>
                            In <span className="method_currency"></span>
                          </span>
                          <span className="final_amo fw-bold">0</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-transparent text-white b-input crypto_currency d-none">
                          <span>
                            Conversion with{" "}
                            <span className="method_currency"></span> and final
                            value will Show on next step
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button onClick={OnSubmit} type="button" className="cmn--btn btn-block">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
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
                    <img src="https://www.cryptoplustrader.com/assets/images/logoIcon/logo.png" />
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
                        <Link href="mailto:support@cryptoplustrader.com">
                          support@cryptoplustrader.com
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
              CryptoPlus Trader
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
