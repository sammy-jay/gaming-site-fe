!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).Brokers =
          {})
      );
})(this, function (t) {
  "use strict";
  var e,
    i,
    r,
    o,
    a,
    s,
    n,
    d,
    c,
    l,
    u,
    p,
    h,
    f,
    y,
    m,
    P,
    _,
    b,
    g,
    S,
    I,
    O,
    k,
    T,
    L,
    C,
    v,
    E,
    B,
    D;
  !(function (t) {
    (t[(t.StopLoss = 0)] = "StopLoss"),
      (t[(t.TrailingStop = 1)] = "TrailingStop"),
      (t[(t.GuaranteedStop = 2)] = "GuaranteedStop");
  })(e || (e = {})),
    (function (t) {
      t.Symbol = "symbol";
    })(i || (i = {})),
    (function (t) {
      (t[(t.PopUp = 0)] = "PopUp"), (t[(t.Notification = 1)] = "Notification");
    })(r || (r = {})),
    (function (t) {
      (t[(t.CONNECTED = 1)] = "CONNECTED"),
        (t[(t.CONNECTING = 2)] = "CONNECTING"),
        (t[(t.DISCONNECTED = 3)] = "DISCONNECTED"),
        (t[(t.ERROR = 4)] = "ERROR");
    })(o || (o = {})),
    (function (t) {
      (t[(t.Connected = 1)] = "Connected"),
        (t[(t.Connecting = 2)] = "Connecting"),
        (t[(t.Disconnected = 3)] = "Disconnected"),
        (t[(t.Error = 4)] = "Error");
    })(a || (a = {})),
    (function (t) {
      (t[(t.LIMIT = 1)] = "LIMIT"),
        (t[(t.MARKET = 2)] = "MARKET"),
        (t[(t.STOP = 3)] = "STOP"),
        (t[(t.STOPLIMIT = 4)] = "STOPLIMIT");
    })(s || (s = {})),
    (function (t) {
      (t[(t.Limit = 1)] = "Limit"),
        (t[(t.Market = 2)] = "Market"),
        (t[(t.Stop = 3)] = "Stop"),
        (t[(t.StopLimit = 4)] = "StopLimit");
    })(n || (n = {})),
    (function (t) {
      (t[(t.BUY = 1)] = "BUY"), (t[(t.SELL = -1)] = "SELL");
    })(d || (d = {})),
    (function (t) {
      (t[(t.Buy = 1)] = "Buy"), (t[(t.Sell = -1)] = "Sell");
    })(c || (c = {})),
    (function (t) {
      (t[(t.CANCELED = 1)] = "CANCELED"),
        (t[(t.FILLED = 2)] = "FILLED"),
        (t[(t.INACTIVE = 3)] = "INACTIVE"),
        (t[(t.PLACING = 4)] = "PLACING"),
        (t[(t.REJECTED = 5)] = "REJECTED"),
        (t[(t.WORKING = 6)] = "WORKING");
    })(l || (l = {})),
    (function (t) {
      (t[(t.ALL = 0)] = "ALL"),
        (t[(t.CANCELED = 1)] = "CANCELED"),
        (t[(t.FILLED = 2)] = "FILLED"),
        (t[(t.INACTIVE = 3)] = "INACTIVE"),
        (t[(t.REJECTED = 5)] = "REJECTED"),
        (t[(t.WORKING = 6)] = "WORKING");
    })(u || (u = {})),
    (function (t) {
      (t[(t.Canceled = 1)] = "Canceled"),
        (t[(t.Filled = 2)] = "Filled"),
        (t[(t.Inactive = 3)] = "Inactive"),
        (t[(t.Placing = 4)] = "Placing"),
        (t[(t.Rejected = 5)] = "Rejected"),
        (t[(t.Working = 6)] = "Working");
    })(p || (p = {})),
    (function (t) {
      (t[(t.All = 0)] = "All"),
        (t[(t.Canceled = 1)] = "Canceled"),
        (t[(t.Filled = 2)] = "Filled"),
        (t[(t.Inactive = 3)] = "Inactive"),
        (t[(t.Rejected = 5)] = "Rejected"),
        (t[(t.Working = 6)] = "Working");
    })(h || (h = {})),
    (function (t) {
      (t[(t.Order = 1)] = "Order"), (t[(t.Position = 2)] = "Position");
    })(f || (f = {})),
    (function (t) {
      (t[(t.ORDER = 1)] = "ORDER"), (t[(t.POSITION = 2)] = "POSITION");
    })(y || (y = {})),
    (function (t) {
      (t[(t.Order = 1)] = "Order"),
        (t[(t.Position = 2)] = "Position"),
        (t[(t.IndividualPosition = 3)] = "IndividualPosition");
    })(m || (m = {})),
    (function (t) {
      (t[(t.StopLoss = 0)] = "StopLoss"),
        (t[(t.TakeProfit = 1)] = "TakeProfit"),
        (t[(t.TrailingStop = 2)] = "TrailingStop"),
        (t[(t.GuaranteedStop = 3)] = "GuaranteedStop");
    })(P || (P = {})),
    (function (t) {
      (t[(t.LIMITPRICE = 1)] = "LIMITPRICE"),
        (t[(t.STOPPRICE = 2)] = "STOPPRICE"),
        (t[(t.TAKEPROFIT = 3)] = "TAKEPROFIT"),
        (t[(t.STOPLOSS = 4)] = "STOPLOSS");
    })(_ || (_ = {})),
    (function (t) {
      (t[(t.LimitPrice = 1)] = "LimitPrice"),
        (t[(t.StopPrice = 2)] = "StopPrice"),
        (t[(t.TakeProfit = 3)] = "TakeProfit"),
        (t[(t.StopLoss = 4)] = "StopLoss"),
        (t[(t.Quantity = 5)] = "Quantity");
    })(b || (b = {})),
    (function (t) {
      (t[(t.ERROR = 0)] = "ERROR"), (t[(t.SUCCESS = 1)] = "SUCCESS");
    })(g || (g = {})),
    (function (t) {
      (t[(t.Error = 0)] = "Error"), (t[(t.Success = 1)] = "Success");
    })(S || (S = {})),
    (function (t) {
      (t[(t.Demo = 1)] = "Demo"), (t[(t.Real = 0)] = "Real");
    })(I || (I = {})),
    (function (t) {
      (t.Information = "information"),
        (t.Warning = "warning"),
        (t.Error = "error");
    })(O || (O = {})),
    (function (t) {
      (t.Demo = "demo"), (t.Live = "live");
    })(k || (k = {})),
    (function (t) {
      (t[(t.LogOut = 0)] = "LogOut"),
        (t[(t.FailedRestoring = 1)] = "FailedRestoring"),
        (t[(t.Offline = 2)] = "Offline"),
        (t[(t.APIError = 3)] = "APIError"),
        (t[(t.TwoFactorRequired = 4)] = "TwoFactorRequired"),
        (t[(t.CancelAuthorization = 5)] = "CancelAuthorization"),
        (t[(t.TimeOutForAuthorization = 6)] = "TimeOutForAuthorization"),
        (t[(t.OauthError = 7)] = "OauthError"),
        (t[(t.BrokenConnection = 8)] = "BrokenConnection"),
        (t[(t.FailedSignIn = 9)] = "FailedSignIn");
    })(T || (T = {})),
    (function (t) {
      (t[(t.None = 0)] = "None"),
        (t[(t.Pips = 1)] = "Pips"),
        (t[(t.Ticks = 2)] = "Ticks");
    })(L || (L = {})),
    (function (t) {
      (t.Halted = "HALTED"),
        (t.NotShortable = "NOT-SHORTABLE"),
        (t.HardToBorrow = "HARD-TO-BORROW");
    })(C || (C = {})),
    (function (t) {
      (t[(t.Limit = 1)] = "Limit"), (t[(t.Stop = 2)] = "Stop");
    })(v || (v = {})),
    (function (t) {
      (t.Disallowed = "disallowed"),
        (t.Allowed = "allowed"),
        (t.AllowedWithWarning = "allowed_with_warning");
    })(E || (E = {})),
    (function (t) {
      (t.PlaceOrder = "place_order"),
        (t.ModifyOrder = "modify_order"),
        (t.CancelOrder = "cancel_order"),
        (t.ModifyPosition = "modify_position"),
        (t.ClosePosition = "close_position"),
        (t.ModifyIndividualPosition = "modify_individual_position"),
        (t.CloseIndividualPosition = "close_individual_position"),
        (t.CloseNetPosition = "close_net_position");
    })(B || (B = {})),
    (function (t) {
      (t.Date = "date"),
        (t.DateOrDateTime = "dateOrDateTime"),
        (t.Default = "default"),
        (t.Fixed = "fixed"),
        (t.FixedInCurrency = "fixedInCurrency"),
        (t.VariablePrecision = "variablePrecision"),
        (t.FormatQuantity = "formatQuantity"),
        (t.FormatPrice = "formatPrice"),
        (t.FormatPriceForexSup = "formatPriceForexSup"),
        (t.FormatPriceInCurrency = "formatPriceInCurrency"),
        (t.IntegerSeparated = "integerSeparated"),
        (t.LocalDate = "localDate"),
        (t.LocalDateOrDateTime = "localDateOrDateTime"),
        (t.Percentage = "percentage"),
        (t.Pips = "pips"),
        (t.Profit = "profit"),
        (t.ProfitInInstrumentCurrency = "profitInInstrumentCurrency"),
        (t.Side = "side"),
        (t.PositionSide = "positionSide"),
        (t.Status = "status"),
        (t.Symbol = "symbol"),
        (t.Text = "text"),
        (t.Type = "type"),
        (t.MarginPercent = "marginPercent"),
        (t.Empty = "empty");
    })(D || (D = {}));
  const F = [
      {
        label: "Symbol",
        formatter: "symbol",
        id: i.Symbol,
        dataFields: ["symbol", "symbol", "message"],
      },
      {
        label: "Side",
        id: "side",
        dataFields: ["side"],
        formatter: "side",
      },
      {
        label: "Type",
        id: "type",
        dataFields: ["type", "parentId", "stopType"],
        formatter: "type",
      },
      {
        label: "Qty",
        alignment: "right",
        id: "qty",
        dataFields: ["qty"],
        help: "Size in lots",
        formatter: "formatQuantity",
      },
      {
        label: "Limit Price",
        alignment: "right",
        id: "limitPrice",
        dataFields: ["limitPrice"],
        formatter: "formatPrice",
      },
      {
        label: "Stop Price",
        alignment: "right",
        id: "stopPrice",
        dataFields: ["stopPrice"],
        formatter: "formatPrice",
      },
      {
        label: "Last",
        alignment: "right",
        id: "last",
        dataFields: ["last"],
        formatter: "formatPriceForexSup",
        highlightDiff: !0,
      },
      {
        label: "Execution",
        id: "execution",
        dataFields: ["execution"],
      },
      {
        label: "Status",
        id: "status",
        dataFields: ["status"],
        formatter: "status",
        supportedStatusFilters: [h.All],
      },
      {
        label: "Order ID",
        id: "id",
        dataFields: ["id"],
      },
    ],
    q = [
      {
        label: "Symbol",
        formatter: "symbol",
        id: i.Symbol,
        dataFields: ["symbol", "symbol", "message"],
      },
      {
        label: "Side",
        id: "side",
        dataFields: ["side"],
        formatter: "side",
      },
      {
        label: "Qty",
        alignment: "right",
        id: "qty",
        dataFields: ["qty"],
        help: "Size in lots",
        formatter: "formatQuantity",
      },
      {
        label: "Avg Fill Price",
        alignment: "right",
        id: "avgPrice",
        dataFields: ["avgPrice"],
        formatter: "formatPrice",
      },
      {
        label: "Last",
        alignment: "right",
        id: "last",
        dataFields: ["last"],
        formatter: "formatPriceForexSup",
        highlightDiff: !0,
      },
      {
        label: "Profit",
        alignment: "right",
        id: "pl",
        dataFields: ["pl"],
        formatter: "profit",
      },
      {
        label: "Stop Loss",
        alignment: "right",
        id: "stopLoss",
        dataFields: ["stopLoss"],
        formatter: "formatPrice",
      },
      {
        label: "Take Profit",
        alignment: "right",
        id: "takeProfit",
        dataFields: ["takeProfit"],
        formatter: "formatPrice",
      },
    ],
    A = [
      {
        label: "Title",
        notSortable: !0,
        id: "title",
        dataFields: ["title"],
        formatter: "custom_uppercase",
      },
      {
        label: "Balance",
        alignment: "right",
        id: "balance",
        dataFields: ["balance"],
        formatter: "fixed",
      },
      {
        label: "Open PL",
        alignment: "right",
        id: "pl",
        dataFields: ["pl"],
        formatter: "profit",
        notSortable: !0,
      },
      {
        label: "Equity",
        alignment: "right",
        id: "equity",
        dataFields: ["equity"],
        formatter: "fixed",
        notSortable: !0,
      },
    ];
  var R;
  !(function (t) {
    (t[(t.StopLoss = 0)] = "StopLoss"),
      (t[(t.TakeProfit = 1)] = "TakeProfit"),
      (t[(t.TrailingStop = 2)] = "TrailingStop");
  })(R || (R = {}));
  const M = [p.Inactive, p.Working];
  function N(t) {
    return t === c.Buy ? c.Sell : c.Buy;
  }
  function x(t) {
    return `SampleBroker-${t}`;
  }
  (t.BrokerSample = class {
    constructor(t, e) {
      (this._accountManagerData = {
        title: "Trading Sample",
        balance: 1e7,
        equity: 1e7,
        pl: 0,
      }),
        (this._positionById = {}),
        (this._positions = []),
        (this._orderById = {}),
        (this._executions = []),
        (this._idsCounter = 1),
        (this._handleEquityUpdate = (t) => {
          this._host.equityUpdate(t);
        }),
        (this._quotesProvider = e),
        (this._host = t),
        (this._amChangeDelegate = this._host.factory.createDelegate()),
        (this._balanceValue = this._host.factory.createWatchedValue(
          this._accountManagerData.balance
        )),
        (this._equityValue = this._host.factory.createWatchedValue(
          this._accountManagerData.equity
        )),
        this._amChangeDelegate.subscribe(null, (t) => {
          this._balanceValue.setValue(t.balance),
            this._equityValue.setValue(t.equity);
        });
    }
    subscribeEquity() {
      this._equityValue.subscribe(this._handleEquityUpdate, {
        callWithLast: !0,
      });
    }
    unsubscribeEquity() {
      this._equityValue.unsubscribe(this._handleEquityUpdate);
    }
    connectionStatus() {
      return a.Connected;
    }
    chartContextMenuActions(t, e) {
      return this._host.defaultContextMenuActions(t);
    }
    isTradable(t) {
      return Promise.resolve(!0);
    }
    async placeOrder(t) {
      if (
        (t.duration &&
          console.log("Durations are not implemented in this sample."),
        this._host.setAccountManagerVisibilityMode("normal"),
        (t.type === n.Market || void 0 === t.type) &&
          this._getBrackets(t.symbol).length > 0)
      )
        return this._updateOrder(this._createOrder(t)), {};
      return (
        this._createOrderWithBrackets(t).forEach((t) => {
          this._updateOrder(t);
        }),
        {}
      );
    }
    async modifyOrder(t) {
      if (void 0 === this._orderById[t.id]) return;
      if ((this._updateOrder(t), void 0 !== t.parentId)) return;
      const e = this._getTakeProfitBracket(t),
        i = this._getStopLossBracket(t);
      this._updateOrdersBracket({
        parent: t,
        bracket: e,
        newPrice: t.takeProfit,
        bracketType: 1,
      }),
        this._updateOrdersBracket({
          parent: t,
          bracket: i,
          newPrice: t.stopLoss,
          bracketType: 0,
        });
    }
    async editPositionBrackets(t, e) {
      var i, r;
      const o = this._positionById[t],
        a = this._getBrackets(t),
        s = {
          ...o,
        };
      (null !== (i = s.takeProfit) && void 0 !== i) ||
        (s.takeProfit = e.takeProfit),
        (null !== (r = s.stopLoss) && void 0 !== r) ||
          (s.stopLoss = e.stopLoss),
        this._updatePosition(s);
      const n = a.find((t) => void 0 !== t.limitPrice),
        d = a.find((t) => void 0 !== t.stopPrice);
      this._updatePositionsBracket({
        parent: s,
        bracket: n,
        bracketType: 1,
        newPrice: e.takeProfit,
      }),
        this._updatePositionsBracket({
          parent: s,
          bracket: d,
          bracketType: 0,
          newPrice: e.stopLoss,
        });
    }
    async closePosition(t) {
      const e = this._positionById[t];
      await (() => {
        this.placeOrder({
          symbol: e.symbol,
          side: e.side === c.Sell ? c.Buy : c.Sell,
          type: n.Market,
          qty: e.qty,
        });
      })();
    }
    async orders() {
      return this._orders();
    }
    positions() {
      return Promise.resolve(this._positions.slice());
    }
    executions(t) {
      return Promise.resolve(this._executions.filter((e) => e.symbol === t));
    }
    async reversePosition(t) {
      const e = this._positionById[t];
      await (() =>
        this.placeOrder({
          symbol: e.symbol,
          side: e.side === c.Sell ? c.Buy : c.Sell,
          type: n.Market,
          qty: 2 * e.qty,
        }))();
    }
    cancelOrder(t) {
      const e = this._orderById[t];
      return (() => (
        (e.status = p.Canceled),
        this._updateOrder(e),
        this._getBrackets(e.id).forEach((t) => this.cancelOrder(t.id)),
        Promise.resolve()
      ))();
    }
    cancelOrders(t, e, i) {
      return (() =>
        Promise.all(i.map((t) => this.cancelOrder(t))).then(() => {}))();
    }
    accountManagerInfo() {
      return {
        accountTitle: "Trading Sample",
        summary: [
          {
            text: "Balance",
            wValue: this._balanceValue,
            formatter: "fixed",
            isDefault: !0,
          },
          {
            text: "Equity",
            wValue: this._equityValue,
            formatter: "fixed",
            isDefault: !0,
          },
        ],
        orderColumns: F,
        positionColumns: q,
        pages: [
          {
            id: "accountsummary",
            title: "Account Summary",
            tables: [
              {
                id: "accountsummary",
                columns: A,
                getData: () => Promise.resolve([this._accountManagerData]),
                initialSorting: {
                  property: "balance",
                  asc: !1,
                },
                changeDelegate: this._amChangeDelegate,
              },
            ],
          },
        ],
        contextMenuActions: (t, e) =>
          Promise.resolve(this._bottomContextMenuItems(e)),
      };
    }
    async symbolInfo(t) {
      const e = await this._host.getSymbolMinTick(t);
      return {
        qty: {
          min: 1,
          max: 1e12,
          step: 1,
        },
        pipValue: 1 * e * 1 || 1,
        pipSize: e,
        minTick: e,
        description: "",
      };
    }
    currentAccount() {
      return "1";
    }
    async accountsMetainfo() {
      return [
        {
          id: "1",
          name: "Test account",
        },
      ];
    }
    _bottomContextMenuItems(t) {
      const e = {
          separator: !0,
        },
        i = this._host.sellBuyButtonsVisibility();
      return (
        t.length && t.push(e),
        t.concat([
          {
            text: "Show Buy/Sell Buttons",
            action: () => {
              i && i.setValue(!i.value());
            },
            checkable: !0,
            checked: null !== i && i.value(),
          },
          {
            text: "Trading Settings...",
            action: () => {
              this._host.showTradingProperties();
            },
          },
        ])
      );
    }
    _createPositionForOrder(t) {
      const e = t.symbol;
      let i = this._positionById[e];
      const r = t.side,
        o = t.qty,
        a = void 0 !== t.parentId;
      if (((t.avgPrice = t.price), i)) {
        const e = t.side === i.side ? 1 : -1;
        if (e > 0)
          i.avgPrice = (i.qty * i.avgPrice + t.qty * t.price) / (i.qty + t.qty);
        else {
          i.avgPrice = i.avgPrice;
          const e = Math.min(o, i.qty);
          this._accountManagerData.balance +=
            (t.price - i.avgPrice) * e * (i.side === c.Sell ? -1 : 1);
        }
        i.qty = i.qty + t.qty * e;
        const r = this._getBrackets(i.id);
        i.qty <= 0
          ? (r.forEach((t) => {
              a
                ? this._setFilledStatusAndUpdate(t)
                : this._setCanceledStatusAndUpdate(t);
            }),
            (i.side = N(i.side)),
            (i.qty *= -1))
          : r.forEach((t) => {
              (t.side = N(i.side)), (t.qty = i.qty), this._updateOrder(t);
            });
      } else
        i = {
          ...t,
          id: e,
          avgPrice: t.price,
        };
      const s = {
        id: "" + this._idsCounter++,
        brokerSymbol: t.brokerSymbol,
        price: t.price,
        qty: o,
        side: r,
        symbol: t.symbol,
        time: Date.now(),
      };
      return (
        this._executions.push(s),
        this._host.executionUpdate(s),
        this._updatePosition(i),
        this._recalculateAMData(),
        this._host.plUpdate(i.symbol, i.profit),
        this._host.positionPartialUpdate(i.id, i),
        this._recalculateAMData(),
        i
      );
    }
    _updateOrderLast(t) {
      this._host.orderPartialUpdate(t.id, {
        last: t.last,
      });
    }
    _orders() {
      return Object.values(this._orderById);
    }
    _updateOrder(t) {
      const e = {
          [c.Sell]: {
            [n.Market]: () => !!t.price,
            [n.Limit]: () => void 0 !== t.limitPrice && t.last >= t.limitPrice,
            [n.Stop]: () => void 0 !== t.stopPrice && t.last <= t.stopPrice,
            [n.StopLimit]: () => !1,
          },
          [c.Buy]: {
            [n.Market]: () => !!t.price,
            [n.Limit]: () => void 0 !== t.limitPrice && t.last <= t.limitPrice,
            [n.Stop]: () => void 0 !== t.stopPrice && t.last >= t.stopPrice,
            [n.StopLimit]: () => !1,
          },
        },
        i = Boolean(this._orderById[t.id]);
      if (
        ((this._orderById[t.id] = t),
        Object.assign(this._orderById[t.id], t),
        i ||
          this._subscribeData(t.symbol, t.id, (i) => {
            if (t.last !== i) {
              if (
                ((t.last = i),
                null == t.price && (t.price = t.last),
                t.status === p.Working && e[t.side][t.type]())
              ) {
                const e = {
                  ...t,
                };
                (t.price = t.last), (t.avgPrice = t.last);
                const i = this._createPositionForOrder(e);
                (t.status = p.Filled),
                  this._updateOrder(t),
                  this._getBrackets(t.id).forEach((t) => {
                    (t.status = p.Working),
                      (t.parentId = i.id),
                      (t.parentType = m.Position),
                      this._updateOrder(t);
                  });
              }
              this._updateOrderLast(t);
            }
          }),
        this._host.orderUpdate(t),
        void 0 !== t.parentId)
      ) {
        const e =
          t.parentType === m.Position
            ? this._positionById[t.parentId]
            : this._orderById[t.parentId];
        if (void 0 === e) return;
        if (
          (void 0 !== t.limitPrice &&
            (e.takeProfit = t.status !== p.Canceled ? t.limitPrice : void 0),
          void 0 !== t.stopPrice &&
            (e.stopLoss = t.status !== p.Canceled ? t.stopPrice : void 0),
          t.parentType === m.Position)
        )
          return this._updatePosition(e);
        this._updateOrder(e);
      }
    }
    _updatePosition(t) {
      const e = Boolean(this._positionById[t.id]);
      if (e && !t.qty) {
        this._unsubscribeData(t.id);
        const e = this._positions.indexOf(t);
        return (
          -1 !== e && this._positions.splice(e, 1),
          delete this._positionById[t.id],
          void this._host.positionUpdate(t)
        );
      }
      e ||
        (this._positions.push(t),
        this._subscribeData(t.symbol, t.id, (e) => {
          t.last !== e &&
            ((t.last = e),
            (t.profit =
              (t.last - t.price) * t.qty * (t.side === c.Sell ? -1 : 1)),
            this._host.plUpdate(t.symbol, t.profit),
            this._host.positionPartialUpdate(t.id, t),
            this._recalculateAMData());
        })),
        (this._positionById[t.id] = t),
        this._host.positionUpdate(t);
    }
    _subscribeData(t, e, i) {
      this._quotesProvider.subscribeQuotes(
        [],
        [t],
        (t) => {
          const e = t[0];
          "ok" === e.s && "number" == typeof e.v.lp && i(e.v.lp);
        },
        x(e)
      );
    }
    _unsubscribeData(t) {
      this._quotesProvider.unsubscribeQuotes(x(t));
    }
    _recalculateAMData() {
      let t = 0;
      this._positions.forEach((e) => {
        t += e.profit || 0;
      }),
        (this._accountManagerData.pl = t),
        (this._accountManagerData.equity =
          this._accountManagerData.balance + t),
        this._amChangeDelegate.fire(this._accountManagerData);
    }
    _createOrderWithBrackets(t) {
      const e = [],
        i = this._createOrder(t);
      if ((e.push(i), void 0 !== i.takeProfit)) {
        const t = this._createTakeProfitBracket(i);
        e.push(t);
      }
      if (void 0 !== i.stopLoss) {
        const t = this._createStopLossBracket(i);
        e.push(t);
      }
      return e;
    }
    _getBrackets(t) {
      return this._orders().filter(
        (e) => e.parentId === t && M.includes(e.status)
      );
    }
    _createOrder(t) {
      return {
        id: "" + this._idsCounter++,
        duration: t.duration,
        limitPrice: t.limitPrice,
        profit: 0,
        qty: t.qty,
        side: t.side || c.Buy,
        status: p.Working,
        stopPrice: t.stopPrice,
        symbol: t.symbol,
        type: t.type || n.Market,
        takeProfit: t.takeProfit,
        stopLoss: t.stopLoss,
      };
    }
    _createTakeProfitBracket(t) {
      return {
        symbol: t.symbol,
        qty: t.qty,
        id: "" + this._idsCounter++,
        parentId: t.id,
        parentType: m.Order,
        limitPrice: t.takeProfit,
        side: N(t.side),
        status: p.Inactive,
        type: n.Limit,
      };
    }
    _createStopLossBracket(t) {
      return {
        symbol: t.symbol,
        qty: t.qty,
        id: "" + this._idsCounter++,
        parentId: t.id,
        parentType: m.Order,
        stopPrice: t.stopLoss,
        price: t.stopPrice,
        side: N(t.side),
        status: p.Inactive,
        type: n.Stop,
      };
    }
    _getTakeProfitBracket(t) {
      return this._getBrackets(t.id).find((t) => void 0 !== t.limitPrice);
    }
    _getStopLossBracket(t) {
      return this._getBrackets(t.id).find((t) => void 0 !== t.stopPrice);
    }
    _updateOrdersBracket(t) {
      const { parent: e, bracket: i, bracketType: r, newPrice: o } = t;
      if (void 0 !== i && void 0 === o)
        return void this._setCanceledStatusAndUpdate(i);
      if (void 0 === o) return;
      const a = void 0 === i;
      if (1 !== r)
        if (0 !== r);
        else {
          const t = a
            ? this._createStopLossBracket(e)
            : {
                ...i,
                stopPrice: o,
              };
          this._updateOrder(t);
        }
      else {
        const t = a
          ? this._createTakeProfitBracket(e)
          : {
              ...i,
              limitPrice: o,
            };
        this._updateOrder(t);
      }
    }
    _updatePositionsBracket(t) {
      const { parent: e, bracket: i, bracketType: r, newPrice: o } = t;
      if (void 0 !== i && void 0 === o)
        return void this._setCanceledStatusAndUpdate(i);
      if (void 0 === o) return;
      const a = void 0 === i;
      if (1 === r) {
        if (a) {
          const t = this._createTakeProfitBracket(e);
          return (
            (t.status = p.Working),
            (t.parentType = m.Position),
            void this._updateOrder(t)
          );
        }
        return (
          (i.limitPrice = o), (i.takeProfit = o), void this._updateOrder(i)
        );
      }
      if (0 === r) {
        if (a) {
          const t = this._createStopLossBracket(e);
          return (
            (t.status = p.Working),
            (t.parentType = m.Position),
            void this._updateOrder(t)
          );
        }
        return (i.stopPrice = o), (i.stopLoss = o), void this._updateOrder(i);
      }
    }
    _setCanceledStatusAndUpdate(t) {
      (t.status = p.Canceled), this._updateOrder(t);
    }
    _setFilledStatusAndUpdate(t) {
      (t.status = p.Filled), this._updateOrder(t);
    }
  }),
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
});
