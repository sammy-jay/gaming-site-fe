import BottomNavBar from "@/components/navigation/BottomNavBar";
import TopNavBar from "@/components/navigation/TopNavBar";
import Link from "next/link";

export default function BlogHomePage() {
  return (
    <main>
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
            <h2 className="m-0">Blog</h2>
          </div>
        </div>
      </section>

      <section className="blog-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center gy-4">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="post__item h-100">
                <div className="post__thumb">
                  <Link href="/blog/105/trading-for-beginners">
                    <img src="https://www.cryptoplustrader.com/assets/images/frontend/blog/thumb_63f345cd2c7101676887501.jpg" />
                  </Link>
                </div>
                <div className="post__content">
                  <h6 className="post__title">
                    <Link href="/blog/105/trading-for-beginners">
                      Trading for Beginners
                    </Link>
                  </h6>
                  <div className="meta__date">
                    <div className="meta__item">
                      <i className="las la-calendar"></i>
                      20 Feb 2023
                    </div>
                  </div>
                  <div className="blog-short-desc">
                    <Link href="/blog/105/trading-for-beginners">
                      Trading for beginners can be exciting – and overwhelming.
                      That’s why we’ve outlined everything you need to know for
                      your...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="post__item h-100">
                <div className="post__thumb">
                  <Link href="/blog/104/introduction-to-cryptocurrency-trading">
                    <img src="https://www.cryptoplustrader.com/assets/images/frontend/blog/thumb_63f342fde09701676886781.jpg" />
                  </Link>
                </div>
                <div className="post__content">
                  <h6 className="post__title">
                    <Link href="/blog/104/introduction-to-cryptocurrency-trading">
                      Introduction to Cryptocurrency Trading
                    </Link>
                  </h6>
                  <div className="meta__date">
                    <div className="meta__item">
                      <i className="las la-calendar"></i>
                      20 Feb 2023
                    </div>
                  </div>
                  <div className="blog-short-desc">
                    <Link href="/blog/104/introduction-to-cryptocurrency-trading">
                      Cryptocurrency trading is the act of speculating on
                      cryptocurrency price movements via a CFD trading account,
                      or buying...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="post__item h-100">
                <div className="post__thumb">
                  <Link href="/blog/103/what-is-algorithmic-trading-and-how-does-it-work">
                    <img src="https://www.cryptoplustrader.com/assets/images/frontend/blog/thumb_63f34273c29a21676886643.jpg" />
                  </Link>
                </div>
                <div className="post__content">
                  <h6 className="post__title">
                    <Link href="/blog/103/what-is-algorithmic-trading-and-how-does-it-work">
                      What is Algorithmic Trading and How Does it Work?
                    </Link>
                  </h6>
                  <div className="meta__date">
                    <div className="meta__item">
                      <i className="las la-calendar"></i>
                      20 Feb 2023
                    </div>
                  </div>
                  <div className="blog-short-desc">
                    <Link href="/blog/103/what-is-algorithmic-trading-and-how-does-it-work">
                      What Is Algorithmic Trading?Algorithmic trading (also
                      called automated trading, black-box
                      trading, or algo-trading) uses...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="post__item h-100">
                <div className="post__thumb">
                  <Link href="/blog/102/how-to-use-technical-analysis-in-trading">
                    <img src="https://www.cryptoplustrader.com/assets/images/frontend/blog/thumb_63f34173307941676886387.jpg" />
                  </Link>
                </div>
                <div className="post__content">
                  <h6 className="post__title">
                    <Link href="/blog/102/how-to-use-technical-analysis-in-trading">
                      How to Use Technical Analysis in Trading
                    </Link>
                  </h6>
                  <div className="meta__date">
                    <div className="meta__item">
                      <i className="las la-calendar"></i>
                      20 Feb 2023
                    </div>
                  </div>
                  <div className="blog-short-desc">
                    <Link href="/blog/102/how-to-use-technical-analysis-in-trading">
                      What is Technical Analysis?Technical analysis is a tool,
                      or , used to predict the probable future price movement of
                      a se...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="post__item h-100">
                <div className="post__thumb">
                  <Link href="/blog/101/trading-vs-investing">
                    <img src="https://www.cryptoplustrader.com/assets/images/frontend/blog/thumb_63f3464cb6a5c1676887628.jpg" />
                  </Link>
                </div>
                <div className="post__content">
                  <h6 className="post__title">
                    <Link href="/blog/101/trading-vs-investing">
                      Trading vs. Investing
                    </Link>
                  </h6>
                  <div className="meta__date">
                    <div className="meta__item">
                      <i className="las la-calendar"></i>
                      20 Feb 2023
                    </div>
                  </div>
                  <div className="blog-short-desc">
                    <Link href="/blog/101/trading-vs-investing">
                      TradingTrading involves more frequent transactions, such
                      as the buying and selling of stocks, commodities, or other
                      inst...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="post__item h-100">
                <div className="post__thumb">
                  <Link href="/blog/100/5-tips-to-master-cryptocurrency-trading-in-2023">
                    <img src="https://www.cryptoplustrader.com/assets/images/frontend/blog/thumb_63f33ee17935a1676885729.jpg" />
                  </Link>
                </div>
                <div className="post__content">
                  <h6 className="post__title">
                    <Link href="/blog/100/5-tips-to-master-cryptocurrency-trading-in-2023">
                      5 Tips to Master Cryptocurrency Trading in 2023
                    </Link>
                  </h6>
                  <div className="meta__date">
                    <div className="meta__item">
                      <i className="las la-calendar"></i>
                      20 Feb 2023
                    </div>
                  </div>
                  <div className="blog-short-desc">
                    <Link href="/blog/100/5-tips-to-master-cryptocurrency-trading-in-2023">
                      For many years, investors have been hooked on traditional
                      financial instruments like stocks, bonds, commodities, and
                      for...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
