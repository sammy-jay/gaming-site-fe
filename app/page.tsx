import BottomNavBar from "@/components/navigation/BottomNavBar";
import TopNavBar from "@/components/navigation/TopNavBar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="#" className="scrollToTop">
        <i className="las la-angle-up"></i>
      </Link>
      {/* <div className="overlay" />
      <div className="preloader">
        <div className="loader">
          <span>
            <img src="/images/logo.png" />
          </span>
        </div>
      </div> */}

      <header className="header-section">
        <TopNavBar/>
        <BottomNavBar />
      </header>

      <section
        className="banner-section bg--overlay bg_img"
        data-background="https://www.cryptoplustrader.com/assets/images/frontend/banner/608919b35c94e1619597747.jpg"
      >
        <div className="container">
          <div className="banner-wrapper">
            <div className="banner-content mt-xl-5">
              <h2 className="mb-[30px] tracking-normal text-[36px] lg:text-[48px]">
                Get up to 100% payout on as little as 0.1 pip
              </h2>
              <p className="banner-text">
                A platform that makes crypto trading as easy and profitable as
                possible.
              </p>
              <a href="https://accounts.tetracryptoplus.com/sign-up?sign_up_force_redirect_url=https%3A%2F%2Ftetracryptoplus.com%2Fuser%2Fuser-data&sign_in_force_redirect_url=https%3A%2F%2Ftetracryptoplus.com%2Fuser%2Fdashboard&redirect_url=https%3A%2F%2Ftetracryptoplus.com%2F" className="cmn--btn">
                Get Started
              </a>
            </div>
            <div className="banner-thumb">
              <img src="https://www.cryptoplustrader.com/assets/images/frontend/banner/608919c858e481619597768.png" />
              <div className="banner-anime-thumbs">
                <div className="banner-anime banner-anime1">
                  <img src="https://www.cryptoplustrader.com/assets/images/frontend/banner/60891a3fbf2dc1619597887.png" />
                </div>
                <div className="banner-anime banner-anime2">
                  <img src="https://www.cryptoplustrader.com/assets/images/frontend/banner/60891a475d57f1619597895.png" />
                </div>
                <div className="banner-anime banner-anime3">
                  <img src="https://www.cryptoplustrader.com/assets/images/frontend/banner/60891a4f407e01619597903.png" />
                </div>
                <div className="banner-anime banner-anime4">
                  <img src="https://www.cryptoplustrader.com/assets/images/frontend/banner/60891a5905b791619597913.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trend-trade-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-12">
              <div className="section__header ">
                <h3 className="title">Cryptocurrency Prices</h3>
                <p>The prices are updated in real-time.</p>
              </div>
              <div className="table-responsive">
                <table className="table cmn--table">
                  <thead>
                    <tr>
                      <th>S.N.</th>
                      <th>Name</th>
                      <th>1h%</th>
                      <th>Price</th>
                      <th>7d%</th>
                      <th>Market Cap</th>
                      <th>24h%</th>
                      <th>Volume(24h)</th>
                      <th>Circulating Supply</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <div className="author-info d-flex align-items-center">
                          <img src="https://www.cryptoplustrader.com/assets/images/crypto_currency/64aef3902367b1689187216.png" />
                          <div className="name">
                            <span className="d-block">BTC</span>
                            <small>Bitcoin</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge--danger">-0.19 %</span>
                      </td>
                      <td>62,901.09 USD</td>
                      <td>
                        <span className="badge badge--danger">-1.88 %</span>
                      </td>
                      <td>$1,243,198,029,865.10</td>
                      <td>
                        <span className="badge badge--success">1.02 %</span>
                      </td>
                      <td>$24,181,185,956.65</td>
                      <td>0.00 BTC</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <div className="author-info d-flex align-items-center">
                          <img src="https://www.cryptoplustrader.com/assets/images/crypto_currency/64aef3b100fb31689187249.png" />
                          <div className="name">
                            <span className="d-block">ETH</span>
                            <small>Ethereum</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge--danger">-0.06 %</span>
                      </td>
                      <td>2,466.56 USD</td>
                      <td>
                        <span className="badge badge--danger">-6.40 %</span>
                      </td>
                      <td>$296,922,464,550.20</td>
                      <td>
                        <span className="badge badge--success">1.48 %</span>
                      </td>
                      <td>$13,299,005,375.88</td>
                      <td>0.00 ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <div className="author-info d-flex align-items-center">
                          <img src="https://www.cryptoplustrader.com/assets/images/crypto_currency/64aef3e8710701689187304.png" />
                          <div className="name">
                            <span className="d-block">USDT</span>
                            <small>Tether</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge--danger">0.00 %</span>
                      </td>
                      <td>1.00 USD</td>
                      <td>
                        <span className="badge badge--danger">-0.03 %</span>
                      </td>
                      <td>$119,629,760,853.70</td>
                      <td>
                        <span className="badge badge--danger">-0.04 %</span>
                      </td>
                      <td>$47,808,399,966.31</td>
                      <td>0.00 USDT</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <div className="author-info d-flex align-items-center">
                          <img src="https://www.cryptoplustrader.com/assets/images/crypto_currency/64aef50fb4ee81689187599.png" />
                          <div className="name">
                            <span className="d-block">BNB</span>
                            <small>BNB</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge--success">0.10 %</span>
                      </td>
                      <td>571.47 USD</td>
                      <td>
                        <span className="badge badge--danger">-0.95 %</span>
                      </td>
                      <td>$83,395,794,702.71</td>
                      <td>
                        <span className="badge badge--success">1.42 %</span>
                      </td>
                      <td>$1,568,734,435.24</td>
                      <td>0.00 BNB</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <div className="author-info d-flex align-items-center">
                          <img src="https://www.cryptoplustrader.com/assets/images/crypto_currency/64aef5449155b1689187652.png" />
                          <div className="name">
                            <span className="d-block">USDC</span>
                            <small>USD Coin</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge--danger">0.00 %</span>
                      </td>
                      <td>1.00 USD</td>
                      <td>
                        <span className="badge badge--danger">-0.01 %</span>
                      </td>
                      <td>$35,485,054,117.79</td>
                      <td>
                        <span className="badge badge--danger">-0.03 %</span>
                      </td>
                      <td>$4,600,452,276.75</td>
                      <td>0.00 USDC</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <div className="author-info d-flex align-items-center">
                          <img src="https://www.cryptoplustrader.com/assets/images/crypto_currency/64aef57d94dbc1689187709.png" />
                          <div className="name">
                            <span className="d-block">BUSD</span>
                            <small>Binance USD</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge--success">0.00 %</span>
                      </td>
                      <td>1.00 USD</td>
                      <td>
                        <span className="badge badge--danger">-0.07 %</span>
                      </td>
                      <td>$69,500,780.04</td>
                      <td>
                        <span className="badge badge--danger">-0.01 %</span>
                      </td>
                      <td>$5,475,838.20</td>
                      <td>0.00 BUSD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
            <div className="col-xl-2 col-md-3 col-sm-6 ">
              <div
                className="predict-type-item predictModelShow"
                data-predict='{"title":"Price Prediction","description":"We offer price prediction for complicated trades to help users analyze the feasibility of an intended trade.","icon":"\u003Ci className=\u0022fas fa-network-wired\u0022\u003E\u003C\/i\u003E","button_name":"Try Demo","button_url":"user\/register"}'
              >
                <div className="icon">
                  {" "}
                  <i className="fas fa-network-wired"></i>{" "}
                </div>
                <span className="title">Price Prediction</span>
              </div>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-6 ">
              <div
                className="predict-type-item predictModelShow"
                data-predict='{"title":"Demo Trade","description":"You can also practice trade to familiarize yourself with the system.","icon":"\u003Ci className=\u0022lar la-grin-squint-tears\u0022\u003E\u003C\/i\u003E","button_name":"Get Started","button_url":"login"}'
              >
                <div className="icon">
                  {" "}
                  <i className="lar la-grin-squint-tears"></i>{" "}
                </div>
                <span className="title">Demo Trade</span>
              </div>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-6 ">
              <div
                className="predict-type-item predictModelShow"
                data-predict='{"title":"Trade","description":"You are presented with a variety of cryptocurrencies to trade with and your results are displayed on real-time.","icon":"\u003Ci className=\u0022lab la-grav\u0022\u003E\u003C\/i\u003E","button_name":"Try Quick Demo","button_url":"login"}'
              >
                <div className="icon">
                  {" "}
                  <i className="lab la-grav"></i>{" "}
                </div>
                <span className="title">Trade</span>
              </div>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-6 ">
              <div
                className="predict-type-item predictModelShow"
                data-predict='{"title":"High\/Low Options","description":"Shorting are absolutely allowed; you can also stake high or stake low.","icon":"\u003Ci className=\u0022las la-life-ring\u0022\u003E\u003C\/i\u003E","button_name":"Try Quick Demo","button_url":"login"}'
              >
                <div className="icon">
                  {" "}
                  <i className="las la-life-ring"></i>{" "}
                </div>
                <span className="title">High/Low Options</span>
              </div>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-6 ">
              <div
                className="predict-type-item predictModelShow"
                data-predict='{"title":"Turbo Spread","description":"Calculations are lights-speed fast and done on real-time basis.","icon":"\u003Ci className=\u0022las la-helicopter\u0022\u003E\u003C\/i\u003E","button_name":"Try Quick Demo","button_url":"login"}'
              >
                <div className="icon">
                  {" "}
                  <i className="las la-helicopter"></i>{" "}
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

      <section className="quick-trade-section pb-120 pt-120">
        <div className="trade__header">
          <div className="section__header">
            <h3 className="title">Make a Quick Trade</h3>
            <p>
              Unfortunately, the idea that this kind of trading is some kind of
              &quot;get-rich-quick&quot; scheme persists. Some people trade
              without sufficient knowledge. It is advisable to seek guidance or
              learn the art of trading first.
            </p>
          </div>
          <ul className="nav nav-tabs trade--tabs">
            <li className="nav-item">
              <Link
                href="#beginners"
                data-bs-toggle="tab"
                className="nav-link active"
              >
                I&#039;m a Beginner
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#expert" data-bs-toggle="tab" className="nav-link">
                I&#039;m an Expert
              </Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="tab-content pt-50">
            <div className="tab-pane fade show active" id="beginners">
              <div className="chart-wrapper">
                <div className="chart">
                  <div className="card custom--card h-100">
                    <div className="card-body">
                      <div
                        id="sfx-market-overview"
                        className="sfx-widget w-100 w-[290px] h-[450px]"
                      >
                        <iframe
                          src="https://widgets.simplefx.com/marketOverview/index.html?containerId%3Dsfx-market-overview%26language%3Dauto%26width%3D290px%26height%3D350px%26symbols%3DBTCUSD%2CNINTENDO.JP%2CAAPL.US%2CVOLV.SE%2CGOOG.US%2CLHA.DE%2CXAUEUR%2CBAY.DE%2CTOYOTA.JP%2CAUDCAD%2CUSDSEK%26theme%3Ddark%26customElements%3Dheader%2CchartGridLines%26categoriesOrder%3DCrypto%2CEquities%20JP%2CEquities%20US%2CEquities%20SE%2CEquities%20DE%2CPrecious%20Metals%2CForex%26webPageUrl%3Dhttps%3A%2F%2Fwww.cryptoplustrader.com%2F"
                          className="border-0 w-full h-full"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="expert">
              <div className="chart-wrapper">
                <div className="chart">
                  <div className="card custom--card h-100">
                    <div className="card-body">
                      <div className="tradingview-widget-container">
                        <div id="expert_chart">
                          <div
                            id="tradingview_0632e-wrapper"
                            className="relative w-[980px] h-[610px] m-0 p-0 box-content"
                          >
                            <div className="w-[980px] h-[610px] bg-transparent p-0">
                              <iframe
                                id="tradingview_0632e"
                                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_0632e&amp;symbol=BTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=dark&amp;style=1rem;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=www.cryptoplustrader.com&amp;utm_medium=widget&amp;utm_campaign=chart&amp;utm_term=BTCUSD"
                                className="w-full h-full m-0 p-0"
                                allowTransparency
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section pt-120 pb-120 bg--section">
        <div className="container">
          <div className="section__header">
            <h3 className="title">Why Trade with Us</h3>
            <p>
              Trading with TetraCryptoPlus comes with loads of perks and
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
            <div className="faq__item  open active ">
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
            <div className="faq__item ">
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
            <div className="faq__item ">
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
            <div className="faq__item ">
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
            <div className="faq__item ">
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
            <div className="faq__item ">
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
