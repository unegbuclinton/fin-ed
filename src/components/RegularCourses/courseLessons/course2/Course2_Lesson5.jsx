import React from "react";
import { Link } from "react-router-dom";

const Course2_Lesson5 = () => {
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
                  <Link to="/course2">Going long and short</Link>
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
        <h1> Going long and short</h1>
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
            <div className="lesson-type-default mt-5 mb-5">
              <p>
                Most people think about trading in just one direction. They
                imagine buying an asset ('going long') before the price begins
                to rise. Then they imagine selling it just as it reaches its
                peak to reap a profit.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section center-img">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="going long and short"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L3__001.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "281px" }}
                data-desktopheight="281"
                data-mobileheight="225"
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L3__001.png">
                  <img
                    alt="going long and short"
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L3__001.png"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L3__001.png"
                    alt="going long and short"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                While this is an excellent goal for any trader to aim for, it's
                by no means the only potential way to capitalise on market
                movements.
              </p>
              <p>
                Opportunities can also arise in markets that are heading for a
                downturn, and in this section we'll see how you can trade these
                by 'going short' or 'short selling'.
              </p>
              <h1 className="heading">What is short selling?</h1>
              <p>
                When you go long, you open your trade by buying an asset whose
                value you expect to rise and close it by selling
                -&nbsp;hopefully for a higher price.
              </p>
              <p>To go short, you do the opposite.</p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                You sell to open a short trade and buy to close it.
              </p>
              <p>
                So, if you believe an asset's price is set to fall, you might
                decide to sell it now in the hope of later buying it back at a
                lower price to make a profit.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section ">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="open short position"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L3__002.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "271px" }}
                data-desktopheight="271"
                data-mobileheight="217"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L3__002.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L3__002.png"
                    alt="open short position"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                Of course, you may logically assume that you first need to own
                the asset concerned in order to sell it. But in fact this isn't
                the case: it's possible to effectively borrow the asset so you
                can sell it short.
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">How does short selling work?</h1>
              <p>The easiest way to explain this is through an example.</p>
              <p>
                Let's say that shares in XYZ plc are trading at 1000p. Jonathan
                decides to borrow 100 XYZ plc shares from his stockbroker to
                short-sell, as he believes the price will soon fall.
              </p>
              <p>
                Jonathan's broker lends him the shares, borrowing them from its
                own inventory, another client's holdings, or perhaps another
                brokerage. It sells the shares for Jonathan and credits his
                account with the proceeds (£1000).
              </p>
              <p>
                The XYZ plc share price then falls to 800p, and Jonathan decides
                to close (or 'cover') his trade. The broker therefore buys 100
                shares for him, deducting the purchase cost of £800 from his
                account and returning the shares to their original owner.
              </p>
              <p>
                This leaves Jonathan with a gross profit of £200 in his account.
                His broker will also charge commission for handling the
                transaction, the lender will require a borrowing fee, and there
                could be other costs for the trade, which we'll discuss shortly.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <div className="table">
                <table>
                  <tbody>
                    <tr>
                      <th>Proceeds of sale to open trade (100 x 1000p)</th>
                      <td>£1000</td>
                    </tr>
                    <tr>
                      <th>Cost of covering (100 x 800p)</th>
                      <td>£800</td>
                    </tr>
                    <tr>
                      <th>Gross profit</th>
                      <td>£200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="example schema"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L3__003.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "494px" }}
                data-desktopheight="494"
                data-mobileheight="395"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L3__003.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L3__003.png"
                    alt="example schema"
                  />
                </noscript>
              </span>
            </div>
          </div>

          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">What are the limitations?</h1>
              <p>
                In Jonathan's trade above, he was able to borrow the shares he
                needed through his broker. But what if his broker didn't hold
                any XYZ plc shares and nobody wanted to lend the stock? If XYZ
                plc was 'unborrowable' at the time, Jonathan would have been
                unable to make his short trade.
              </p>
              <p>
                Similarly, a lender might occasionally need to ask for its stock
                back while a short trade is in progress. This is known as 'being
                called away'. If it happens to you, even if you're not ready to
                close your trade yet, you may be obliged to cover.
              </p>
              <p>
                It's also worth being aware that brokers may sometimes be unable
                to offer short trading facilities, for example for assets below
                a certain value. It's up to each brokerage to set its own
                criteria, so a different firm may be able to help you if this
                happens.
              </p>
            </div>
          </div>

          <div className="course-modules course-started lesson-progress">
            <div
              className="card col-md-6 offset-md-3 mt-5 p-5"
              style={{ border: " 10px solid  #ee701e" }}
            >
              <h2 className="text-center">Lesson Summary</h2>
              <ul>
                <li>
                  Trading by buying an asset is called 'going long' while
                  selling is 'going short'
                </li>
                <li>
                  To open a short trade, you sell an asset whose value you
                  expect to decline. To close, you buy it back (also known as
                  'covering'). If you can now buy the asset at a lower price,
                  you pocket the difference.
                </li>
                <li>
                  If an asset's value increases, short sellers will lose money
                  while traders with long positions profit
                </li>
                <li>
                  In order to sell an asset you don't own, you must first be
                  able to borrow it from a lender
                </li>
                <li>
                  You can be 'called away' from a short trade if the lender
                  needs to reclaim the asset you've borrowed
                </li>
                <li>
                  If you borrow shares to sell short, you will need to
                  compensate the lender for any dividends or other corporate
                  actions announced during the borrowing period
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course2_Lesson5;
