"use client";
import TopNavBar from "@/components/navigation/user/TopNavBar";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect } from "react";

function PracticeNowPage() {
  // const container = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "withdateranges": true,
          "range": "YTD",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "watchlist": [
            "BINANCE:BTCUSDT",
            "BINANCE:ETHUSDT"
          ],
          "details": true,
          "hotlist": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    // container.current.appendChild(script);
  }, []);

  return (
    <main className="w-full h-full">
      <Script src="/js/index.js" />
      <Link href="#" className="scrollToTop">
        <i className="las la-angle-up"></i>
      </Link>

      <header className="header-section">
        <TopNavBar />
      </header>
      <div className="chart-wrapper">
        <div className="chart">
          <div className="card custom--card h-100">
            <div className="card-body">
              <div className="tradingview-widget-container">
                <div id="expert_chart">
                  <div
                    id="tradingview_0632e-wrapper"
                    className="relative w-full h-[90vh] m-0 mt-[10vh] p-0 box-content"
                  >
                    <div className="w-full h-full bg-transparent p-0">
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
    </main>
  );
}

export default PracticeNowPage;
