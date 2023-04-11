import React from "react";
import { Link } from "react-router-dom";

const Course6_Lesson4 = () => {
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
                  <Link to="/course6">
                    What are contracts for difference (CFDs)
                  </Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> What are contract for difference (CFDs).</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img
            height="300"
            classNameName="img-responsive main-image"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/IG-Academy/com.ta.course1.img3x.jpg"
          />{" "}
        </div>
      </div>
      <div className="lesson__content">
        <div className="lesson_parsys parsys">
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className=" mt-4">
                Similarly to spread betting, when you trade a{" "}
                <b>contract for difference</b>, or <b>CFD</b>, you're not
                actually trading a physical asset. Instead you're agreeing to
                exchange the <b>difference in value</b> of an asset between the
                point at which the contract is opened and when it is closed.
              </p>
              <p>
                Contracts for difference are <b>derivatives</b>, as the price of
                a CFD is derived from the value of an underlying asset. For
                example, you might open a CFD based on the price of gold, with
                the expectation the metal will rise in value. If the price of
                gold does indeed go up and you then close the contract, you will
                have made a profit. If it drops, you'll have made a loss.
              </p>
              <p>
                Of course, the more the market moves in your favour, the more
                money you can make. And the further the market moves against
                you, the more your losses will stack up. Also, as you never own
                the physical asset, you can potentially profit from both rising
                and falling prices in the underlying market. In other words, you
                can go long or short.
              </p>
              <p>
                This is probably beginning to sound quite familiar. At a first
                glance spread betting and CFDs can appear almost identical. Even
                the way CFDs are traded is remarkably similar.
              </p>
              <h1>Trading a CFD</h1>
              <p>
                Just like a spread bet, you'll see a two-way price quoted on
                each CFD market offered. Let's use silver as an example. Suppose
                it's currently being listed by one provider at a spread of
                1650/1653 (which is the equivalent of $16.50/$16.53 in the
                underlying market).
              </p>
              <ul>
                <li>
                  1650 is the bid price at which you can 'sell'&nbsp;(go short)
                </li>
                <li>
                  1653 is the offer price at which you can 'buy'&nbsp;(go long)
                </li>
              </ul>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-classNamenames=" "
                data-alt="Sell and buy"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L5__001.jpg"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ height: "171px" }}
                data-desktopheight="171"
                data-mobileheight="137"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L5__001.jpg"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L5__001.jpg"
                    alt="Sell and buy"
                  />{" "}
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                If you believe the price of silver will rise, you 'buy'&nbsp;at
                the <b>offer price</b>. Or if you think it will drop, you
                'sell'&nbsp;at the <b>bid price</b>.
              </p>
              <p>
                And as with a spread bet, you'll be asked to put up a{" "}
                <b>margin</b> payment as a deposit to open your position.
              </p>
              <p>
                However, things differ when it comes to deal sizes. With spread
                betting you bet an amount of money per point, but CFDs are
                traded in <b>standardised contracts</b>, sometimes called lots.
                The sizes of these contracts differ depending on the asset,
                often mimicking how that asset is traded in the underlying
                markets.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-link=""
                data-classNamenames=" "
                data-alt="Silver"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L5__002.jpg"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ paddingBottom: "43%" }}
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L5__002.jpg"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L5__002.jpg"
                    alt="Silver"
                  />{" "}
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                Going back to silver, it's traded in a contract size of 5000
                troy ounces in the underlying market. Therefore most CFD
                providers also offer silver in a contract size of 5000 troy
                ounces. This works out to be the equivalent of $50 per point of
                movement.
              </p>
            </div>
          </div>
        </div>
        <div className="lesson__content">
          <div className="lesson_parsys parsys">
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <p>
                  Now that we know you can trade on a financial asset such as
                  silver using a CFD, let's take a look at how you might go
                  about taking a position.
                </p>
                <p>
                  Say you think the price of silver will rise, so you decide to
                  'buy'&nbsp;five CFD contracts at 1653.
                </p>
              </div>
            </div>
            <div className="lesson-image parbase section">
              <div className="lesson-image__component image text-image lesson-image--center">
                <span
                  data-link=""
                  data-classNamenames=" "
                  data-alt="Deal ticket "
                  data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L6__001.jpg"
                  data-app=""
                  data-ios=""
                  data-android=""
                  className="lazyload adaptive-image-disabled"
                  style={{ height: "171px" }}
                  data-desktopheight="171"
                  data-mobileheight="137"
                  data-picture=""
                >
                  <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L6__001.jpg">
                    <img
                      alt="Deal ticket "
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L6__001.jpg"
                    />
                  </span>
                  <noscript>
                    <img
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L6__001.jpg"
                      alt="Deal ticket "
                    />{" "}
                  </noscript>
                </span>
              </div>
            </div>
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <p>
                  A week later the price of silver is quoted by your provider at
                  1683/1686, and you think it's time to 'sell'&nbsp;and close
                  your position.
                </p>
              </div>
            </div>
            <div className="lesson-image parbase section">
              <div className="lesson-image__component image text-image lesson-image--center">
                <span
                  data-link=""
                  data-classNamenames=" "
                  data-alt="Deal ticket with Sell button selected"
                  data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L6__002.jpg"
                  data-app=""
                  data-ios=""
                  data-android=""
                  className="lazyload adaptive-image-disabled"
                  style={{ height: "171px" }}
                  data-desktopheight="171"
                  data-mobileheight="137"
                >
                  <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L6__002.jpg"></span>
                  <noscript>
                    <img
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L6__002.jpg"
                      alt="Deal ticket with Sell button selected"
                    />{" "}
                  </noscript>
                </span>
              </div>
            </div>
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <p>
                  Your profit or loss is calculated as the number of contracts
                  you've traded, multiplied by the value of the contract per
                  point of movement, multiplied by the difference in points
                  between the opening and closing prices.
                </p>
                <p>So in the scenario above you would have made $7500:</p>
                <p align="center">
                  <b>
                    <font color="#5260FF">Five contracts</font> x{" "}
                    <font color="#3EA403">$50</font> x{" "}
                    <font color="#FE0003">30 points</font> = $7500
                  </b>
                </p>
                <p>
                  You might also need to factor in commission or other charges,
                  as we'll explain shortly.
                </p>
                <p>
                  The number of contracts you choose to trade is up to you, but
                  always remember that the value of one contract will vary from
                  market to market and may be denominated in different
                  currencies. For example, one contract of the FTSE might be
                  worth £10 per point of movement, while one Nikkei 225 contract
                  might be worth just $5 (or around £3) per point.
                </p>
                <p>
                  When trading share CFDs, the contract size is usually
                  equivalent to one share of the company you're trading. So if
                  you wanted to buy the equivalent of 1000 shares of Vodafone,
                  you would simply buy 1000 Vodafone share CFDs.
                </p>
              </div>
            </div>

            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <h1>Overnight funding charges</h1>
                <p>
                  Just like when you open a daily spread bet, when trading CFDs
                  your provider will generally charge you a fee for holding the
                  position overnight (unless you're trading futures, forwards
                  and&nbsp;digital 100s). These are called financing costs or
                  funding charges, and reflect the cost of borrowing or lending
                  the underlying asset. So, for each day your position remains
                  open, you'll accrue additional costs.
                </p>
                <h1>Why trade CFDs?</h1>
                <p>
                  Many of the arguments for trading CFDs in lieu of conventional
                  trading are the same as for spread betting. With CFDs you can:
                </p>
                <ul>
                  <li>Go long or short</li>
                  <li>Trade using leverage (ie trade on margin)</li>
                  <li>Access some markets 24 hours a day</li>
                </ul>
              </div>
            </div>
            <div className="lesson-image parbase section">
              <div className="lesson-image__component image text-image lesson-image--default">
                <span
                  data-link=""
                  data-classNamenames=" "
                  data-alt="Profit, risk, loss"
                  data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L6__003.jpg"
                  data-app=""
                  data-ios=""
                  data-android=""
                  className="lazyload adaptive-image-disabled"
                  style={{ paddingBottom: "43%" }}
                >
                  <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L6__003.jpg"></span>
                  <noscript>
                    <img
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L6__003.jpg"
                      alt="Profit, risk, loss"
                    />{" "}
                  </noscript>
                </span>
              </div>
            </div>
            <div className="lesson-content parbase section">
              <div className="lesson-type-didyouknow">
                <h2 className="lesson-section-title lesson-title-didyouknow">
                  Did you know?
                </h2>
                <div className="fact">
                  When trading on margin, a <b>minimum margin level</b> must be
                  maintained on open positions at all times. Providers typically
                  calculate the profit, loss and margin requirement constantly
                  in real time and display it for their clients on screen. If
                  the amount of money deposited drops below the minimum margin
                  level, providers will ask for more money to cover the
                  positions (known as a <b>margin call</b>), and may even close
                  them if the losses get too large.
                </div>
              </div>
            </div>
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <p>
                  Of course, the same risks apply to CFDs as to spread betting,
                  and it's important to remember that your losses can be higher
                  than the deposits you make to open your positions.
                </p>
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
                    Profit/loss = number of contracts traded x value of the
                    contract per point of movement x difference in points
                    between opening and closing prices
                  </li>
                  <li>
                    Funding charges usually apply if you hold a CFD open
                    overnight
                  </li>
                  <li>
                    If the money held on your account drops below the level
                    needed to cover your positions, you'll receive a margin call
                  </li>
                  <li>
                    CFDs have many of the same benefits as spread betting, as
                    well as the same risks
                  </li>
                  <li>
                    A CFD is an agreement to exchange money according to the
                    change in value of an underlying asset
                  </li>
                  <li>
                    It is a means to gain exposure to the change in value of a
                    financial instrument without actually owning that instrument
                  </li>
                  <li>
                    Traders can take a long or short position on a CFD,
                    potentially enabling them to profit from falling as well as
                    rising prices
                  </li>
                  <li>
                    CFDs are traded in standardised contracts called lots, which
                    differ in size for each asset
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

export default Course6_Lesson4;
