import React from "react";
import { Link } from "react-router-dom";

const Course1_Lesson3 = () => {
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
                  <a>Lesson 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> Why trade?</h1>
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
            <div className="lesson-type-default">
              <p>
                When you hear people speak about trading or investing, most
                likely they'll be talking about share trading. It's one of the
                most popular -&nbsp;and most traditional -&nbsp;ways to trade
                the financial markets. Particularly among individual investors.
              </p>
              <p>
                As we saw in the previous lesson, if you've got a pension plan,
                the chances are you're already investing in shares in some
                capacity. But what are shares? And how do they work?
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section ">
            <div className="lesson-image__component image text-image lesson-image--center image_center">
              <span
                dat
                data-alt="Total Company Value"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L3__001.png"
                className=" lazyload adaptive-image-disabled"
                style={{ height: "231px" }}
                data-desktopheight="231"
                data-mobileheight="185"
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L3__001.png">
                  <img
                    alt="Total Company Value"
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L3__001.png"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L3__001.png"
                    alt="Total Company Value"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                A share is a unit of ownership in a company.
              </p>
              <p>
                So, if a particular company is worth £10,000 and has issued 2000
                shares, each share would be worth £5 (10,000 ÷ 2000).
              </p>
              <p>
                As the share price fluctuates, so does the value of the company.
                Investors who buy shares in a company are hoping it will grow in
                value, enabling them to sell the shares at a higher price.
              </p>
            </div>
          </div>

          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Why do companies offer shares?</h1>
              <h3>To raise money</h3>
              <p>
                By allowing investors to buy part of the company, the management
                are able to raise capital to put back into the business. For
                example, they may need extra cash to expand into other
                territories, or launch a new line of products.
              </p>
              <p>
                If the funds are used wisely and the company becomes more
                profitable as a result, the value of the share price -&nbsp;and
                therefore the business -&nbsp;should rise.
              </p>
              <p>
                This means the company and its shareholders are heavily reliant
                on each other. The company needs shareholders to raise funds,
                and the shareholders hope the company will use their investment
                to grow the business -&nbsp;so they can make a profit.
              </p>
            </div>
          </div>

          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Why do share prices move?</h1>
              <p>
                Share prices can stay fairly stable for months, or move rapidly.
                The amount a share fluctuates is known as its <b>volatility</b>.
              </p>
              <p>
                Whether a share price moves up or down is based fundamentally on
                the laws of <b>supply and demand</b>. Essentially, if more
                people want to buy a share than sell it, the price will rise
                because the share is more sought-after (the 'demand' outstrips
                the 'supply'). Conversely, if supply is greater than demand then
                the price will fall.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section image_center">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-alt="Supply and demand"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L3__002.png"
                className=" lazyload adaptive-image-disabled"
                style={{ paddingBottom: "61.166668%" }}
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L3__002.png">
                  <img
                    alt="Supply and demand"
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L3__002.png"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L3__002.png"
                    alt="Supply and demand"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="sub">How levels of supply and demand move prices</p>
              <p>
                Supply and demand can be influenced by many factors, but the
                main two are:
              </p>
              <h3>Earnings</h3>
              <p>
                These are the profits a business makes. If the earnings are
                better than expected, the share price generally rises. If the
                earnings disappoint, the share price is likely to fall.
                Companies tend to release earnings announcements for a specific
                time period, usually a quarter, half or full year. The firm's
                share price can be particularly volatile immediately before and
                after the announcement, especially if the figures are
                significantly better or worse than anticipated.
              </p>
              <p>
                You can use an economic calendar to see when certain companies
                are releasing earnings results.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section image_center">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-alt="economic calendar"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L3__003.jpg"
                className=" lazyload adaptive-image-disabled"
                style={{ paddingBottom: "43.0%;" }}
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L3__003.jpg">
                  <img
                    alt="economic calendar"
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L3__003.jpg"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L3__003.jpg"
                    alt="economic calendar"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h3>Sentiment</h3>
              <p>
                This is perhaps the most complex and important factor in a share
                price. Share prices tend to react strongly to expectations of
                the company's future performance. These expectations are built
                on any number of factors, such as upcoming industry legislation,
                public faith in the company's management team, or the general
                health of the economy.
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
                <li>A share is a unit of ownership in a company </li>
                <li>
                  Companies offer shares to raise money, usually to invest back
                  in the business
                </li>
                <li>
                  Share prices are influenced by: supply and demand, earnings
                  figures and market sentiment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course1_Lesson3;
