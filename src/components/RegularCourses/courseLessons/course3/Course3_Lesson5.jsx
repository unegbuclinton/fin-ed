import React from "react";
import { Link } from "react-router-dom";

const Course3_Lesson5 = () => {
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
                  <Link to="/course3">What is leverage?</Link>
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
        <h1> What is leverage?</h1>
      </div>
      <div className="row" style={{ backgroundColor: "#3a445d" }}>
        <div className="col-md-12">
          <img
            height="300"
            className="img-responsive"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/IG-Academy/com.ta.course1.img3x.jpg"
          />
        </div>
      </div>
      <div className="lesson__content">
        <div className="lesson_parsys parsys">
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                The clue is in the name. Just as a mechanical lever helps you
                move a heavy load with only a small amount of force, leverage
                enables you to gain a large exposure to a financial asset using
                only a small amount of your trading capital.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="leverage"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__001.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "194px" }}
                data-desktopheight="194"
                data-mobileheight="155"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__001.png">
                  <img
                    alt="leverage"
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__001.png"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__001.png"
                    alt="leverage"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                When you buy an asset in the traditional way, you generally need
                to pay the full purchase price up front: the total value of the
                shares, currency, barrels of oil or whatever you're trading.
                However, some providers offer the facility to trade using
                leverage, which means
                <b>
                  you only have to put up a fraction of the value of your
                  position
                </b>
                . Effectively, your provider lends you the rest of the purchase
                price.
              </p>
              <p>
                This means that any profit you make, which is still based on the
                full value of the position, appears magnified in comparison to
                your outlay. The flip side of this is that any losses are
                magnified in the same way.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                With leverage, both your profit and&nbsp;any loss can actually
                exceed your initial outlay.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-didyouknow">
              <h2 className="lesson-section-title lesson-title-didyouknow">
                Did you know?
              </h2>
              <div className="fact">
                Leverage is also known as 'gearing' or 'geared trading' in some
                countries, such as the UK and Australia.
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p></p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">How does it work?</h1>
              <p>Let's have a look at an example to illustrate this.</p>
              <p>
                Suppose you decide to buy 1000 shares in Tech Giant Inc. The
                share price is $1, so to open a conventional trade with a
                stockbroker you pay 1000 x $1 = $1000. (We'll ignore any
                commission or other charges to keep this example simple.)
              </p>
              <p>
                Alternatively, you could decide to trade using a provider that
                offers leverage facilities. The provider will ask you to pay
                just a percentage of the full $1000 to open your trade. This is
                known as a <b>margin</b> or
                <b>deposit</b> requirement, and the actual percentage will vary
                from asset to asset, and from provider to provider.
              </p>
              <p>
                Say your provider has set the margin requirement for Tech Giant
                Inc at 10%. This means you need to pay only 10% x $1000 = $100
                to open your position. You still have exposure to 1000 shares,
                but at a tenth of the initial cost.
              </p>
              <h1 className="heading">Magnified profits and losses</h1>
              <p>
                Now let's see what happens as your Tech Giant Inc trade
                progresses.
              </p>
              <p>
                Your decision to buy these shares was shrewd as the price now
                climbs to $1.20. You sell to close your trade for $1.20 x 1000 =
                $1200, giving you a profit of $200.
              </p>
              <p>
                Compare your profit to your initial outlay if you used
                conventional trading:
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="profit 1"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__002.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "237px" }}
                data-desktopheight="237"
                data-mobileheight="189"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__002.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__002.png"
                    alt="profit 1"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>And now with leveraged trading:</p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-classNamenames=" "
                data-alt="profit 2"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__003.png"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ height: "164px" }}
                data-desktopheight="164"
                data-mobileheight="131"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__003.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__003.png"
                    alt="profit 2"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                The leveraged trade has given you a 200% profit, whereas the
                return for the conventional trade is just 20%.
              </p>
              <p>
                However, take a moment to consider if, instead of rising, Tech
                Giant Inc had fallen by 20 cents, giving you a $200 loss. The
                leveraged trade would have resulted in a loss twice the size of
                your deposit.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-classNamenames=" "
                data-alt="profit 3"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__004.png"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ height: "164px" }}
                data-desktopheight="164"
                data-mobileheight="131"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__004.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Orders-execution-sand-leverage/newimages/3__L3__004.png"
                    alt="profit 3"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                It's vital to prepare yourself for situations like this by
                always keeping in mind the full value of your trade, and the
                potential for loss, when you're using leverage.
              </p>
              <p>
                This is particularly true in markets such as forex, where you
                deal in lots that can each be worth thousands of units of
                currency. At the same time, margin rates can be very low.
              </p>
              <p>
                So if you were to sell just one standard lot of 100,000 units of
                EUR/USD at 1.2910, the contract value would be $129,100. With a
                potential margin requirement of just 0.5%, your deposit for this
                very substantial trade would only be $645.50. It's easy to
                forget how much capital is at risk when the initial outlay is so
                affordable.
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
                      You decide to open a leveraged position buying 1000 shares
                      in Monster Mining Conglomerate plc, currently priced at
                      100p per share. Your provider's margin requirement for
                      Monster Mining Conglomerate plc is 5%.
                      <br />
                      <br />
                      What is your maximum possible loss on the position
                      (assuming you don't use a stop-loss), and how much margin
                      must you pay?
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
                          Maximum loss £1000, margin £50.00
                        </span>
                      </li>
                      <li
                        className="question__answer question__options"
                        data-answer="b"
                      >
                        <span className="question__answer-key">b</span>
                        <span className="question__answer-value">
                          Maximum loss £50.00, margin £50.00
                        </span>
                      </li>
                      <li
                        className="question__answer question__options"
                        data-answer="c"
                      >
                        <span className="question__answer-key">c</span>
                        <span className="question__answer-value">
                          Maximum loss £1000, margin £1000
                        </span>
                      </li>
                      <li
                        className="question__answer question__options"
                        data-answer="d"
                      >
                        <span className="question__answer-key">d</span>
                        <span className="question__answer-value">
                          Maximum loss £50.00, margin £1000
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
                        Your maximum loss is the full value of the shares
                        (£1000) if Monster Mining Conglomerate plc fails and the
                        stock drops to zero. Your margin payment is just 5% of
                        the full value, which is £50.00.
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
              <h1 className="heading">The cost of using leverage</h1>
              <p>
                To keep things simple, in the examples above we've ignored any
                charges and commissions that you might pay as part of the normal
                trading process. It's worth mentioning one cost that you could
                sometimes see when using leverage, though.
              </p>
              <p>
                Since you don't put up the full value of your position when you
                trade with leverage, this means your trading provider is
                effectively lending you the balance of the money. For this
                reason they may make a small charge to reflect their costs when
                you keep a trade open overnight. This is called an overnight
                funding charge. It varies between different products and
                provoiders, so keep an eye out for it in terms and conditions.
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
                  Leverage enables you to gain a large exposure to a financial
                  asset using a small amount of your trading capital
                </li>
                <li>
                  You need only put up a fraction of the full value of your
                  position, known as a margin or deposit payment, with the
                  provider effectively lending you the balance
                </li>
                <li>
                  Leverage magnifies both profits and losses, and these can
                  exceed your initial outlay
                </li>
                <li>
                  It's important to keep in mind the full value of your trade,
                  and its potential for loss, when using leverage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course3_Lesson5;
