import React from "react";
import { Link } from "react-router-dom";

const Course2_Lesson6 = () => {
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
                  <Link to="/course2">Why do traders go short?</Link>
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
        <h1> Why do traders go short?</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img
            height="300"
            className="img-responsive main-image"
            style={{ objectFit: "cover" }}
            src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/IG-Academy/com.ta.course1.img3x.jpg"
          />
        </div>
      </div>
      <div className="lesson__content">
        <div className="lesson_parsys parsys">
          <div className="lesson-content parbase section">
            <div className="lesson-type-default mt-4 mb-4">
              <p>There are a number of reasons for short selling:</p>
              <h1 className="heading">Speculation</h1>
              <p>
                If you opened a speculative short position, your intention would
                be to profit from a potential downturn in the market.
              </p>
              <p>
                Speculative short selling enables traders to stay active even in
                bearish markets. However, trading in this way does mean assuming
                a high level of risk:
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                Your loss is theoretically unlimited.
              </p>
              <p>
                Suppose you sell 100 shares short at a price of 1000p: your
                maximum profit is £1000 if the stock sinks to zero. However, if
                the price rises to, say, 4000p, your loss is a painful £3000 –
                and could keep increasing indefinitely if the stock keeps going
                up. There's no limit to how high the price might go, after all.
              </p>
              <p>
                So it's important to manage your risk when short selling. We
                explain how to do this in the 'Planning and risk management'
                course.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-didyouknow">
              <h2 className="lesson-section-title lesson-title-didyouknow">
                Did you know?
              </h2>
              <div className="fact">
                Speculative short traders can be beneficial to the market,
                increasing trading volumes and liquidity. However, they can also
                influence market movements, even contributing to market crashes.
              </div>
              <div className="fact">
                In 1992, George Soros speculated that sterling would fall after
                a prolonged period in which the British government artificially
                propped up its value. Weakened by short-selling pressure,
                including large trades by Soros, the government's policy became
                unsustainable. Britain withdrew from the European Exchange Rate
                Mechanism, causing the pound to plummet. By risking $10 billion
                in short positions, Soros made $1 billion overnight, and his
                eventual profit was nearly $2 billion.
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Hedging</h1>
              <p>
                While speculators take on risk, in contrast hedgers seek to
                protect themselves against it.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                Taking a short position is a common strategy to offset (or
                'hedge') the risk of adverse price movements in a long position
                you hold.
              </p>
              <p>
                In brief, the idea is that if your long position makes a loss,
                your short position will make a profit to compensate.
              </p>
              <p>
                For example, if you own a selection of stocks from the FTSE 100,
                you might take a short position on the FTSE index as a whole to
                offset potential losses should the market fall. You'll still see
                a drop in your share portfolio, but your short position on the
                index itself will help reduce the overall loss.
              </p>
              <p>
                So a hedge is like a form of insurance. And, like any insurance,
                it has a cost: if your long position makes a profit, the short
                hedge will normally make a loss that reduces it. However,
                traders often feel the protection offered by the hedge makes
                this worthwhile.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Ways to short sell</h1>
              <p>
                In practice, retail traders may have difficulty finding a broker
                who offers short-trading services to private investors. However,
                you can also go short using a number of derivative products:
              </p>
              <ul>
                <li>Options</li>
                <li>Futures</li>
                <li>Spread betting (UK only)</li>
                <li>CFD trading</li>
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
                  Traders may go short in order to speculate on market movements
                  (taking on risk) or to hedge long positions (protecting
                  against risk)
                </li>
                <li>Risk is theoretically unlimited when you go short</li>
                <li>
                  As well as dealing through a broker, you can use derivative
                  products to go short
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course2_Lesson6;
