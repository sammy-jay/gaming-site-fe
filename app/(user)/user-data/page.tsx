export default function UserDataPage(){
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
                      className=""
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
              <h2 className="m-0">User Data</h2>
            </div>
          </div>
        </section>

        <div className="dashboard-section pt-120 pb-120 bg--section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <div className="card custom--card">
                  <div className="card-body">
                    <div className="alert bg--section" role="alert">
                      <strong> Complete your profile</strong>
                      <p className="mt-0">
                        You need to complete your profile by providing below
                        information.
                      </p>
                    </div>
                    <form
                      method="POST"
                      action="https://www.cryptoplustrader.com/user/user-data-submit"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        value="WrC7nzldwY9MDhqeq59E49GEUTmKWdBFbxBYg7KI"
                      />
                      <div className="row">
                        <div className="form-group col-sm-6">
                          <label className="form-label">First Name</label>
                          <input
                            type="text"
                            className="form-control cmn--form--control"
                            name="firstname"
                            value=""
                            required
                          />
                        </div>

                        <div className="form-group col-sm-6">
                          <label className="form-label">Last Name</label>
                          <input
                            type="text"
                            className="form-control cmn--form--control"
                            name="lastname"
                            value=""
                            required
                          />
                        </div>
                        <div className="form-group col-sm-6">
                          <label className="form-label">Address</label>
                          <input
                            type="text"
                            className="form-control cmn--form--control"
                            name="address"
                            value=""
                          />
                        </div>
                        <div className="form-group col-sm-6">
                          <label className="form-label">State</label>
                          <input
                            type="text"
                            className="form-control cmn--form--control"
                            name="state"
                            value=""
                          />
                        </div>
                        <div className="form-group col-sm-6">
                          <label className="form-label">Zip Code</label>
                          <input
                            type="text"
                            className="form-control cmn--form--control"
                            name="zip"
                            value=""
                          />
                        </div>

                        <div className="form-group col-sm-6">
                          <label className="form-label">City</label>
                          <input
                            type="text"
                            className="form-control cmn--form--control"
                            name="city"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="cmn--btn btn-block">
                          Submit
                        </button>
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