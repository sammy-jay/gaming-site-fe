"use client";

import BottomNavBar from "@/components/navigation/user/BottomNavBar";
import TopNavBar from "@/components/navigation/user/TopNavBar";
import useStore from "@/lib/store";
import Link from "next/link";
import Script from "next/script";

export default function ConfirmDepositPage() {
    const depositData = useStore((state) => state.depositData);

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
        data-background="https://www.cryptoplustrader.com/assets/images/frontend/breadcrumb/605ed645dc0fa1616827973.jpg"
      >
        <div className="container">
          <div className="hero-content text-center">
            <h2 className="m-0">Deposit Confirmation</h2>
          </div>
        </div>
      </section>

      <div className="dashboard-section pt-120 pb-120 bg--section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card custom--card">
                <div className="card-header card-header-bg">
                  <h5 className="card-title">
                    {depositData.gateway} Deposit Confirmation
                  </h5>
                </div>
                <div className="card-body ">
                  <form>
                    <div className="col-md-12 text-center">
                      <p className="text-center mt-2">
                        You have requested{" "}
                        <b className="text--success">
                          {depositData.amount} USD
                        </b>{" "}
                        , Please pay{" "}
                        <b className="text--success">
                          {depositData.finalAmount} USDT{" "}
                        </b>{" "}
                        for successful payment{" "}
                      </p>
                      <div className="my-4 text-center">
                        <br />
                        <p>
                          <span>Wallet Address</span>
                          <br />
                          <span className="font-semibold text-[18px] text--success">
                            TPBzjYtuegTJEfq57c5auHoqoS3mpxzEBi&nbsp;
                          </span>
                          <br />
                        </p>
                        <p>
                          <span>Network</span>
                          <br />
                          <span className="font-semibold text-[18px] text--success">
                            TRC20
                          </span>
                        </p>
                        <p className="w-full flex flex-col items-center">
                          <img
                            src="/wallet/usdt-trc20.png"
                            width="30%"
                            height="30%"
                          />
                          <span>(Scan QR Code)</span>
                        </p>
                      </div>
                    </div>
                    <div className="form-group mt-8">
                      <label className="form-label">
                        Proof of Payment Screenshot{" "}
                      </label>
                      <input
                        type="file"
                        className="form-control form--control"
                        name="proof_of_payment_(screenshot)"
                        required
                        accept=" .jpg,  .jpeg,  .png,  .pdf,  .doc,  .docx, "
                      />
                      <pre className="text--base mt-1">
                        Supported mimes: jpg,jpeg,png,pdf,doc,docx
                      </pre>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <Link
                          href="/user/deposit/history"
                          className="cmn--btn btn-block"
                        >
                          Pay Now
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
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
