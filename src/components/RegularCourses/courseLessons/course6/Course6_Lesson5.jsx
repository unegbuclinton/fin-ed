import React from "react";
import { Link } from "react-router-dom";

const Course6_Lesson5 = () => {
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
                  <Link to="/course6">How CFDs differ from spread betting</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 5</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> How CFDs differ from spread betting</h1>
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
            <div className="lesson-type-default">
              <p className="text-center mt-4">
                So far we've emphasised that CFD trading closely resembles
                spread betting. However, although these two derivatives products
                are very similar in many ways, there are some key differences to
                be aware of.
              </p>
              <h1>Deal size</h1>
              <p>
                As mentioned earlier in this course, when spread betting, you
                bet an amount of money per point on whether a market will go up
                or down. For instance, you might bet £5 per point that the price
                of the FTSE 100 will fall. With CFDs you buy and sell contracts
                that represent a specified amount in the underlying market. For
                example one standard FTSE contract might be worth £10 per point.
              </p>
              <h1>Capital gains tax</h1>
              <p>
                Spread betting profits are currently free from capital gains
                tax, but CFDs are liable because they are classed as a financial
                instrument. This may seem a major drawback, but any losses can
                be offset against future profits for tax purposes, which makes
                CFDs good for <b>hedging</b> (see below).
              </p>
              <p>
                Note that <b>stamp duty</b> on share trades doesn't apply to
                either spread betting or CFDs, as you never own the underlying
                shares in either case. (Tax laws are subject to change and
                depend on individual circumstances. Tax law may differ in a
                jurisdiction other than the UK.)
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-didyouknow">
              <h2 className="lesson-section-title lesson-title-didyouknow">
                Did you know?
              </h2>
              <h2>What is hedging?</h2>
              <div className="fact">
                If you have an asset in an existing portfolio that you believe
                may lose some of its value, you could use a CFD to offset the
                loss by short selling. For example, let's say you hold £1000
                worth of HSBC shares in your portfolio. You can short sell the
                equivalent of £1000 worth of HSBC shares through a CFD trade.
                Should HSBC's share price fall in the underlying market, the
                loss in value of your share portfolio would be offset by a gain
                in your short CFD trade.
              </div>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-classnames=" "
                data-alt="edging with CFDs to offset against potential losses in your shares portfolio"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L7__001.png"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ height: "433px" }}
                data-desktopheight="433"
                data-mobileheight="346"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L7__001.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L7__001.png"
                    alt="edging with CFDs to offset against potential losses in your shares portfolio"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1>Expiry times</h1>
              <p>
                Spread bets tend to have fixed time limits -&nbsp;anything from
                minutes to several years -&nbsp;when they'll naturally expire if
                you haven't already closed them. Most CFD trades, on the other
                hand, will stay open indefinitely (although there are a few
                exceptions, such as futures and forwards). When you want to
                close out a position you simply place a trade in the opposite
                direction to which you opened it.
              </p>
              <h1>Commission charges on shares</h1>
              <p>
                When you place a spread bet you are rarely charged commission
                -&nbsp;most providers'&nbsp;charges are included in the spread.
                The majority of CFD trades are the same, though in the case of
                shares many CFD providers match the price of the underlying
                market, then charge commission for carrying out the trade. This
                mimics the mechanics of trading shares in the underlying market.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-example">
              <h2 className="lesson-section-title lesson-title-example">
                Example
              </h2>
              <div className="example_text">
                Let's say you think shares in Sports Company N are set to rise.
                You could take a position with either a CFD or a spread bet.
              </div>
              <div className="example_text">&nbsp;</div>
              <div className="example_text">
                <b>CFD</b>
              </div>
              <div className="example_text">&nbsp;</div>
              <div className="example_text">
                The shares are currently listed at a price of 1545/1547 in the
                underlying market (the equivalent of £15.45/£15.47). You decide
                to 'buy'&nbsp;1000 shares as a CFD. Your provider offers the
                shares at market price, but charges 0.1% commission on the full
                value of the position. So the final charge would be calculated
                as 1000 x £15.47 x 0.1% = £15.47
              </div>
              <div className="example_text">&nbsp;</div>
              <div className="example_text">
                Note that although you only have to put down an initial margin
                deposit to open the position, the commission charge is based on
                its full value in the underlying market.
              </div>
              <div className="example_text">&nbsp;</div>
              <div className="example_text">
                <b>Spread bet</b>
              </div>
              <div className="example_text">&nbsp;</div>
              <div className="example_text">
                You want to bet £10 per point on the price of Sports Company N
                to rise. Your provider doesn't charge commission but the spread
                incorporates a 0.1% charge, so instead of being offered at
                1545/1547, the bid price now stands at 1543.45 (1545
                -&nbsp;(1545 x 0.1%)) and the offer price is 1548.55 (1547 +
                (1547 x 0.1%)). You won't be charged commission on the purchase,
                but you've had to buy at a higher price than if you were trading
                CFDs.
              </div>
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
                  Trading CFDs closely resembles spread betting, but there are
                  some key differences
                </li>
                <li>
                  Spread bets are made in an amount of money per point, CFDs are
                  traded in standardised contracts
                </li>
                <li>
                  Profits made from spread betting are currently free from
                  capital gains tax, but CFDs are liable
                </li>
                <li>
                  Spread bets generally expire at a fixed time if you don't
                  close them first, while in most cases CFDs will remain open
                  indefinitely
                </li>
                <li>
                  Traders are generally charged commission to conduct share CFD
                  deals, while the charges for spread betting on shares are
                  usually included in the spread
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course6_Lesson5;
