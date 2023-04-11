import React from "react";
import { Link } from "react-router-dom";

const Course6_Lesson1 = () => {
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
                  <Link to="/course6">What is spread betting</Link>
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
        <h1> What is spread betting</h1>
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
                Like all forms of betting, spread betting involves putting up
                some money in the hope of getting more back in return. What
                makes spread betting unique is that the amount you win or lose
                keeps on growing the more 'right' or 'wrong' you are.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                When you spread bet, the degree to which you're right or wrong
                determines your profit or loss.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                To see how this works, let's start by considering a more
                traditional form of betting, like betting on horse racing.
              </p>
              <p>
                You might be used to seeing bet prices or 'odds' such as 2/1 or
                3/1 (two or three-to-one). This is known as
                <b>fixed-odds betting</b>, because the amount you stand to win
                or lose is fixed according to the odds of your horse winning. If
                you bet £10 on Red Rum at 2/1 and Red Rum comes in first, you'll
                win £20 (plus your original £10 stake back). If Red Rum doesn't
                win, you lose your £10 stake.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section image_center">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-link=""
                data-classNamenames=" "
                data-alt="Horse racing"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L1__001.jpg"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ paddingBottom: "43%" }}
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L1__001.jpg">
                  <img
                    alt="Horse racing"
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L1__001.jpg"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L1__001.jpg"
                    alt="Horse racing"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                Now, what if you were betting not on whether Red Rum wins, but
                on the time it takes for him to complete the race?
              </p>
              <p>
                You could do this as a spread bet, staking £1 for every second
                over three minutes that it takes for Red Rum to finish. This
                means if he goes on to run the race in three minutes 20 seconds,
                you would win £20. And for every additional second you would win
                another pound.
              </p>
              <p>
                However the opposite is also true. If you're wrong and Red Rum
                finishes the race in less than three minutes, then for every
                second below three minutes you would lose a pound. So if he
                finishes in, say, two minutes 40 seconds, you would lose £20,
                and for every second slower you would lose another pound.
              </p>
              <p>
                This -&nbsp;winning or losing more according to the degree to
                which you're right -&nbsp;is the essence of spread betting.
              </p>
              <h1>Financial spread betting</h1>
            </div>
          </div>

          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                While you can spread bet on sporting events, and even on
                anything from the result of elections to fluctuations in house
                prices, by far the largest market in the UK centres around
                finance and the value of
                <b>financial assets</b>. These assets can be:
              </p>
              <ul>
                <li>
                  <b>Shares</b>, like Apple or BP
                </li>
                <li>
                  <b>Currencies</b>, like the euro (EUR) or US dollar (USD)
                </li>
                <li>
                  <b>Commodities</b>, such as gold, oil or sugar
                </li>
                <li>
                  <b>Stock indices</b> that track the performance of a group of
                  shares, such as the FTSE 100, or Nikkei 225
                </li>
                <li>
                  <b>Other financial products</b> such as interest rates,
                  government bonds, options, etc
                </li>
              </ul>
              <p>
                At any one time, each of these assets is worth a certain amount
                of money. This is its price or market value, and it changes over
                time.
              </p>
              <p>
                Today one share of Apple might be worth $112, but tomorrow its
                value may have risen to $115. Similarly, one euro could be worth
                around 85p this week, but in two months'&nbsp;time it might have
                dropped to 80p.
              </p>
              <p>
                Financial spread betting is simply betting on how the value of a
                financial asset will change in the future. In most cases, you're
                betting on whether it will rise or fall. If you think the price
                of the asset will go up, you 'buy'&nbsp;(also known as
                <b>going long</b>). If you think it will fall, you 'sell'&nbsp;(
                <b>go short</b>).
              </p>
              <p>
                If the price moves the way you anticipate, then your profit will
                continue to grow the further it goes. However, if the market
                moves against you, your losses will increase as the price
                movement becomes greater.
              </p>
              <p>
                Crucially,
                <b>you never need to physically own the underlying asset</b>.
                For example, you could speculate on the price of oil without
                actually having to own any oil. And as you're just betting on
                the direction oil will take, profits can potentially be made
                from the price <b>either rising or falling</b> in the underlying
                market.
              </p>
            </div>
          </div>
        </div>
        <div className="lesson__content">
          <div className="lesson_parsys parsys">
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <p>
                  Whenever you spread bet on something, you're presented with
                  two numbers: the buy price and the sell price.
                </p>
                <p>
                  So if you wanted to bet on the price of a stock index like the
                  FTSE 100, for example, you might see prices like this on your
                  spread betting platform:
                </p>
              </div>
            </div>
            <div className="lesson-image parbase section center-img">
              <div className="lesson-image__component image text-image lesson-image--center">
                <span
                  data-link=""
                  data-classNamenames=" "
                  data-alt="Sell buy"
                  data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/7__L2__001.png"
                  data-app=""
                  data-ios=""
                  data-android=""
                  className="lazyload adaptive-image-disabled"
                  style={{ height: "118px" }}
                  data-desktopheight="118"
                  data-mobileheight="94"
                  data-picture=""
                >
                  <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/7__L2__001.png">
                    <img
                      alt="Sell buy"
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/7__L2__001.png"
                    />
                  </span>
                  <noscript>
                    <img
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/7__L2__001.png"
                      alt="Sell buy"
                    />
                  </noscript>
                </span>
              </div>
            </div>
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <p>
                  If you thought the value of the FTSE was likely to rise, you
                  could 'buy'&nbsp;at the higher price - also known as the
                  <b>offer price</b> - of 6500.5.
                </p>
                <p>
                  If you expected the FTSE to fall, you could 'sell'&nbsp;at the
                  lower price -&nbsp;known as the bid price - of 6499.5.
                </p>
                <p>
                  The gap between these two prices is called the <b>spread</b>,
                  and this is what gives spread betting its name.
                </p>
                <h1>What is the spread?</h1>
                <p>
                  Neither the buy price nor the sell price represents the exact
                  value of the financial asset you're betting on (also known as
                  the <b>underlying asset</b>). Instead, the buy price is
                  slightly higher than this value, and the sell price is
                  slightly lower.
                </p>
                <p>
                  In the above example, the real-world value of the FTSE would
                  be halfway between the two prices, at 6500. The difference
                  between the buy and sell prices is just 1.0 in this instance,
                  which is a spread of <b>one point</b>.
                </p>
              </div>
            </div>
            <div className="lesson-image parbase section">
              <div className="lesson-image__component image text-image lesson-image--center">
                <span
                  data-link=""
                  data-classNamenames=" "
                  data-alt="What is the spread"
                  data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L2__002.png"
                  data-app=""
                  data-ios=""
                  data-android=""
                  className="lazyload adaptive-image-disabled"
                  style={{ height: "231px" }}
                  data-desktopheight="231"
                  data-mobileheight="185"
                >
                  <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L2__002.png"></span>
                  <noscript>
                    <img
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L2__002.png"
                      alt="What is the spread"
                    />
                  </noscript>
                </span>
              </div>
            </div>
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <h1>How does the spread affect me?</h1>
                <p>
                  The spread is essentially a fee that your spread betting
                  provider charges to place your bet, and the narrower the
                  spread, the better it is for you. Let's look at why.
                </p>
                <p>
                  To close a bet, you need to take the opposite action to when
                  you opened it. So if you open a bet by 'buying', you close by
                  'selling'&nbsp;and vice versa.
                </p>
                <p>
                  In our FTSE example above, if you 'buy'&nbsp;at 6500.5, you'll
                  need to 'sell'&nbsp;at the same price or higher when you close
                  the bet, or you'll make a loss. This means the underlying FTSE
                  price will have to rise by one point before you break even.
                </p>
              </div>
            </div>
            <div className="lesson-image parbase section">
              <div className="lesson-image__component image text-image lesson-image--center">
                <span
                  data-link=""
                  data-classNamenames=" "
                  data-alt="Underlying value"
                  data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L2__003.png"
                  data-app=""
                  data-ios=""
                  data-android=""
                  className="lazyload adaptive-image-disabled"
                  style={{ height: "231px" }}
                  data-desktopheight="231"
                  data-mobileheight="185"
                >
                  <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L2__003.png"></span>
                  <noscript>
                    <img
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Spread-betting-and-CFD-trading/7__L2__003.png"
                      alt="Underlying value"
                    />
                  </noscript>
                </span>
              </div>
            </div>
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <p>
                  So the size of the spread determines how far the market will
                  have to move for your bet to become profitable.
                </p>
                <h1>Bet sizes</h1>
                <p>
                  When you spread bet, you stake a certain amount of money on
                  each point of movement in an asset's price.
                </p>
                <p>
                  For example, if a UK share moved one penny in the underlying
                  market, that's the equivalent of one point. (Note that what
                  constitutes a point can vary between different markets and
                  providers.)
                </p>
                <p>
                  You can bet however much you want per point of movement,
                  subject to your provider's minimum bet size. Your profit or
                  loss is the difference in points between the opening and
                  closing prices, multiplied by the amount you've staked per
                  point.
                </p>
              </div>
            </div>
            <div className="lesson-content parbase section">
              <div className="lesson-type-example">
                <h2 className="lesson-section-title lesson-title-example">
                  Example
                </h2>
                <div className="example_text">
                  Steve believes that Oil Company P's value is set to rise.
                </div>
                <div className="example_text">&nbsp;</div>
                <div className="example_text">
                  Its shares are currently priced at £20 in the underlying
                  market, and Steve's spread betting provider is offering Oil
                  Company P at a spread of 1995/2005.
                </div>
                <div className="example_text">&nbsp;</div>
                <div className="example_text">
                  UK shares are quoted in pence, so this is the equivalent to a
                  bid price of £19.95 and an offer price of £20.05.
                </div>
                <div className="example_text">
                  <br />
                  Steve places a 'buy' bet at the offer price of 2005, staking
                  £5 per point.
                </div>
                <div className="example_text">&nbsp;</div>
                <div className="example_text">
                  A positive earnings forecast causes Oil Company P to surge to
                  a market price of 2200. It's now quoted at 2195/2205.
                </div>
                <div className="example_text">&nbsp;</div>
                <div className="example_text">
                  Steve decides to close his position, 'selling' at 2195.
                </div>
                <div className="example_text">
                  <br />
                  The underlying market has moved 200 points (from 2000 to
                  2200), however Steve's profit is based on a 190-point movement
                  (from 2005 to 2195). This is due to the spread.
                </div>
                <div className="example_text">&nbsp;</div>
                <div className="example_text">
                  As Steve bet £5 per point, his profit is calculated like this:
                </div>
                <div className="example_text">
                  <br />
                  £5 x 190 = £950.
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
                    Spread betting involves speculating on an outcome, and the
                    degree to which you're right or wrong determines the size of
                    your profit or loss
                  </li>
                  <li>
                    Financial spread betting involves speculating on price of a
                    financial instrument
                  </li>
                  <li>
                    The more the market moves in the direction you predict, the
                    more your profit will grow. The more the market moves
                    against you, the more your losses will increase
                  </li>
                  <li>
                    If you believe a financial instrument's price is going to
                    rise, you place a 'buy' bet. This is known as 'going long'.
                    If you think its price is going to fall, you place a 'sell'
                    bet. This is known as 'going short' or 'short selling'
                  </li>
                  <li>
                    When you spread bet, you're presented with a 'buy' price and
                    a 'sell' price for each asset
                  </li>
                  <li>
                    The 'buy' price is the higher price, and is also known as
                    the offer price
                  </li>
                  <li>
                    The 'sell' price is the lower price, and is also known as
                    the bid price
                  </li>
                  <li>The gap between the two prices is the spread</li>
                  <li>
                    The spread is wrapped around the underlying market price and
                    represents a fee for placing your bet
                  </li>
                  <li>
                    Spread betting involves staking an amount per point of
                    movement in the price of an asset
                  </li>
                  <li>
                    Your profit or loss is the difference in points between your
                    opening and closing prices, multiplied by your stake per
                    point
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

export default Course6_Lesson1;
