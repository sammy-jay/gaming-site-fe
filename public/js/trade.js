function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const codeSvg = (style) =>
  `<svg style="${style}" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.93556 4.5061L3.43556 8.5061L3.00342 8.99998L3.43556 9.49386L6.93556 13.4939L8.06443 12.5061L4.99657 8.99998L8.06443 5.49386L6.93556 4.5061ZM11.0644 13.4939L14.5644 9.49386L14.9966 8.99998L14.5644 8.5061L11.0644 4.5061L9.93556 5.49386L13.0034 8.99998L9.93556 12.5061L11.0644 13.4939Z" fill="currentColor"/></svg>`;
const customCSS = `#documentation-toolbar-button {
				all: unset;
				position: relative;
				color: #FFF;
				font-size: 14px;
				font-weight: 400;
				line-height: 18px;
				letter-spacing: 0.15408px;
				padding: 5px 12px;
				border-radius: 80px;
				background: #2962FF;
				cursor: pointer;
			}
			#documentation-toolbar-button:hover {
				background: #1E53E5;
			}
			#documentation-toolbar-button:active {
				background: #1948CC;
			}
			#theme-toggle {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 12px;
			}
			.switcher {
				display: inline-block;
				position: relative;
				flex: 0 0 auto;
				width: 38px;
				height: 20px;
				vertical-align: middle;
				z-index: 0;
				-webkit-tap-highlight-color: transparent;
			}

			.switcher input {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				opacity: 0;
				z-index: 1;
				cursor: default;
			}

			.switcher .thumb-wrapper {
				display: block;
				border-radius: 20px;
				position: relative;
				z-index: 0;
				width: 100%;
				height: 100%;
			}

			.switcher .track {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				border-radius: 20px;
				background-color: #a3a6af;
			}

			#theme-switch:checked + .thumb-wrapper .track {
				background-color: #2962ff;
			}

			.switcher .thumb {
				display: block;
				width: 14px;
				height: 14px;
				border-radius: 14px;
				transition-duration: 250ms;
				transition-property: transform;
				transition-timing-function: ease-out;
				transform: translate(3px, 3px);
				background: #ffffff;
			}

			[dir=rtl] .switcher .thumb {
				transform: translate(-3px, 3px);
			}

			.switcher input:checked + .thumb-wrapper .thumb {
				transform: translate(21px, 3px);
			}

			[dir=rtl] .switcher input:checked + .thumb-wrapper .thumb {
				transform: translate(-21px, 3px);
			}

			#documentation-toolbar-button:focus-visible:before,
			.switcher:focus-within:before {
				content: '';
				display: block;
				position: absolute;
				top: -2px;
				right: -2px;
				bottom: -2px;
				left: -2px;
				border-radius: 16px;
				outline: #2962FF solid 2px;
			}`;

async function fetchNews() {
  const response = await fetch(
    "https://demo-feed-data.tradingview.com/tv_news"
  );
  const xml = await response.text();
  const parser = new DOMParser();
  const dom = parser.parseFromString(xml, "application/xml");
  const items = dom.querySelectorAll("item");

  return Array.from(items).map((item) => {
    const title = item.querySelector("title").textContent;
    const link = item.querySelector("link").textContent;
    const description = item.querySelector("description")?.textContent ?? "";
    const pubDate = item.querySelector("pubDate").textContent;
    const contentNode = Array.from(item.childNodes).find(
      (el) => el.tagName === "content:encoded"
    );
    let decodedContent = "";
    if (contentNode) {
      const tempElement = document.createElement("div");
      tempElement.innerHTML = contentNode.textContent ?? "";
      decodedContent = tempElement.innerText;
    }
    return {
      // fullDescription: decodedContent,
      link,
      published: new Date(pubDate).valueOf(),
      shortDescription: decodedContent
        ? decodedContent.slice(0, 150) + "..."
        : "",
      source: "TradingView",
      title,
    };
  });
}

function initOnReady() {
  const cssBlob = new Blob([customCSS], {
    type: "text/css",
  });
  const cssBlobUrl = URL.createObjectURL(cssBlob);
  let setDemoDatafeedStatus = undefined;
  class CustomDatafeed extends TradingViewDatafeed.TradingViewDatafeed {
    resolveSymbol() {
      if (setDemoDatafeedStatus) {
        setDemoDatafeedStatus(arguments[0]);
      }
      super.resolveSymbol(
        arguments[0],
        arguments[1],
        arguments[2],
        arguments[3]
      );
    }
  }
  const datafeed = new CustomDatafeed();
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = getParameterByName("theme") || (isDark ? "dark" : "light");
  var widget = (window.tvWidget = new TradingView.widget({
    // debug: true, // uncomment this line to see Library errors and warnings in the console
    fullscreen: true,
    symbol: "NASDAQ:AAPL",
    interval: "60",
    container: "tv_chart_container",
    //	BEWARE: no trailing slash is expected in feed URL
    datafeed: datafeed,
    library_path: "charting_library/",
    locale: getParameterByName("lang") || "en",
    custom_css_url: cssBlobUrl,

    disabled_features: [
      "use_localstorage_for_settings",
      "open_account_manager",
      "dom_widget",
    ],
    enabled_features: [
      "study_templates",
      "pre_post_market_sessions",
      "show_symbol_logos",
      "show_exchange_logos",
      "seconds_resolution",
      // 'custom_resolutions', // datafeed doesn't support this
      "secondary_series_extend_time_scale",
      // 'determine_first_data_request_size_using_visible_range',
      "show_percent_option_for_right_margin",
      "display_data_mode",
      "items_favoriting",
      "disable_resolution_rebuild",
    ],
    overrides: {
      // 'mainSeriesProperties.sessionId': 'extended',
    },
    charts_storage_url: "https://saveload.tradingview.com",
    charts_storage_api_version: "1.1",
    client_id: "trading_platform_demo",
    user_id: "public_user",
    theme: theme,

    widgetbar: {
      details: true,
      news: true,
      watchlist: true,
      datawindow: true,
      watchlist_settings: {
        default_symbols: [
          "###STOCKS",
          "NASDAQ:AAPL",
          "NASDAQ:MSFT",
          "NYSE:IBM",
          "###FOREX",
          "FX:EURUSD",
          "FX:GBPUSD",
          "###CRYPTO",
          "CRYPTO:BTCUSD",
          "CRYPTO:ETHUSD",
        ],
      },
    },

    news_provider: async function getNews(symbol, callback) {
      let newsItems = [];
      try {
        newsItems = await fetchNews();
      } catch (e) {
        console.error(e);
      }
      callback({
        title: "Top News Stories",
        newsItems,
      });
    },

    broker_factory: function (host) {
      return new Brokers.BrokerSample(host, datafeed);
    },
    broker_config: {
      configFlags: {
        supportNativeReversePosition: true,
        supportClosePosition: true,
        supportPLUpdate: true,
        supportLevel2Data: false,
        showQuantityInsteadOfAmount: true,
        supportEditAmount: false,
        supportOrderBrackets: true,
        supportMarketBrackets: true,
        supportPositionBrackets: true,
      },
      durations: [
        { name: "DAY", value: "DAY" },
        { name: "GTC", value: "GTC" },
      ],
    },
  }));
  setDemoDatafeedStatus = function (symbol) {
    widget
      .customSymbolStatus()
      .symbol(symbol)
      .setColor("#00BCD4")
      .setVisible(true)
      .setIcon(codeSvg(""))
      .setTooltip("Demo Datafeed")
      .setDropDownContent([
        {
          title: "Demo Datafeed",
          icon: codeSvg(
            "background-color: rgba(0, 188, 212, 0.15); border-radius: 100%"
          ),
          content: ["Not all symbols are fully supported."],
        },
      ]);
  };

  widget.headerReady().then(() => {
    const themeToggleEl = widget.createButton({
      useTradingViewStyle: false,
      align: "right",
    });
    themeToggleEl.dataset.internalAllowKeyboardNavigation = "true";
    themeToggleEl.id = "theme-toggle";
    themeToggleEl.innerHTML = `<label for="theme-switch" id="theme-switch-label">Dark Mode</label>
					<div class="switcher">
						<input type="checkbox" id="theme-switch" tabindex="-1">
						<span class="thumb-wrapper">
							<span class="track"></span>
							<span class="thumb"></span>
						</span>
					</div>`;
    themeToggleEl.title = "Toggle theme";
    const checkboxEl = themeToggleEl.querySelector("#theme-switch");
    checkboxEl.checked = theme === "dark";
    checkboxEl.addEventListener("change", function () {
      const themeToSet = this.checked ? "dark" : "light";
      widget.changeTheme(themeToSet, { disableUndo: true });
    });

    const element = widget.createButton({
      useTradingViewStyle: false,
      align: "right",
    });
    element.dataset.internalAllowKeyboardNavigation = "true";
    element.innerHTML = `<button id="documentation-toolbar-button" tabindex="-1">Documentation</button>`;
    element.title = "View the documentation site";
    element.addEventListener("click", () => {
      window.open(
        "https://www.tradingview.com/charting-library-docs/",
        "_blank"
      );
    });

    const themeSwitchCheckbox = themeToggleEl.querySelector("#theme-switch");
    const documentationButton = element.querySelector(
      "#documentation-toolbar-button"
    );

    const handleRovingTabindexMainElement = (e) => {
      e.target.tabIndex = 0;
    };
    const handleRovingTabindexSecondaryElement = (e) => {
      e.target.tabIndex = -1;
    };

    themeSwitchCheckbox.addEventListener(
      "roving-tabindex:main-element",
      handleRovingTabindexMainElement
    );
    themeSwitchCheckbox.addEventListener(
      "roving-tabindex:secondary-element",
      handleRovingTabindexSecondaryElement
    );
    documentationButton.addEventListener(
      "roving-tabindex:main-element",
      handleRovingTabindexMainElement
    );
    documentationButton.addEventListener(
      "roving-tabindex:secondary-element",
      handleRovingTabindexSecondaryElement
    );
  });
  window.frames[0].focus();
}

window.addEventListener("DOMContentLoaded", initOnReady, false);
