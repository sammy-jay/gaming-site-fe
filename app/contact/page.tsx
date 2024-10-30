export default function ContactPage() {
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
              <li className="links">
                <a href="https://www.cryptoplustrader.com/user/login">
                  Sign in
                </a>
              </li>
              <li className="links b-left">
                <a href="https://www.cryptoplustrader.com/user/register">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <a href="https://www.cryptoplustrader.com">
                  <img
                    src="https://www.cryptoplustrader.com/assets/images/logoIcon/logo.png"
                    alt="image"
                  />
                </a>
              </div>
              <ul className="menu">
                <li>
                  <a className="" href="https://www.cryptoplustrader.com">
                    Home
                  </a>
                </li>
                <li>
                  <a className="" href="https://www.cryptoplustrader.com/faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://www.cryptoplustrader.com/services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a className="" href="https://www.cryptoplustrader.com/about">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://www.cryptoplustrader.com/blog" className="">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cryptoplustrader.com/contact"
                    className="active"
                  >
                    Contact
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
            <h2 className="m-0">Contact Us</h2>
          </div>
        </div>
      </section>

      <div className="contact-section pt-120 pb-80 move--top">
        <div className="container">
          <div className="account-wrapper mw-100 bg--glass">
            <form className="verify-gcaptcha row" method="post" action="">
              <input
                type="hidden"
                name="_token"
                value="4nZek9oER2Of1dsJXS3jX9K4M401hIHBj7IqWBFw"
              />{" "}
              <div className="cmn--form--group form-group col-md-6">
                <label htmlFor="name" className="cmn--label text--white w-100">
                  Full Name
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text h-100">
                      <i className="las la-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control cmn--form--control"
                    name="name"
                    required
                  />
                </div>
              </div>
              <div className="cmn--form--group form-group col-md-6">
                <label htmlFor="email" className="cmn--label text--white w-100">
                  E-Mail Address
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text h-100">
                      <i className="las la-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control cmn--form--control"
                    name="email"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="cmn--form--group form-group col-md-12">
                <div className="input-group">
                  <label className="cmn--label text--white w-100">
                    Subject
                  </label>
                  <div className="input-group-prepend">
                    <span className="input-group-text h-100">
                      <i className="las la-language"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control cmn--form--control"
                    name="subject"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="cmn--form--group form-group col-md-12">
                <div className="input-group">
                  <label
                    htmlFor="message"
                    className="cmn--label text--white w-100"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control cmn--form--control"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="cmn--form--group form-group col-md-12 text-end mb-0">
                <button type="submit" className="cmn--btn btn-block">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="call-to-action bg--base pt-50 pb-50">
        <div className="container">
          <div className="call-to-wrapper p-0">
            <h4 className="title text--dark">
              Get Started Now for instant profit
            </h4>
            <div className="call-to-btn">
              <a
                href="user/register"
                className="cmn--btn text--black bg--white border-0"
              >
                Get Started
              </a>
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
                    {" "}
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
                      <a href="https://www.cryptoplustrader.com">Home</a>
                    </li>
                    <li>
                      <a href="https://www.cryptoplustrader.com/contact">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="https://www.cryptoplustrader.com/user/login">
                        Sign In
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
            Copyright © 2024. All Rights Reserved By{" "}
            <a href="https://www.cryptoplustrader.com" className="text--base">
              CryptoPlus Trader
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
