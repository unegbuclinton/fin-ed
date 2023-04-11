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
                  <Link to="/course3">What is an order?</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 1</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> What is an order?</h1>
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
                Suppose you decide you're ready to open or close a trade
                –&nbsp;how do you do it?
              </p>
              <p>
                You'll need to give your broker or trading provider the details
                so they can buy or sell on your behalf, and this is called
                placing an order.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">What is an order?</h1>
              <p className="definition">
                An order is simply an instruction to buy or sell an asset.
              </p>
              <p>
                There are various types of order, enabling you either to trade
                immediately or to wait until certain market conditions occur.
              </p>
              <p>
                Once you've placed an order, you're free to turn your attention
                away from trading and leave the order to get on with the job in
                your absence. Depending on the type of order you choose, it can
                automatically:
              </p>
              <ul>
                <li>
                  Open a trade at the time when you judge the conditions are
                  just right
                </li>
                <li>
                  Lock in profits by closing a trade when your target level is
                  reached
                </li>
                <li>
                  Limit losses by closing a trade when the price moves against
                  you by a certain amount
                </li>
              </ul>
              <p>
                You'll see how to choose the right order to do each of these
                things as we go through the different types in detail below.
              </p>
              <h1 className="heading">Market orders</h1>
              <p>
                If you simply want to deal immediately at the best price
                available, a market order is the one to use.
              </p>
              <p>
                Provided the market is liquid enough -&nbsp;in other words, if
                there are enough willing buyers and sellers around at the time
                -&nbsp;your market order will be executed immediately.
              </p>
              <p className="definition">
                An order that has been executed is called a 'filled' order.
              </p>
              <p>
                It's important to be aware that market orders can be filled at a
                worse price than the current bid/ask price. We'll explain how
                this happens later in this course.
              </p>
              <h1 className="heading">Limit orders</h1>
              <p>
                On occasions when you want to wait until a price reaches a more
                favourable level before you trade, you'll need to use a limit
                order.
              </p>
              <p className="definition">
                A limit order is an instruction to trade if a market's price
                reaches a particular level that's more favourable than the
                current price.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-example">
              <h2 className="lesson-section-title lesson-title-example">
                Example
              </h2>
              <div className="example_text">
                Let's say GBP/USD is currently trading at 1.5055. Your analysis
                suggests that if it rises to 1.5065 it's then likely to fall
                again, so you decide to sell GBP/USD if it reaches 1.5065.
              </div>
              <div className="example_text">
                Rather than sitting in front of your screen monitoring the
                market, you place a limit order (known as a{" "}
                <b>limit entry order</b>) to open a short trade if the price
                hits 1.5065.
              </div>
              <div className="example_text">
                Two hours later, the market does indeed hit this level. Your
                broker executes your order and you sell GBP/USD.
              </div>
              <div className="example_text">
                Your trade then works in the normal way –&nbsp;so if GBP/USD
                falls as you predicted, you make a profit. If it continues to
                rise, however, you make a loss.
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                As well as using a limit order to open a new trade, you can also
                use it to close an existing position –&nbsp;protecting your
                profit if you're concerned the market might change direction and
                wipe out your gains.
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
                <li>An order is an instruction to buy or sell an asset</li>
                <li>
                  A market order will be executed immediately at the best price
                  available, provided there is sufficient liquidity
                </li>
                <li>
                  A market order may be filled at a worse price than the current
                  bid/ask price
                </li>
                <li>
                  A limit order is an instruction to trade if a market price
                  reaches a particular level more favourable than the current
                  price
                </li>
                <li>
                  You can use a limit entry order to open a new position, or
                  attach a limit order to close an existing position when the
                  price hits your target level
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course3_Lesson1;
