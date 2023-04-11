import React from "react";
import { Link } from "react-router-dom";

const Course3_Lesson1 = () => {
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
                  <Link to="/course3">Using stop orders</Link>
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
        <h1> Using stop orders</h1>
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
                In contrast to a limit order, a stop order is an instruction to
                trade when the market hits a level <b>less</b> favourable than
                the current price.
              </p>
              <p>
                Why would you want to trade at a worse price? Well, perhaps the
                most important reason is to close a position that's moving
                against you. To do this, you attach a stop order to the trade.
                Then, at the point beyond which the level of loss would be
                unacceptable to you, your stop will pull the plug and close out
                the position.
              </p>
              <p>
                As we'll explain in the next lesson, when markets are moving
                very fast it may not be possible to close the position until the
                price has already passed the level you set, but certainly the
                stop will give you some protection against escalating losses.
              </p>
              <p>
                Because it helps restrict your losses, this type of stop order
                is known as a 'stop-loss'. Here's how it works:
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-example">
              <h2 className="lesson-section-title lesson-title-example">
                Example
              </h2>
              <div className="example_text">
                Let's say you own 100 shares of ABC inc which you bought at $37,
                and now the price has declined to $35.
              </div>
              <div className="example_text">
                You hope this is just a temporary move, but you decide if the
                price should fall as far as $32 it will be time to cut your
                losses. You place a stop-loss at $32.
              </div>
              <div className="example_text">
                Unfortunately, the price keeps sliding all the way to $27.
                However, your stop-loss is triggered at $32 and your position is
                closed.
              </div>
              <div className="example_text">
                You've lost $500 (100 x $5), but without your stop-loss you
                would have been looking at a $1000+ loss.
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                You can also use a stop order to open a new position
                -&nbsp;known as a <b>stop entry order</b>.
              </p>
              <p>
                Placing an order to open a trade at a worse price than the
                current price might seem very strange, but sometimes it can make
                good sense.
              </p>
              <p>
                For example, analysis might suggest that if a market hits a
                certain level it will carry on moving in the same direction. By
                setting a stop order at such a level, you would be ready to open
                a position and potentially take advantage of this momentum.
              </p>
            </div>
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <h1 className="heading">Trailing stops</h1>
                <p>
                  A trailing stop is a special type of stop-loss -&nbsp;it not
                  only caps losses, but also helps protect any profits you make.
                </p>
                <p>
                  Like other stop-losses, a trailing stop is attached to a
                  trade. If the market price moves in your favour by a specified
                  amount (known as a 'step'), the trailing stop copies this
                  movement. So it keeps its distance from the current price, but
                  step-by-step it gets closer to the price at which you opened
                  your trade, and may pass it if the favourable movement
                  continues.
                </p>
                <p>
                  However, if the market then turns against you, the trailing
                  stop stays put. This means it can close your position at a
                  more favourable level than a standard, stationary stop-loss
                  would have done –&nbsp;potentially while you're still in
                  profit.
                </p>
              </div>
            </div>
            <div className="lesson-content-wrapper parbase section">
              <div className="lesson-wrapper lesson-type-example">
                <h2 className="lesson-section-title lesson-title-example">
                  Example
                </h2>
                <div className="lesson_wrapper_parsys parsys">
                  <div className="lesson-content parbase section">
                    <div className="lesson-type-default">
                      <p>
                        Suppose you decide to go short on USD/JPY at 117.60. You
                        set a trailing stop 30 pips away, at 117.90. You choose
                        a step size of ten pips.
                      </p>
                      <p>
                        The market initially drops five pips. As this is less
                        than the step size, your stop stays at 117.90. The price
                        then drops a further five pips to 117.50, triggering
                        your stop to move down to 117.80.
                      </p>
                      <p>
                        A little later, USD/JPY has sunk to 117.10. Your stop
                        has followed it, and is at 117.40. However, now the
                        market trend reverses and the price rises to 117.50.
                        Your stop remains at 117.40, so your position is closed
                        as the price passes through this level.
                      </p>
                    </div>
                  </div>
                  <div className="lesson-image parbase section">
                    <div className="lesson-image__component image text-image lesson-image--default">
                      <span
                        data-alt="limit order example"
                        data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L1__003.png"
                        className="lazyload adaptive-image-disabled"
                        style={{ paddingBottom: "96.5%" }}
                      >
                        <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L1__003.png"></span>
                        <noscript>
                          <img
                            src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L1__003.png"
                            alt="limit order example"
                          />{" "}
                        </noscript>
                      </span>
                    </div>
                  </div>
                  <div className="lesson-content parbase section">
                    <div className="lesson-type-default">
                      <p>
                        The stop has protected a profit of 20 pips for you.
                        However, it's worth noting that if the market's upward
                        movement turns out to be temporary, you may have missed
                        an opportunity for greater profit by closing the
                        position now.
                      </p>
                      <p>
                        As with other stop-losses, a trailing stop doesn't
                        guarantee that your position will be closed at exactly
                        the level you set. Later in this course we'll explain
                        how you can protect yourself further against loss by
                        using guaranteed stops.
                      </p>
                    </div>
                  </div>
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
                    A stop order is an instruction to trade if a market price
                    reaches a particular level less favourable than the current
                    price
                  </li>
                  <li>
                    Attaching a stop-loss to an existing position will restrict
                    your losses if the market moves against you
                  </li>
                  <li>
                    You can use a stop entry order to open a new position if a
                    market hits a significant price level that indicates a
                    potential trading opportunity
                  </li>
                  <li>
                    A trailing stop is a special type of stop-loss that moves in
                    tandem with favourable changes in the market price, helping
                    to safeguard your profits
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

export default Course3_Lesson1;
