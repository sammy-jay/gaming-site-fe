export default function DashboardPage(){
    return (
      <main>
        <a href="javascript:void(0)" className="scrollToTop">
          <i className="las la-angle-up"></i>
        </a>

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
                      <a href="https://www.cryptoplustrader.com/ticket">
                        Support Ticket
                      </a>
                    </li>
                    <li>
                      <a href="https://www.cryptoplustrader.com/user/profile-setting">
                        Profile Setting
                      </a>
                    </li>
                    <li>
                      <a href="https://www.cryptoplustrader.com/user/change-password">
                        Change Password
                      </a>
                    </li>
                    <li>
                      <a href="https://www.cryptoplustrader.com/user/twofactor">
                        2FA Security
                      </a>
                    </li>
                    <li>
                      <a href="https://www.cryptoplustrader.com/user/logout">
                        Logout
                      </a>
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
                  <a href="https://www.cryptoplustrader.com">
                    <img src="https://www.cryptoplustrader.com/assets/images/logoIcon/logo.png" />
                  </a>
                </div>
                <ul className="menu">
                  <li>
                    <a
                      href="https://www.cryptoplustrader.com/user/dashboard"
                      className="active"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="">
                      Practice
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="https://www.cryptoplustrader.com/user/practice/trade">
                          Practice Now
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cryptoplustrader.com/user/practice/trade/log">
                          Practice Log
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="">
                      Trade
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="https://www.cryptoplustrader.com/user/trade">
                          Trade Now
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cryptoplustrader.com/user/trade/log">
                          Trade Log
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="">
                      Deposit
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="https://www.cryptoplustrader.com/user/deposit">
                          Deposit Money
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cryptoplustrader.com/user/deposit/history">
                          Deposit History
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="">
                      Withdraw
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="https://www.cryptoplustrader.com/user/withdraw">
                          Withdraw Money
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cryptoplustrader.com/user/withdraw/history">
                          Withdraw History
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="">
                      Referral
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="https://www.cryptoplustrader.com/user/referral/log">
                          Referral Log
                        </a>
                      </li>

                      <li>
                        <a href="https://www.cryptoplustrader.com/user/commissions/history">
                          Commission Log
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className=""
                      href="https://www.cryptoplustrader.com/user/transactions"
                    >
                      Transaction Log
                    </a>
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
                    authenticity of your information and to help you recover
                    your account in the event that you lose it. After
                    verification, your data is automatically deleted from our
                    system and thus removes the risk of any form of re-use.
                    <a
                      href="https://www.cryptoplustrader.com/user/kyc-form"
                      className="text--base fw-bold"
                    >
                      Click Here to Verify
                    </a>
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
                    <a
                      href="https://www.cryptoplustrader.com/user/transactions"
                      className="btn btn--sm btn--base"
                    >
                      View All
                    </a>
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
                    <a
                      href="https://www.cryptoplustrader.com/user/deposit/history"
                      className="btn btn--sm btn--base"
                    >
                      View All
                    </a>
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
                    <a
                      href="https://www.cryptoplustrader.com/user/withdraw/history"
                      className="btn btn--sm btn--base"
                    >
                      View All
                    </a>
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
                    <a
                      href="https://www.cryptoplustrader.com/user/transactions"
                      className="btn btn--sm btn--base"
                    >
                      View All
                    </a>
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
                    <a
                      href="https://www.cryptoplustrader.com/user/trade/log"
                      className="btn btn--sm btn--base"
                    >
                      View All
                    </a>
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
                    <a
                      href="https://www.cryptoplustrader.com/user/trade/wining/log"
                      className="btn btn--sm btn--base"
                    >
                      View All
                    </a>
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
                    <a
                      href="https://www.cryptoplustrader.com/user/trade/losing/log"
                      className="btn btn--sm btn--base"
                    >
                      View All
                    </a>
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
                    <a
                      href="https://www.cryptoplustrader.com/user/trade/draw/log"
                      className="btn btn--sm btn--base"
                    >
                      View All
                    </a>
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
                    readonly
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
                        <td colspan="100%" className="text-center text-muted">
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
                    <a href="https://www.cryptoplustrader.com" className="logo">
                      <img src="https://www.cryptoplustrader.com/assets/images/logoIcon/logo.png" />
                    </a>
                    <p>
                      Make signals become figures, figures become money and
                      money become yours.
                    </p>
                    <ul className="post__share"></ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer__widget">
                    <h5 className="title">Quick Links</h5>
                    <ul className="widget__links">
                      <li>
                        <a href="https://www.cryptoplustrader.com">Home</a>
                      </li>
                      <li>
                        <a href="https://www.cryptoplustrader.com/contact">
                          Contact
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cryptoplustrader.com/user/dashboard">
                          Dashboard
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="footer__widget">
                    <h5 className="title">Policies</h5>
                    <ul className="widget__links">
                      <li>
                        <a href="https://www.cryptoplustrader.com/policy/terms-of-use/99">
                          Terms of Use
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cryptoplustrader.com/policy/terms-of-service/94">
                          Terms Of Service
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cryptoplustrader.com/policy/privacy-policy/92">
                          Privacy Policy
                        </a>
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
                          <a href="mailto:support@cryptoplustrader.com">
                            support@cryptoplustrader.com
                          </a>
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
                          <a href="tel:+1 (615) 769-8768">+1 (615) 769-8768</a>
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
                          <a href="javascript:void(0)">
                            1207 Bittern Way Suisun City, California.
                          </a>
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
              <a href="https://www.cryptoplustrader.com" className="text--base">
                CryptoPlus Trader
              </a>
            </div>
          </div>
        </footer>
      </main>
    );
}