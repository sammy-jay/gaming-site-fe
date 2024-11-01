import Link from "next/link";

export default function DashboardPage() {
  return (
    <main>
      <Link href="#" className="scrollToTop">
        <i className="las la-angle-up"></i>
      </Link>

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
      </header>

      <section
        className="hero-section bg--overlay bg_img bg_fixed"
        data-background="https://www.cryptoplustrader.com/assets/images/frontend/breadcrumb/605ed645dc0fa1616827973.jpg"
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
              <div className="alert bg--body mb-0">
                <h4 className="alert-heading text--danger">
                  KYC Verification Required
                </h4>
                <hr />
                <p className="mb-0">
                  Dear User, we need your KYC documents to verify the
                  authenticity of your information and to help you recover your
                  account in the event that you lose it. After verification,
                  your data is automatically deleted from our system and thus
                  removes the risk of any form of re-use.
                  <Link href="/user/kyc-form" className="text--base fw-bold">
                    Click Here to Verify
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="dashboard__item">
                <div className="dashboard__thumb">
                  <i className="las la-dollar-sign"></i>
                </div>
                <div className="dashboard__content">
                  <h4 className="dashboard__title">$0.00</h4>
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
                  <h4 className="dashboard__title">$0.00</h4>
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
                  <h4 className="dashboard__title">$0.00</h4>
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
                  <Link href="/user/trade/log" className="btn btn--sm btn--base">
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
                      <Link href="/policy/terms-of-service/94">Terms Of Service</Link>
                    </li>
                    <li>
                      <Link href="/policy/privacy-policy/92">Privacy Policy</Link>
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
                        <Link href="tel:+1 (615) 769-8768">+1 (615) 769-8768</Link>
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
