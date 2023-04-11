import React from "react";
import { Link } from "react-router-dom";

const Course2_Lesson4 = () => {
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
                  <Link to="/course2">What spreads mean for traders</Link>
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
        <h1> What spreads mean for traders</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img
            height="300"
            className="img-responsive main-image"
            style={{ objectF0it: "cover" }}
            src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/IG-Academy/com.ta.course1.img3x.jpg"
          />
        </div>
      </div>
      <div className="lesson__content">
        <div className="lesson_parsys parsys">
          <div className="lesson-content parbase section">
            <div className="lesson-type-default mt-5 mb-5">
              <p>
                As a trader, you'll be looking to buy or sell at the narrowest
                possible spread –&nbsp;in other words, when the bid and ask
                prices are close together. Let's look at why:
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section center-img">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="Spread example"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L2__004.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "335px" }}
                data-desktopheight="335"
                data-mobileheight="268"
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L2__004.png">
                  <img
                    alt="Spread example"
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L2__004.png"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L2__004.png"
                    alt="Spread example"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                Imagine you buy the asset shown in this diagram at an ask price
                of 1.2873.
              </p>
              <p>
                If you were to sell again instantly, you'd do so at only 1.2872.
                This means you need the market to rise by one point (the size of
                the spread) just to break even on your trade.
              </p>
              <p>
                If the bid price overtakes the price at which you bought, you're
                on the road to profit. In this example, the bid price rises from
                1.2872 to 1.2875 (three points), so your gain is based on a
                two-point movement.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                The tighter the bid-ask spread, the quicker you can profit if
                the market moves in your favour.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">What affects the spread?</h1>
              <p>
                An asset's liquidity, or the ease with which it can be traded in
                the market, is the key factor that determines the spread.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                In general, the higher the current volume of trades on an asset,
                the narrower the spread tends to be.
              </p>
              <p>
                The reason is that if more traders want to buy and sell, more
                bids and asks are posted&nbsp;–&nbsp;increasing the likelihood
                that the lowest selling price and the highest buying price will
                converge.
              </p>
              <p>
                Of course, the spread is also affected by the size of any
                dealing fees it includes. Fees generally rise when a market is
                illiquid, to compensate the market maker in case it can't
                immediately find a party to take the other side of your trade.
                That's another reason why liquid markets mean smaller spreads.
              </p>
            </div>
          </div>
          <div className="exercise parbase section">
            <div className="exercise">
              <div className="question parbase">
                <section className="question">
                  <header className="question__header">
                    <h2 className="question__heading">Question</h2>
                    <h3 className="question__title"></h3>
                    <span className="question__query">
                      On which of these would you expect to see the tightest
                      spreads?
                    </span>
                  </header>
                  <div className="question__container">
                    <ul className="question__answers">
                      <li
                        className="question__answer question__options"
                        data-answer="a"
                      >
                        <span className="question__answer-key">a</span>
                        <span className="question__answer-value">
                          A major currency pair
                        </span>
                      </li>
                      <li
                        className="question__answer question__options"
                        data-answer="b"
                      >
                        <span className="question__answer-key">b</span>
                        <span className="question__answer-value">
                          A little-known stock
                        </span>
                      </li>
                      <input
                        type="hidden"
                        className="question__propers"
                        value="WyJhIl0="
                      />
                    </ul>
                    <div className="question__validation">
                      <p className="question__correct">Correct</p>
                      <p className="question__incorrect">Incorrect</p>
                      <span className="question__explanation">
                        Forex is considered to be the world's most liquid
                        market, so spreads on major pairs are generally very
                        tight. However, trading volume and frequency are likely
                        to be very low on the stock in this example, leading to
                        wide spreads.
                      </span>
                    </div>
                  </div>
                  <div className="question__reveal">
                    <span className="question__reveal-button">
                      Reveal answer
                    </span>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Prices in OTC markets</h1>
              <p>
                Lastly, it's worth noting that in OTC markets such as forex,
                where you don't have to deal through a centralised exchange, an
                array of different bid/ask prices are usually available for a
                given asset at any particular time.
              </p>
              <p>
                You may have already noticed this when buying currency for
                foreign travel –&nbsp;different rates appear on the boards in
                various foreign exchange bureaux.
              </p>
              <p>
                So if you wanted to trade GBP/USD, for example, you could shop
                around the different forex dealers to find the best quote for
                the pair. This is in contrast to trading an asset like an
                exchange-listed share, which is available at a uniform value
                –&nbsp;the only cost difference being in the various
                stockbrokers' own fees.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                Competition between various OTC dealers helps keep prices keen
                –&nbsp;and benefits traders.
              </p>
            </div>
          </div>

          <div className="course-modules course-started lesson-progress">
            <div
              className="card col-md-6 offset-md-3 mt-5 p-5"
              style={{ border: "10px solid  #ee701e;" }}
            >
              <h2 className="text-center">Lesson Summary</h2>
              <ul>
                <li>
                  A tighter spread makes it easier for you to profit if the
                  market moves in your favour
                </li>
                <li>
                  The spread is affected by an asset's liquidity, and also by
                  the size of any dealing fees
                </li>
                <li>
                  In OTC markets a range of prices are available, and you can
                  shop around for the best deal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course2_Lesson4;
