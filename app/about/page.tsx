import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
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
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <Link href="/">
                  <img
                    src="https://www.cryptoplustrader.com/assets/images/logoIcon/logo.png"
                    alt="image"
                  />
                </Link>
              </div>
              <ul className="menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link className="active" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="">
                    Contact
                  </Link>
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
            <h2 className="m-0">About</h2>
          </div>
        </div>
      </section>

      <section className="predict-type-section pb-120 pt-120 bg--section">
        <div className="container">
          <div className="row gy-5">
            <div className="section__header">
              <h3 className="title">
                Trading with us comes with different services
              </h3>
              <p>There are various services we offer:</p>
            </div>
          </div>
          <div className="row g-xl-2 g-lg-4 g-md-2 g-3">
            <div className="col-xl-2 col-md-3 col-sm-6">
              <div
                className="predict-type-item predictModelShow"
                data-predict='{"title":"Price Prediction","description":"We offer price prediction for complicated trades to help users analyze the feasibility of an intended trade.","icon":"\u003Ci className=\u0022fas fa-network-wired\u0022\u003E\u003C\/i\u003E","button_name":"Try Demo","button_url":"user\/register"}'
              >
                <div className="icon">
                  <i className="fas fa-network-wired"></i>
                </div>
                <span className="title">Price Prediction</span>
              </div>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-6">
              <div
                className="predict-type-item predictModelShow"
                data-predict='{"title":"Demo Trade","description":"You can also practice trade to familiarize yourself with the system.","icon":"\u003Ci className=\u0022lar la-grin-squint-tears\u0022\u003E\u003C\/i\u003E","button_name":"Get Started","button_url":"login"}'
              >
                <div className="icon">
                  <i className="lar la-grin-squint-tears"></i>
                </div>
                <span className="title">Demo Trade</span>
              </div>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-6">
              <div
                className="predict-type-item predictModelShow"
                data-predict='{"title":"Trade","description":"You are presented with a variety of cryptocurrencies to trade with and your results are displayed on real-time.","icon":"\u003Ci className=\u0022lab la-grav\u0022\u003E\u003C\/i\u003E","button_name":"Try Quick Demo","button_url":"login"}'
              >
                <div className="icon">
                  <i className="lab la-grav"></i>
                </div>
                <span className="title">Trade</span>
              </div>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-6">
              <div
                className="predict-type-item predictModelShow"
                data-predict='{"title":"High\/Low Options","description":"Shorting are absolutely allowed; you can also stake high or stake low.","icon":"\u003Ci className=\u0022las la-life-ring\u0022\u003E\u003C\/i\u003E","button_name":"Try Quick Demo","button_url":"login"}'
              >
                <div className="icon">
                  <i className="las la-life-ring"></i>
                </div>
                <span className="title">High/Low Options</span>
              </div>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-6">
              <div
                className="predict-type-item predictModelShow"
                data-predict='{"title":"Turbo Spread","description":"Calculations are lights-speed fast and done on real-time basis.","icon":"\u003Ci className=\u0022las la-helicopter\u0022\u003E\u003C\/i\u003E","button_name":"Try Quick Demo","button_url":"login"}'
              >
                <div className="icon">
                  <i className="las la-helicopter"></i>
                </div>
                <span className="title">Turbo Spread</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade custom--modal" id="predictModel">
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable modal-fullscreen-lg-down">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title"></h6>
              <span
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times"></i>
              </span>
            </div>
            <div className="modal-body">
              <div className="predict-type-content">
                <p className="text-white description"></p>
                <div className="pt-2 d-flex flex-wrap couple--buttons">
                  <Link
                    href="/auth/sign-up"
                    className="cmn--btn btn-name"
                  ></Link>
                  <Link href="/auth/sign-up" className="cmn--outline--btn">
                    Sign Up Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="feature-section pt-120 pb-120 bg--section">
        <div className="container">
          <div className="section__header">
            <h3 className="title">Why Trade with Us</h3>
            <p>
              Trading with CryptoPlus Trader comes with loads of perks and
              privileges such as:
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="feature__item">
                <div className="feature__thumb">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <div className="feature__content">
                  <h6 className="feature__title">Stay Up To Date</h6>
                  <p>
                    We keep you up-to-date with the latest on crypto trading to
                    make sure you are not left behind.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature__item">
                <div className="feature__thumb">
                  <i className="fas fa-bed"></i>
                </div>
                <div className="feature__content">
                  <h6 className="feature__title">Make Money In your Sleep</h6>
                  <p>
                    You can automate trade to go 24 hours on your behalf and
                    make money while you sleep.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature__item">
                <div className="feature__thumb">
                  <i className="las la-journal-whills"></i>
                </div>
                <div className="feature__content">
                  <h6 className="feature__title">Best Payout</h6>
                  <p>
                    We save you the stress of having to re-trade in order to
                    access your funds because your winnings are paid directly
                    into your bank account.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature__item">
                <div className="feature__thumb">
                  <i className="las la-level-up-alt"></i>
                </div>
                <div className="feature__content">
                  <h6 className="feature__title">Quick Fund Access</h6>
                  <p>
                    Deposits and withdrawals are swift, so you are in total
                    control of your money and what you want to do with it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature__item">
                <div className="feature__thumb">
                  <i className="lar la-kiss-wink-heart"></i>
                </div>
                <div className="feature__content">
                  <h6 className="feature__title">Best Payout</h6>
                  <p>
                    Trade profits rise to as much as 28.3% per win which sits at
                    the table of some of the highest in the game.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature__item">
                <div className="feature__thumb">
                  <i className="las la-hockey-puck"></i>
                </div>
                <div className="feature__content">
                  <h6 className="feature__title">Amazing Support</h6>
                  <p>
                    We are available 24/7 for you, to answer any questions you
                    may have and provide answers and solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="app-section overflow-hidden pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center justify-content-between gy-5">
            <div className="col-lg-6 col-xl-5">
              <div className="app-thumb rtl">
                <img
                  className="w-100"
                  src="https://www.cryptoplustrader.com/assets/images/frontend/app/6056f1d0ac9261616310736.png"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="app-content">
                <div className="section__header section__header__left">
                  <h3 className="title">
                    Now It&#039;s more easy to make a trade by mobile
                  </h3>
                  <p>
                    Trading has never been this easy, one click away from
                    profit.
                  </p>
                </div>
                <div className="couple--buttons">
                  <Link href="user/login" target="__blank">
                    <img src="https://www.cryptoplustrader.com/assets/templates/basic/images/app/google-play.svg" />
                  </Link>
                  <Link href="user/login" target="__blank">
                    <img src="https://www.cryptoplustrader.com/assets/templates/basic/images/app/app-store-btn.svg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-section bg--section pt-120 pb-120">
        <div className="container">
          <div className="section__header">
            <h3 className="title">Latest News</h3>
            <p>
              Catch up on our recent updates, tips and happenings surrounding
              the crypto trading world.
            </p>
          </div>
          <div className="row justify-content-center">
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
