import BottomNavBar from "@/components/navigation/BottomNavBar";
import Link from "next/link";

export default function FAQPage() {
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
              <li className="links">
                <Link href="/auth/sign-in">Sign in</Link>
              </li>
              <li className="links b-left">
                <Link href="/auth/sign-up">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
        <BottomNavBar />
      </header>

      <section
        className="hero-section bg--overlay bg_img bg_fixed"
        id="user-hero-section"
      >
        <div className="container">
          <div className="hero-content text-center">
            <h2 className="m-0">FAQ</h2>
          </div>
        </div>
      </section>

      <div className="faqs-sectioin pt-120 pb-120">
        <div className="container">
          <div className="section__header">
            <h3 className="title">Frequently Asked Questions</h3>
            <p>
              This is a compilation of common queries and their answers to
              address recurring concerns or uncertainties.
            </p>
          </div>
          <div className="faq__wrapper">
            <div className="faq__item open active">
              <div className="faq__title">
                <h6 className="title">How Safe is my Money?</h6>
                <span className="right__icon"></span>
              </div>
              <div className="faq__content">
                <p>
                  Cryptocurrencies are secured by an end-to-end encryption
                  enabled by Blockchain, and this guarantees safety and
                  seamlessness in transactions. Be rest assured that not a cent
                  is unaccounted for.
                </p>
              </div>
            </div>
            <div className="faq__item">
              <div className="faq__title">
                <h6 className="title">How Can I Contact Support?</h6>
                <span className="right__icon"></span>
              </div>
              <div className="faq__content">
                <p>
                  We have our 24/7 support system. You can either have a Live
                  chat with us through our live chat option or you can leave us
                  a mail.
                </p>
              </div>
            </div>
            <div className="faq__item">
              <div className="faq__title">
                <h6 className="title">How quick is withdrawal?</h6>
                <span className="right__icon"></span>
              </div>
              <div className="faq__content">
                <p>
                  Withdrawal through Bank transfer is as swift as 1 - 3 days,
                  depending on the receiving account.
                </p>
              </div>
            </div>
            <div className="faq__item">
              <div className="faq__title">
                <h6 className="title">
                  Asides Bitcoin, are there other coins available for trade?
                </h6>
                <span className="right__icon"></span>
              </div>
              <div className="faq__content">
                <p>
                  Absolutely. CPT houses as many as 13 cryptocurrencies in the
                  trade platform, some of which are Bitcoin, Ethereum, BNB, XRP,
                  LiteCoin, DogeCoin, Polkadot, etc. We also accept USDT
                  (Tether), USDCoin and other stablecoin.
                </p>
              </div>
            </div>
            <div className="faq__item">
              <div className="faq__title">
                <h6 className="title">How profitable is crypto trading?</h6>
                <span className="right__icon"></span>
              </div>
              <div className="faq__content">
                <p>
                  Trading in cryptocurrency can turn your capital from thousands
                  to millions if you play your cards right and make the right
                  calls. There&#039;s no limit to how much anyone can earn
                  trading in cryptocurrency.
                </p>
              </div>
            </div>
            <div className="faq__item">
              <div className="faq__title">
                <h6 className="title">Can I trade as a beginner?</h6>
                <span className="right__icon"></span>
              </div>
              <div className="faq__content">
                <p>
                  Trading with CPT is available in various difficulty levels. It
                  doesn&#039;t matter if you know the intricacies of
                  cryptocurrency or not.
                </p>
              </div>
            </div>
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
              <Link
                href="user/register"
                className="cmn--btn text--black bg--white border-0"
              >
                Get Started
              </Link>
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
                      <Link href="/auth/sign-in">Sign In</Link>
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
