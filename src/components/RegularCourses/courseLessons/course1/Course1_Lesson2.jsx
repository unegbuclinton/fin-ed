import React from "react";
import { Link } from "react-router-dom";

const Course1_Lesson2 = () => {
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
                  <Link to="/course1">Technical Analysis Basis</Link>
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
        <h1> What are shares?</h1>
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

      <div
        className="lesson__component "
        data-courseid="com.ta.course1"
        data-tracking-name="introducing_financial_markets"
        data-uid="1"
        data-lid="2"
        data-acadloginapi="https://marketing-api.ig.com/v1/academyLogin"
        data-acaduserapi="https://marketing-api.ig.com/v1/academyUserApi"
      >
        <div className="lesson__content">
          <div className="lesson_parsys parsys">
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <h1 className="heading text-center mt-5 mb-3 mobile-heading">
                  Why trade the financial markets?
                </h1>
                <p className="heading">
                  Imagine that one day you decided to put all your savings under
                  the mattress for safekeeping. If you then forgot all about
                  that money, and left it alone for a year, it wouldn't have
                  grown. There would be exactly the same amount of money as you
                  put there in the first place.
                </p>
                <p>
                  In fact, in real terms, it would probably be worth&nbsp;
                  <strong>less</strong>&nbsp;than when you put it there, because
                  the cost of living is likely to have risen in the interim.
                </p>
              </div>
            </div>
            <div className="lesson-image parbase section image_center">
              <div className="lesson-image__component image text-image lesson-image--center">
                <span
                  data-
                  data-alt="Shares cash commodities"
                  data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L2__001.png"
                  className=" lazyload adaptive-image-disabled"
                  style={{ height: "150px" }}
                  data-desktopheight="150"
                  data-mobileheight="120"
                  data-picture=""
                >
                  <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L2__001.png">
                    <img
                      alt="Shares cash commodities"
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L2__001.png"
                    />
                  </span>
                  <noscript>
                    <img
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L2__001.png"
                      alt="Shares cash commodities"
                    />
                  </noscript>
                </span>
              </div>
            </div>
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <p className="heading">
                  Now, imagine you had instead used that money to buy financial
                  assets such as shares or commodities. Instead of lying
                  dormant, your money would have a much greater potential for
                  <strong>growth</strong> as the value of those shares or
                  commodities could go up. Though, of course, there's always the
                  risk they could drop in value as well.
                </p>
                <p>
                  Trading the financial markets is all about balancing that risk
                  with the potential reward, and picking assets likely to move
                  in your favour. As we'll see, if you do this sensibly and
                  intelligently, the rewards could be much greater than simply
                  letting your money sit in a bank account (or under the
                  mattress).
                </p>
                <h1 className="heading text-center mt-2 mb-3">
                  Investing vs trading
                </h1>
                <p>
                  What we've described above is called 'investing', essentially
                  a long-term form of financial trading which involves buying
                  and holding financial assets over a number of months or years.
                </p>
                <p>
                  In fact, it's quite likely that you're already investing in
                  the financial markets in some capacity -&nbsp;possibly only
                  passively. If you have a pension plan, for example, then
                  you're investing the money you're earning now with the
                  expectation it'll grow and be worth more when you retire.
                </p>
                <p>
                  Pension firms generally invest this money for you in return
                  for a management fee. In most cases however, you can have a
                  say in which financial instruments you put your money into.
                  And as the chart below shows, a few simple decisions now could
                  have a dramatic effect in the future.
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
            <div className="lesson-image parbase section image_center">
              <div className="lesson-image__component image text-image lesson-image--default">
                <span
                  data-alt="Value of investments chart"
                  data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L2__003.png"
                  className=" lazyload adaptive-image-disabled"
                  style={{ paddingBottom: "64.416664%" }}
                  data-picture=""
                >
                  <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L2__003.png">
                    <img
                      alt="Value of investments chart"
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L2__003.png"
                    />
                  </span>
                  <noscript>
                    <img
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L2__003.png"
                      alt="Value of investments chart"
                    />
                  </noscript>
                </span>
              </div>
            </div>
            <div className="lesson-content parbase section">
              <div className="lesson-type-default">
                <p>
                  Looking at the chart, you can see that £100 saved in cash in
                  1986 would be worth just £38 in 2014 due to inflation. If
                  you'd invested that £100 in the UK stock market you could have
                  received a return of around £1120.
                </p>
                <p>
                  But long-term investing isn't the only way of participating in
                  the financial markets, there's also <b>active trading</b>,
                  sometimes known as <b>speculation</b>.
                </p>
                <p>
                  While <i>investors</i> generally focus on the long-term value
                  of assets and attempt to build a portfolio that will perform
                  well in the future, <i>active traders</i> tend to focus on
                  short-term market movements, with some participants placing
                  hundreds of trades per day.
                </p>
                <p>
                  Whether you choose to focus on the long game, making only a
                  few trades per year, or whether you believe that every tiny
                  movement in price represents an opportunity, is entirely down
                  to you, your personality, and how much time you can devote to
                  trading.
                </p>
                <p>
                  We look at this topic in detail in the 'Planning and risk
                  management'&nbsp;course, but for now it's important to note
                  that there are many different ways to trade, and many
                  different types of trader. And whatever your interests, skills
                  or priorities, there's always a form of trading that will suit
                  you.
                </p>
                <p>
                  One of the main differences between traders is the type of
                  asset that they trade, and that's what we're going to start
                  looking at in the next lesson...
                </p>
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
                  Financial trading provides the potential for your money to
                  grow, but there's always the risk you can lose money as well
                </li>
                <li>Investing focuses on the long-term value of assets</li>
                <li>
                  Active trading focuses on shorter-term movements in price
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course1_Lesson2;
