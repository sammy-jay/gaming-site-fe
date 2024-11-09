"use client";

import BottomNavBar from "@/components/navigation/user/BottomNavBar";
import TopNavBar from "@/components/navigation/user/TopNavBar";
import { USER_PROFILE_QUERY } from "@/lib/sanity/queries";
import { getLocalStorageItem } from "@/utils/localStorage";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity/client";

export default function ProfileSettingPage() {
  const [authInfo, setAuthInfo] = useState({
    user: { username: "", id: "" },
  });

  const [userProfile, setUserProfile] = useState({
    username: "",
    firstName: "",
    address: "",
    city: "",
    email: "",
    userId: "",
    lastName: "",
    mobile: "",
    state: "",
    zipCode: "",
    country: "",
  });

  useEffect(() => {
    setAuthInfo(getLocalStorageItem("auth-info"));
  }, []);

  useEffect(() => {
    function loadData() {
      client
        .fetch(USER_PROFILE_QUERY, { userId: authInfo.user.id }, {})
        .then((data) => {
          if (data.length > 0) {
            setUserProfile(data[0]);
          }
        });
    }

    loadData();
  }, [authInfo.user.id]);

  return (
    <main>
      <Script src="/js/index.js" />
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
            <h2 className="m-0">Profile Setting</h2>
          </div>
        </div>
      </section>

      <div className="dashboard-section pt-120 pb-120 bg--section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card custom--card">
                <div className="card-body">
                  <div className="row gy-4 justify-content-center flex-wrap-reverse">
                    <div className="col-md-5 col-lg-4">
                      <ul className="list-group list-group-flush bg--light h-100 p-3">
                        <li className="list-group-item d-flex flex-column justify-content-between border-0 bg-transparent">
                          <span className="fw-bold text-muted">
                            {userProfile?.username}
                          </span>
                          <small className="text-muted">
                            <i className="la la-user"></i> Userame
                          </small>
                        </li>
                        <li className="list-group-item d-flex flex-column justify-content-between border-0 bg-transparent">
                          <span className="fw-bold text-muted">
                            {userProfile?.email}
                          </span>
                          <small className="text-muted">
                            <i className="la la-envelope"></i> Email
                          </small>
                        </li>
                        <li className="list-group-item d-flex flex-column justify-content-between border-0 bg-transparent">
                          <span className="fw-bold text-muted">
                            {userProfile?.mobile}
                          </span>
                          <small className="text-muted">
                            <i className="la la-mobile"></i> Mobile
                          </small>
                        </li>
                        <li className="list-group-item d-flex flex-column justify-content-between border-0 bg-transparent">
                          <span className="fw-bold text-muted">
                            {userProfile?.country}
                          </span>
                          <small className="text-muted">
                            <i className="la la-globe"></i> Country
                          </small>
                        </li>

                        <li className="list-group-item d-flex flex-column justify-content-between border-0 bg-transparent">
                          <span className="fw-bold text-muted">
                            {userProfile?.address}
                          </span>
                          <small className="text-muted">
                            <i className="la la-map-marked"></i> Address
                          </small>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                      <form className="register py-3 pe-3 ps-3 ps-md-0">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">First Name</label>
                              <input
                                type="text"
                                className="form-control cmn--form--control"
                                readOnly={true}
                                defaultValue={userProfile?.firstName}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">Last Name</label>
                              <input
                                type="text"
                                className="form-control cmn--form--control"
                                readOnly={true}
                                defaultValue={userProfile?.lastName}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">State</label>
                              <input
                                type="text"
                                className="form-control cmn--form--control"
                                readOnly={true}
                                defaultValue={userProfile?.state}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">City</label>
                              <input
                                type="text"
                                className="form-control cmn--form--control"
                                readOnly={true}
                                defaultValue={userProfile?.city}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">Zip Code</label>
                              <input
                                type="text"
                                className="form-control cmn--form--control"
                                readOnly={true}
                                defaultValue={userProfile?.zipCode}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">Address</label>
                              <input
                                type="text"
                                className="form-control cmn--form--control"
                                readOnly={true}
                                defaultValue={userProfile?.address}
                              />
                            </div>
                          </div>
                        </div>
                        <button type="button" className="cmn--btn btn-block">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
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
