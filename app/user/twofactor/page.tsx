import BottomNavBar from "@/components/navigation/user/BottomNavBar";
import TopNavBar from "@/components/navigation/user/TopNavBar";
import Link from "next/link";
import Script from "next/script";

export default function TwoFactorPage() {
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
            <h2 className="m-0">2FA Setting</h2>
          </div>
        </div>
      </section>

      <div className="dashboard-section pt-120 pb-120 bg--section">
        <div className="container">
          <div className="row justify-content-center gy-4">
            <div className="col-md-6">
              <div className="card custom--card">
                <div className="card-header">
                  <h5 className="card-title">Add Your Account</h5>
                </div>

                <div className="card-body">
                  <h6 className="mb-3">
                    Use the QR code or setup key on your Google Authenticator
                    app to add your account.
                  </h6>

                  <div className="form-group mx-auto text-center">
                    <img
                      className="mx-auto"
                      src="https://chart.googleapis.com/chart?chs=200x200&amp;chld=M|0&amp;cht=qr&amp;chl=otpauth%3A%2F%2Ftotp%2Fpure_smoke%40CryptoPlus+Trader%3Fsecret%3DWYEYTOWAOPC77M56"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Setup Key</label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="key"
                        value="WYEYTOWAOPC77M56"
                        className="form-control cmn--form--control referralURL"
                        readOnly
                      />
                      <button
                        type="button"
                        className="input-group-text copytext"
                        id="copyBoard"
                      >
                        <i className="fa fa-copy"></i>
                      </button>
                    </div>
                  </div>

                  <label className="mb-3">
                    <i className="fa fa-info-circle"></i> Help
                  </label>
                  <p>
                    Google Authenticator is a multifactor app for mobile
                    devices. It generates timed codes used during the 2-step
                    verification process. To use Google Authenticator, install
                    the Google Authenticator application on your mobile device.
                    <a
                      className="text--base"
                      href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en"
                      target="_blank"
                    >
                      Download
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card custom--card">
                <div className="card-header">
                  <h5 className="card-title">Enable 2FA Security</h5>
                </div>
                <form
                  action="https://www.cryptoplustrader.com/user/twofactor/enable"
                  method="POST"
                >
                  <div className="card-body">
                    <input
                      type="hidden"
                      name="_token"
                      value="WrC7nzldwY9MDhqeq59E49GEUTmKWdBFbxBYg7KI"
                    />
                    <input type="hidden" name="key" value="WYEYTOWAOPC77M56" />
                    <div className="form-group">
                      <label className="form-label">
                        Google Authenticatior OTP
                      </label>
                      <input
                        type="text"
                        className="form-control cmn--form--control"
                        name="code"
                        required
                      />
                    </div>
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
