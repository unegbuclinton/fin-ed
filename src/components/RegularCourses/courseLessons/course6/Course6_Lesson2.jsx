import React from "react";
import { Link } from "react-router-dom";

const Course6_Lesson2 = () => {
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
                  <Link to="/course6">Bet types and costs</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> Why do traders go short?</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img
            height="300"
            classNameName="img-responsive main-image"
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
                All spread bets have a fixed timescale, which can be from
                minutes up to several months, or even theoretically years.
              </p>
              <p>
                The fixed date and time when your bet will end is known as its
                <b>expiry</b>. This is the maximum time until which you can hold
                your position, although you can choose to close it before it
                expires.
              </p>
              <p>Bets fall into two main categories based on their expiries.</p>
            </div>
          </div>
          <div className="lesson-image parbase section image_center">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-alt="Clock"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L3__001.jpg"
                className="lazyload adaptive-image-disabled"
                style={{ paddingBottom: "43%" }}
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L3__001.jpg">
                  <img
                    alt="Clock"
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L3__001.jpg"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L3__001.jpg"
                    alt="Clock"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1>Daily funded bets</h1>
              <p>
                Daily funded bets (which may be known by various names from
                different providers) will stay open for as long as you want.
                They are given a nominal expiry date at some distant point in
                the future -&nbsp;usually many years away - but you're free to
                close your position at any time before this, whenever the market
                is open for trading.
              </p>
              <p>
                If you want to keep a daily funded bet open overnight, most
                providers will charge you a fee for doing so. These are called
                financing costs or <b>overnight funding</b> charges. So, for
                each day your position remains open you'll have additional
                costs. This means daily funded bets are generally used to
                speculate on <b>short-term</b> market movements only.
              </p>
              <h1>Quarterly bets</h1>
              <p>
                Quarterly bets are bets that expire at a specified date before
                the end of a given quarter. However, just like a daily funded
                bet or digital 100, you can close your position at any point
                before expiry if the market is open. You can roll quarterly bets
                over into the following quarter if you let your provider know in
                advance, although there may be a charge for this.
              </p>
              <p>
                The cost of keeping a quarterly bet running to its expiry date
                is factored into its quoted price. This means the price for
                quarterly bets will typically differ from the underlying market
                value, and the spreads on quarterly bets are often wider than
                daily funded bets. For this reason they are generally used for
                <b>longer-term</b> positions.
              </p>
              <h1>The cost of spread betting</h1>
              <p>
                As well as the <b>overnight funding charges</b> mentioned above,
                and the <b>spreads</b> we discussed in the last section, there
                are a few other costs associated with spread betting. These will
                apply whether you win or lose, although the amount you pay will
                vary according to your provider and the dealing strategies you
                use.
              </p>
              <h3>Margin</h3>
              <p>
                Margin is the amount of money you need as a deposit in your
                account to open and maintain your positions, so it's a key
                factor in the affordability of spread betting. We explain how
                margin works in the
                <b>orders, execution and leverage</b> course.
              </p>
              <p>
                Different spread betting providers will require slightly
                different levels of margin, and rates tend to vary across
                markets, according to the underlying conditions.
              </p>
              <p>
                While you have a bet open, your margin payment is assigned to it
                and can't be used for anything else. However, this money is
                released as soon as you close the position.
              </p>
              <h3>Currency conversion fees</h3>
              <p>
                When you place a spread bet, it will be denominated in a
                particular currency. More often than not this will be in pounds
                -&nbsp;eg £10 per point - which will usually also be the base
                currency of your account. If, however, you are able to place a
                bet in a currency other than your base, you may need to pay an
                associated conversion fee.
              </p>
              <p>
                For instance, many spread betting providers give you the option
                of betting on US shares in US dollars per point. In these cases,
                before your account can be credited or debited with any profit
                or loss, the dollar figure needs to be converted back into
                pounds, which may incur a fee.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-alt="Currency conversions"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L3__002.jpg"
                className="lazyload adaptive-image-disabled"
                style={{ paddingBottom: "43%;" }}
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L3__002.jpg"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L3__002.jpg"
                    alt="Currency conversions"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1>Extra charges</h1>
              <p>
                Lastly, you may find that your spread betting activity (or lack
                of it) incurs some other fees, such as:
              </p>
              <ul>
                <li>
                  <b>Controlled risk premiums</b> - as spread bets can be
                  subject to <b>slippage</b>, you may be able to protect
                  yourself against this risk by paying a small extra fee for a
                  <b>guaranteed stop</b> (explained in the
                  <b>orders, execution and leverage</b> course). Some providers
                  waive this fee if the stop isn't triggered
                </li>
                <li>
                  <b>Feature subscriptions</b> - your provider may also pass on
                  the cost of providing certain platform features (eg advanced
                  charting packages, live prices), although they may be willing
                  to provide a rebate for more valuable customers
                </li>
                <li>
                  <b>Inactivity fees</b> - if you stop spread betting, your
                  provider may seek to cover its ongoing administrative costs by
                  applying an inactivity fee to your account
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
                  There are two main types of bet: daily funded and quarterly
                </li>
                <li>
                  Daily funded bets are usually used for short-term positions
                  and funding charges apply if you hold the bet overnight
                </li>
                <li>
                  Quarterly bets are generally used for longer-term positions
                  and the cost of running the bet to its expiry date is factored
                  into the quoted price
                </li>
                <li>
                  The other costs of spread betting include spreads, margin,
                  currency conversion fees, controlled risk premiums, feature
                  subscriptions and inactivity fees
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course6_Lesson2;
