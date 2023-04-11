import React from "react";
import { Link } from "react-router-dom";

const Course3_Lesson3 = () => {
  return (
    <div className="container mt-5">
      <div className="page-header mb-3 mt-3">
        <div className="page-block">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="page-header-title"></div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <Link to="/course3">How are orders executed?</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> How are orders executed?</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img
            height="300"
            className="img-responsive main-image"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/IG-Academy/com.ta.course1.img3x.jpg"
          />
        </div>
      </div>
      <div className="lesson__content">
        <div className="lesson_parsys parsys">
          <div className="lesson-content parbase section">
            <div className="lesson-type-default mt-4 mb-4">
              <p>
                When you place an order to trade, your broker or trading
                provider should attempt to fill it according to your
                requirements. However, variable market conditions mean it's not
                always possible to execute your order exactly as you hoped.
              </p>
              <p>
                To see how and why this can happen, it's necessary to understand
                the process your order goes through after you place it.
              </p>
              <h1 className="heading">How are orders executed?</h1>
              <p>
                When you place a market order, or when a stop or limit order is
                triggered, your broker or trading provider will immediately look
                for corresponding orders in the market to match yours.
              </p>
              <p>
                So if you want to buy 100 shares in ABC plc at 250p, a seller
                who has placed an order for at least 100 shares at that price
                will need to be found. If there are no orders available in
                sufficient size at the price level you want, your order can't be
                filled as it stands, unless the broker decides to trade with you
                from its own inventory.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section center-img">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-classNamenames=" "
                data-alt="shares path"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L2__000.png"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ height: "249px" }}
                data-desktopheight="249"
                data-mobileheight="199"
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L2__000.png">
                  <img
                    alt="shares path"
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L2__000.png"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L2__000.png"
                    alt="shares path"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                To cater for this situation, which can be quite common in
                less-liquid markets, you can often choose to have your order
                classNameified in various ways. For example, if you've selected
                a <b>fill or kill</b> order, the broker must fill it immediately
                in its entirety, or cancel it. Alternatively, an{" "}
                <b>execute and eliminate</b> order will be filled as far as
                possible at the price you specify, then any remaining part of
                the order will be cancelled.
              </p>
              <h1 className="heading">Market order execution</h1>
              <p>
                As we saw earlier, a market order is an order to deal at the
                best price currently available, with execution guaranteed if
                there's sufficient liquidity in the market. So if you're using
                this type of order your broker will source the closest possible
                deal to the one you want. This might involve filling part of
                your order at the price you selected and the remainder at the
                next best price on&nbsp;offer.
              </p>
            </div>
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <p>
                  Fortunately, for major markets there are usually large volumes
                  of traders looking to buy and sell at any given time. However,
                  if you're dealing in a less liquid market or in a very large
                  size, you're more likely to experience difficulty in getting
                  the price you want.
                </p>
                <h1 className="heading">Order duration</h1>
                <p>
                  Suppose you place an order today to buy gold if the price
                  rises by $100 from its current level. If the metal failed to
                  hit that price until a date in a years' time, it's probably
                  fair to say that you wouldn't want your order to be filled
                  automatically. Many factors affecting your decision to trade
                  could have changed by then ––&nbsp;not least that you might
                  have got tired of waiting and invested your funds elsewhere.
                </p>
                <p>
                  For this reason, you can normally set the duration for an
                  order, after which it will be cancelled. Here are some of the
                  main classNamees of order you can choose:
                </p>
                <ul>
                  <li>
                    <b>Good till cancelled (GTC)</b>
                    <br />
                    Order remains valid until you cancel it yourself or the
                    order is filled. On some exchanges, the order may only be
                    valid for a specified period, so it may be worth checking
                    with your broker.
                  </li>
                  <li>
                    <b>Good for the day (GFD)</b>
                    <br />
                    Order remains active until the end of the trading day on
                    which you place it. Check with your broker to see when your
                    chosen market closes.
                  </li>
                  <li>
                    <b>Good till date/time</b>
                    <br />
                    You must select a date and time when you want your order to
                    be cancelled if it hasn't been filled.
                  </li>
                  <li>
                    <b>Fill or kill (FOK)</b>
                    <br />
                    If the order can't be filled in full immediately, it will be
                    cancelled.
                  </li>
                  <li>
                    <b>Execute and eliminate</b>
                    <br />
                    As much of the order as possible will be filled at the price
                    you specify. Any remaining part of the order will be
                    cancelled.
                  </li>
                </ul>
              </div>
            </div>

            <div className="course-modules course-started lesson-progress">
              <div
                className="card col-md-6 offset-md-3 mt-5 p-5"
                style={{ border: "10px solid  #ee701e" }}
              >
                <h2 className="text-center">Lesson Summary</h2>
                <ul>
                  <li>
                    For an order to be filled, there must be sufficient buyers
                    or sellers in the market to take the other side of your
                    trade
                  </li>
                  <li>
                    In certain circumstances your order may not be executed
                    exactly as you specified
                  </li>
                  <li>
                    If a market order can't be filled at the desired price, it
                    will be executed at the next best available price(s)
                  </li>
                  <li>
                    You can normally set a duration for your order, after which
                    it will be cancelled
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course3_Lesson3;
