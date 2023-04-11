import React from "react";

const AdvanceCourseTwo = () => {
  return (
    <div className="container mt-5">
      <div className="page-header mb-3 mt-3">
        <div className="page-block">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="page-header-title"></div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  {" "}
                  <a href="{% url 'adv_course1' %}">
                    Balancing risk and reward
                  </a>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  {" "}
                  <a>Lesson 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> Balancing risk and reward</h1>
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
            <div className="lesson-type-default">
              <p className="mt-4">
                As we know, all trading involves the risk of loss. So, in every
                trade, the risk to your capital needs to be worthwhile for you
                in relation to the potential profit.
              </p>
              <h1>Rule 3: calculate your risk vs reward ratio</h1>
              <p>
                You can use the risk vs reward ratio to quantify the worth of a
                trade:
              </p>
              <p>
                <em>
                  Your risk vs reward ratio is the amount of risk you're taking
                  on in a trade, compared to the amount of potential reward.{" "}
                </em>
              </p>
              <p>
                This is an area where lots of new traders falter. They begin
                with the belief that they have to 'beat' the market - or
                'out-predict' other traders - in order to become profitable.
              </p>
              <p>
                There's just one problem with that:&nbsp; it's impossible to
                predict the future, no matter how much knowledge and experience
                you have.
              </p>
              <p>
                So instead of fixating on winning more, professional traders
                will usually focus heavily on their risk, ensuring that every
                pound, dollar, etc put on the table as risk capital is
                worthwhile in terms of the potential return.
              </p>
              <p>To illustrate why, let's look at an example:</p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-link=""
                data-alt="Flip a coin"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L2__001.jpg"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ paddingBottom: "43%" }}
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L2__001.jpg"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L2__001.jpg"
                    alt="Flip a coin"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-example">
              <h2 className="lesson-section-title lesson-title-example">
                Example
              </h2>
              <p>
                Imagine a game of flipping a coin, where you have to guess the
                result.
              </p>
              <p>
                On each toss of the coin, you have a 50% chance of your guess
                being correct. Now, if you lose £1 when you're wrong and make £1
                when you're right, you're moving towards breaking even. But as a
                trader you're not quite there yet, as you need to account for
                costs like spreads, slippage or commissions. &nbsp;
              </p>
              <p>
                So even with this arrangement, over the long term, you'll
                probably lose money.
              </p>
              <p>You could remedy that in&nbsp;two ways.</p>
              <ul>
                <li>
                  First, you could make sure you win on a higher percentage of
                  coin flips. But unfortunately that's impossible - the odds are
                  what they are
                </li>
                <li>
                  So the alternative is to win more when you're right than you
                  lose when you're wrong
                </li>
              </ul>
              <p>
                Many traders try to take the first option and win a higher
                percentage of trades. But, although this may seem easier than
                trying to beat the odds at coin flips, it can still prove very
                hard to do over the long run.&nbsp;
              </p>
              <p>
                A much more proactive approach is the second option: look for a
                bigger reward if you're right than you might lose if you're
                wrong. This is known as a <strong>'positive'</strong>{" "}
                <strong>risk vs reward ratio</strong>.
              </p>
              <p>
                Returning to our coin flip analogy, now imagine you lose £1 when
                you're wrong but make £2 when you're right. This would be a{" "}
                <strong>1:2 risk vs reward ratio</strong>.
              </p>
              <p>
                If you're right 50% of the time, the extra profit you make will
                more than offset what you lose when you're wrong.&nbsp;
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                In the same way, if you trade with a 1:2 risk vs reward ratio,
                you can be profitable by only being right 50% of the time.
                &nbsp;
              </p>
              <p>
                You can achieve this by setting your <strong>stops</strong> and{" "}
                <strong>limits</strong> at the appropriate levels:
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-alt="Stops and limits "
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L2__002.png"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ height: "266px" }}
                data-desktopheight="266"
                data-mobileheight="213"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L2__002.png"></span>
                <noscript>
                  {" "}
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L2__002.png"
                    alt="Stops and limits "
                  />{" "}
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                And in fact, even if you're only right 40% of the time, you can
                still be profitable with this 1:2 ratio. If you flipped the coin
                ten times, you'd lose £6 from your six failures, but make £8
                from your four successes.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-didyouknow">
              <h2 className="lesson-section-title lesson-title-didyouknow">
                Did you know?
              </h2>
              <p>
                In a 12-month study of traders'&nbsp;behaviour and the factors
                affecting their success, we found that those who implemented a
                positive risk vs reward ratio were almost three times more
                likely to be profitable than those who used a negative ratio.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-link=""
                data-alt="Reward to risk"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L2__003.png"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ paddingBottom: "65.833336%" }}
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L2__003.png"></span>
                <noscript>
                  {" "}
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L2__003.png"
                    alt="Reward to risk"
                  />{" "}
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                Bear in mind that you'll need to use a{" "}
                <strong>guaranteed stop</strong> if you want to ensure your
                position is closed at precisely the level you specify with no
                slippage. You can learn more about the different types of stop
                in our Orders, Execution and Leverage course.
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
                  The risk to your capital should be outweighed by the potential
                  profit on a trade
                </li>
                <li>
                  Your goal is to gain more if you're right than you might lose
                  if you're wrong
                </li>
                <li>
                  Using a 1:2 risk vs reward ratio means you can be profitable
                  even if you're only right 40% of the time
                </li>
                <li>
                  Set your limit order at twice the distance of your stop to
                  achieve a 1:2 ratio
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceCourseTwo;
