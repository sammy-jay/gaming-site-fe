import Link from "next/link";

export default function ProfileSettingPage() {
  return (
    <main>
      <header className="header-section">
        <div className="header-top bg--section">
          <div className="container">
            <ul className="header-top-area">
              <li className="me-auto"></li>
              <li className="dashboard-dashboard-icon">
                <div className="avatar">
                  <span>PU</span>
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
                  <Link href="/user/dashboard" className="">
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
                      <Link href="/user/withdraw/history">
                        Withdraw History
                      </Link>
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
                      <Link href="/user/commissions/history">
                        Commission Log
                      </Link>
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
      </header>

      <section
        className="hero-section bg--overlay bg_img bg_fixed"
        data-background="https://www.cryptoplustrader.com/assets/images/frontend/breadcrumb/605ed645dc0fa1616827973.jpg"
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
                          <span className="fw-bold text-muted">pure_smoke</span>
                          <small className="text-muted">
                            <i className="la la-user"></i> Userame
                          </small>
                        </li>
                        <li className="list-group-item d-flex flex-column justify-content-between border-0 bg-transparent">
                          <span className="fw-bold text-muted">
                            soneyetolulope4@gmail.com
                          </span>
                          <small className="text-muted">
                            <i className="la la-envelope"></i> Email
                          </small>
                        </li>
                        <li className="list-group-item d-flex flex-column justify-content-between border-0 bg-transparent">
                          <span className="fw-bold text-muted">
                            +2348075032390
                          </span>
                          <small className="text-muted">
                            <i className="la la-mobile"></i> Mobile
                          </small>
                        </li>
                        <li className="list-group-item d-flex flex-column justify-content-between border-0 bg-transparent">
                          <span className="fw-bold text-muted">Nigeria</span>
                          <small className="text-muted">
                            <i className="la la-globe"></i> Country
                          </small>
                        </li>

                        <li className="list-group-item d-flex flex-column justify-content-between border-0 bg-transparent">
                          <span className="fw-bold text-muted">test 1234</span>
                          <small className="text-muted">
                            <i className="la la-map-marked"></i> Address
                          </small>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                      <form
                        className="register py-3 pe-3 ps-3 ps-md-0"
                        action=""
                        method="post"
                        encType="multipart/form-data"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="WrC7nzldwY9MDhqeq59E49GEUTmKWdBFbxBYg7KI"
                        />
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">First Name</label>
                              <input
                                type="text"
                                className="form-control cmn--form--control"
                                name="firstname"
                                value="Tolulope"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">Last Name</label>
                              <input
                                type="text"
                                className="form-control cmn--form--control"
                                name="lastname"
                                value="Soneye"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">State</label>
                              <input
                                type="text"
                                className="form-control cmn--form--control"
                                name="state"
                                value="Ogun"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">City</label>
                              <input
                                type="text"
                                className="form-control cmn--form--control"
                                name="city"
                                value="Sagamu"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">Zip Code</label>
                              <input
                                type="text"
                                className="form-control cmn--form--control"
                                name="zip"
                                value="121101"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label">Address</label>
                              <input
                                type="text"
                                className="form-control cmn--form--control"
                                name="address"
                                value="test 1234"
                              />
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="cmn--btn btn-block">
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
