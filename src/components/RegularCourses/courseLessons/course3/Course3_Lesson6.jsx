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
                  <Link to="/course3">Margin calls</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 6</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> Margin calls</h1>
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
                As we've discussed, to open a leveraged trade you need only
                deposit a fraction of its full value, but your losses can exceed
                this amount. This means that, if a position moves against you,
                your provider may ask you to provide additional funds to keep
                your trade running.
              </p>
              <p>
                These payments are properly known as 'variation margin',
                although people usually just refer to them as 'margin'. A
                request for variation margin is called a <b>margin call</b>.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-example">
              <h2 className="lesson-section-title lesson-title-example">
                Example
              </h2>
              <div className="example_text">
                Say you buy 8000 shares at 220p using leverage. The value of
                your position is therefore £17,600. The provider asks for an
                initial margin payment of 5%, which is £880.
              </div>
              <div className="example_text">
                The share price then drops by 1p to 219p, reducing the value of
                your position to £17,520. The margin requirement falls to 5% x
                £17,520 = £876 as a result.
              </div>
              <div className="example_text">
                However, although the initial margin requirement has reduced,
                you now have a running loss of 1p x 8000 = £80.00 to add to
                this, bringing the total required to keep your position open to
                £956. Unless you're already holding sufficient funds in your
                account to cover this, your provider will ask you to make a
                margin payment. If you don't do so promptly, they may scale back
                or even close your position completely.
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                Dividend payments on short positions and funding costs are other
                factors that may sometimes put your account into deficit,
                requiring you to deposit more money. So it's wise to remember
                that the initial cost of opening a position isn't the end of the
                story –&nbsp;you may need to have more funds available to top up
                your account as you go.
              </p>
              <h1 className="heading">Deciding whether to use leverage</h1>
              <p>
                We've seen that trading with leverage gives you comparatively
                greater profits –&nbsp;but also relatively larger losses. So
                does that make it riskier than conventional trading?
              </p>
              <p>
                From one perspective, yes. If you commit yourself to a leveraged
                trade based on the affordability of the initial margin, rather
                than your capacity to withstand the potential losses, you're
                undoubtedly playing with fire.
              </p>
              <p>
                However, as long as you think of every position in terms of its
                full value and downside potential, the risk is no greater than
                it would be when trading directly. Your eventual profit or loss
                is the same –&nbsp;it's only the outlay to produce it that
                differs.
              </p>
              <p>
                There are also a number of steps you can take to manage the
                risks of trading. We explain these in the 'Planning and risk
                management' course.
              </p>
              <p>
                So, provided you understand how leveraged trading works, it can
                be a very useful tool: there's no need to tie up a large amount
                of your trading capital on one trade, and you can deal on
                expensive assets at a fraction of the cost. Used sensibly,
                leverage can make trading easier and more convenient.
              </p>
              <h1 className="heading">Ways to trade with leverage</h1>
              <p>
                A wide range of leveraged trading products are available,
                covering almost every conceivable market, and many providers
                offer at least some degree of leverage on trades.
              </p>
              <p>
                Most leveraged trading is done through <b>derivative</b>{" "}
                products: financial instruments that derive their value from an
                underlying asset. With a derivative contract you never own the
                underlying asset directly, but you have a financial interest in
                its performance.
              </p>
              <p>
                Here are the main ways you can choose to trade with leverage:
              </p>
              <ul>
                <li>
                  <b>Spread betting (UK only)</b>
                  <br />
                  Financial spread betting providers enable you to place a bet
                  on the direction a market will take, rather than trading the
                  market directly.
                </li>
                <li>
                  <b>Contracts for difference (CFDs)</b>
                  <br />A CFD is an agreement to exchange the difference in
                  value of a particular asset from the time at which the
                  position is opened to the time at which it is closed.
                </li>
                <li>
                  <b>Forex trading</b>
                  <br />
                  You can speculate on the future value of one currency compared
                  to another via a forex broker.
                </li>
                <li>
                  <b>Futures</b>
                  <br />A futures contract is an agreement to buy or sell an
                  asset at some time in the future for a particular, specified
                  price.
                </li>
                <li>
                  <b>Options</b>
                  <br />
                  Options are contracts that give you the right, but not the
                  obligation, to buy or sell an underlying asset at a fixed
                  price on or before a certain date.
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
                  If a leveraged position moves against you, you may get a
                  margin call from your provider asking you to top up your
                  account
                </li>
                <li>
                  Leveraged trading can be regarded as riskier than traditional
                  trading, although profits and losses are the same in both
                  cases and only the initial outlay differs
                </li>
                <li>
                  Leveraged trading is mainly carried out using derivative
                  products
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
