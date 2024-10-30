export default function DepositPage(){
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
                    <a href="javascript:void(0)" className="active">
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
              <h2 className="m-0">Deposit Methods</h2>
            </div>
          </div>
        </section>

        <div className="dashboard-section pt-120 pb-120 bg--section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <form
                  action="https://www.cryptoplustrader.com/user/deposit/insert"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="WrC7nzldwY9MDhqeq59E49GEUTmKWdBFbxBYg7KI"
                  />
                  <input type="hidden" name="method_code" />
                  <input type="hidden" name="currency" />
                  <div className="card custom--card">
                    <div className="card-header">
                      <h5 className="card-title">Deposit</h5>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label className="form-label">Select Gateway</label>
                        <select
                          className="form-control cmn--form--control"
                          name="gateway"
                          required
                        >
                          <option value="" selected disabled>
                            Select One
                          </option>
                          <option
                            value="1000"
                            data-gateway='{"id":1,"name":"Bitcoin Deposit","currency":"BTC","symbol":"","method_code":"1000","gateway_alias":"bitcoin_deposit","min_amount":"100.00000000","max_amount":"1000000.00000000","percent_charge":"0.03","fixed_charge":"0.50000000","rate":"0.00001500","image":null,"gateway_parameter":null,"created_at":"2023-07-14T23:46:38.000000Z","updated_at":"2024-05-30T22:02:03.000000Z","method":{"id":58,"form_id":"8","code":"1000","name":"Bitcoin Deposit","alias":"bitcoin_deposit","status":"1","gateway_parameters":"[]","supported_currencies":[],"crypto":"0","extra":null,"description":"&lt;br&gt;\r\n&lt;p style=\"background-color: yellow; text-align: center; color:black;\"&gt;bc1q3vcmx5alu3w2u5ra4mxdaeulpr48vggfn3257u368lq2fv9dxklq9mndd8&amp;nbsp;&lt;br&gt;(Copy to Wallet)&lt;\/p&gt;\r\n&lt;p style=\"text-align: center;\"&gt;&lt;img src=\"https:\/\/cryptoplustrader.com\/qr.jpeg\" width=\"30%\" height=\"30%&amp;quot;\/\"&gt;\r\n&lt;br&gt;(Scan QR Code)&lt;\/p&gt;","created_at":"2023-07-14T23:46:38.000000Z","updated_at":"2024-05-30T22:02:03.000000Z"}}'
                          >
                            Bitcoin Deposit
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Amount</label>
                        <div className="input-group">
                          <input
                            type="number"
                            step="any"
                            name="amount"
                            className="form-control cmn--form--control"
                            value=""
                            autocomplete="off"
                            required
                          />
                          <span className="input-group-text">USD</span>
                        </div>
                      </div>
                      <div className="mt-3 preview-details d-none">
                        <ul className="list-group list-group-flush mb-3">
                          <li className="list-group-item d-flex justify-content-between bg-transparent text-white b-input">
                            <span>Limit</span>
                            <span>
                              <span className="min fw-bold">0</span> USD -
                              <span className="max fw-bold">0</span> USD
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between bg-transparent text-white b-input">
                            <span>Charge</span>
                            <span>
                              <span className="charge fw-bold">0</span> USD
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between bg-transparent text-white b-input">
                            <span>Payable</span>
                            <span>
                              <span className="payable fw-bold"> 0</span> USD
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
                              Conversion with
                              <span className="method_currency"></span> and
                              final value will Show on next step
                            </span>
                          </li>
                        </ul>
                      </div>
                      <button type="submit" className="cmn--btn btn-block">
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