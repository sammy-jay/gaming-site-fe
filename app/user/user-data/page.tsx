import BottomNavBar from "@/components/navigation/user/BottomNavBar";
import TopNavBar from "@/components/navigation/user/TopNavBar";
import Link from "next/link";
import Script from "next/script";

export default function UserDataPage() {
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