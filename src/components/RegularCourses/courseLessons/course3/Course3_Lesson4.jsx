import React from "react";
import { Link } from "react-router-dom";

const Course3_Lesson4 = () => {
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
                  <Link to="/course3">How are orders priced?</Link>
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
        <h1> How are order priced?</h1>
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
                For assets that are traded on exchange, such as shares, your
                broker will have access to each exchange's <b>order book</b>
                &nbsp;– the list of buyers and sellers currently placing orders.
              </p>
              <p>
                The order book displays the price and size of each order, so
                it's easy to see where your order should be placed.
              </p>
              <p>
                As well as the <b>primary exchanges</b>, such as the London
                Stock Exchange or the New York Stock Exchange, there are also a
                number of <b>Multilateral Trading Facilities (MTFs)</b> which
                accept orders and quote prices on certain stocks. They sometimes
                offer better prices than the primary exchanges, although not all
                brokers are able to access them.
              </p>
              <p>
                Prices offered by primary exchanges and MTFs are publicly
                visible, and are known as <b>lit books</b>. However, prices
                hidden in <b>dark liquidity pools</b> can also be available for
                you to trade against, if your broker has access to them.
                Participants in dark pools are generally institutional investors
                who don't want to reveal the price, size and origin of their
                orders.
              </p>
              <p>
                For <b>OTC markets</b>, such as forex, prices are sourced from
                the network of global banks and liquidity providers
                participating in the market.
              </p>
              <h1 className="heading">Slippage</h1>
              <p>
                Another issue that can affect the price at which your order is
                executed is slippage.
              </p>
              <p>
                Prices can change in a matter of milliseconds, and between the
                moment when you click to place an order and the point when your
                broker receives it, your intended price might become
                unavailable.
              </p>
              <p>
                If you're using a market order, it will be executed at the best
                price your broker can get. This could be substantially worse
                than the price you expected if markets are volatile and moving
                rapidly –&nbsp;perhaps after a startling news event or
                unexpectedly poor company earnings report.
              </p>
              <p>
                You're most likely to see the impact of slippage when you've
                left a stop-loss order to close a position in the event of an
                adverse market movement. Sometimes, prices may be changing so
                fast that it's impossible to close your trade at the level where
                you set your stop.
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
                      Say you take a long position on the Dow Jones Industrial
                      Average index at 17,838 with a stop at 17,699.
                    </p>
                    <p>
                      A couple of influential Wall Street firms then report
                      unexpectedly poor earnings. This causes a drop in other
                      Dow constituent stocks, and the index tumbles through your
                      stop. As soon as the price meets your stop level, your
                      stop order is triggered.
                    </p>
                  </div>
                </div>
                <div className="lesson-image parbase section">
                  <div className="lesson-image__component image text-image lesson-image--default">
                    <span
                      data-link=""
                      data-classNamenames=" "
                      data-alt="slippage graph"
                      data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L2__002.png"
                      data-app=""
                      data-ios=""
                      data-android=""
                      className="lazyload adaptive-image-disabled"
                      style={{ paddingBottom: "76.5%" }}
                    >
                      <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L2__002.png"></span>
                      <noscript>
                        <img
                          src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L2__002.png"
                          alt="slippage graph"
                        />
                      </noscript>
                    </span>
                  </div>
                </div>
                <div className="lesson-content parbase section">
                  <div className="lesson-type-default">
                    <p>
                      Here's a table showing how the price quoted by your broker
                      moves in the moments before and after your stop is hit:
                    </p>
                  </div>
                </div>
                <div className="lesson-image parbase section">
                  <div className="lesson-image__component image text-image lesson-image--default">
                    <span
                      data-link=""
                      data-classNamenames=" "
                      data-alt=""
                      data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/3__L2__003.png"
                      data-app=""
                      data-ios=""
                      data-android=""
                      className="lazyload adaptive-image-disabled"
                      style={{ paddingBottom: "71.166664%" }}
                    >
                      <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/3__L2__003.png"></span>
                      <noscript>
                        <img
                          src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/3__L2__003.png"
                          alt=""
                        />
                      </noscript>
                    </span>
                  </div>
                </div>
                <div className="lesson-content parbase section">
                  <div className="lesson-type-default">
                    <p>
                      You can see that the bid price reaches your chosen stop
                      level of 17,699 at 21:10:33 (in blue). This is when your
                      stop order is triggered, but it's executed at the next
                      available price of 17,695 at 21:10:36 (in green). This
                      means you have paid four points in slippage, but are
                      protected from the rest of the price drop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Guaranteed stops</h1>
              <p>
                If the risk of slippage feels a little worrying, there is an
                answer: you can use a guaranteed stop.
              </p>
              <p>
                A guaranteed stop works in the same way as a standard stop-loss,
                except that it will always be filled at exactly the level you
                set. Effectively, the broker or trading provider takes on the
                risk of slippage for you. Naturally they may&nbsp;require a fee
                for this additional service, and this can come in the form of a
                wider spread.
              </p>
              <p>
                Attaching a guaranteed stop puts an absolute limit on your
                potential loss, and this can be reassuring when you're trading
                in volatile markets or in large sizes.
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
                  For assets that are traded on exchange, prices are sourced
                  from an order book
                </li>
                <li>
                  For assets traded OTC, prices are sourced from providers
                  participating in the market
                </li>
                <li>
                  Slippage occurs when markets are moving rapidly and the price
                  you want becomes unavailable by the time your order is
                  executed
                </li>
                <li>
                  You can put an absolute cap on your losses by using a
                  guaranteed stop, although there will be a charge for doing so
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course3_Lesson4;
