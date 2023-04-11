import React from "react";
import { Link } from "react-router-dom";

const Course1_Lesson4 = () => {
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
                  <Link to="/course1">Trading shares</Link>
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
        <h1> Trading shares</h1>
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
              <h1 className="text-center mt-5 mb-5 mobile-heading">
                How are shares traded?
              </h1>
              <p>
                Most major shares are traded on the stock market. This is a
                general term for a global network of specific exchanges where
                shares are bought and sold.
              </p>
              <p>
                For example, the majority of UK shares are traded on the London
                Stock Exchange (LSE), while most US shares can be found on the
                New York Stock Exchange (NYSE) or NASDAQ.
              </p>
              <p>
                These exchanges are highly-regulated marketplaces where buyers
                and sellers come together to negotiate the transaction of
                shares. Only certain qualified individuals are allowed to trade
                physically on the exchange itself, so investors generally need a
                stockbroker to act as a middleman.
              </p>
            </div>
          </div>

          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">What is a stockbroker?</h1>
              <p>
                The role of the stockbroker is to buy and sell stocks on their
                clients' behalf. Traditionally, an individual investor would
                need to call up their broker, who would then relay the trading
                instructions to a qualified dealer on the exchange. Nowadays,
                however, this process is almost always conducted online.
              </p>
              <p>There are three main types of broker:</p>
            </div>
          </div>
          <div className="lesson-content parbase section image-center">
            <div className="lesson-type-emblem service_image">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--icon_point">
                  <span
                    data-link=""
                    data-classNamenames=" "
                    data-alt="one"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L4__001__1.jpg"
                    data-app=""
                    data-ios=""
                    data-android=""
                    className=" lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100.0%" }}
                    data-picture=""
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L4__001__1.jpg">
                      <img
                        alt="one"
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L4__001__1.jpg"
                      />
                    </span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L4__001__1.jpg"
                        alt="one"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info ">
                <h2>Full-service</h2>
                <div>
                  Create and execute a strategy based on the investment goals of
                  the client -&nbsp;trading on their behalf.
                </div>
                <div className="options-image">
                  <b>High commission</b>
                </div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem service_image">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--icon_point">
                  <span
                    data-link=""
                    data-classNamenames=" "
                    data-alt="two"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L4__001__2.jpg"
                    data-app=""
                    data-ios=""
                    data-android=""
                    className=" lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100.0%" }}
                    data-picture=""
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L4__001__2.jpg">
                      <img
                        alt="two"
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L4__001__2.jpg"
                      />
                    </span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L4__001__2.jpg"
                        alt="two"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>Advisory</h2>
                <div>
                  Provide investment advice and recommend specific trades, but
                  leave the final decision to the client.
                </div>
                <div className="options-image">
                  <b>Medium commission</b>
                </div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem service_image">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--icon_point">
                  <span
                    data-link=""
                    data-classNamenames=" "
                    data-alt="three"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L4__001__3.jpg"
                    data-app=""
                    data-ios=""
                    data-android=""
                    className=" lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100.0%" }}
                    data-picture=""
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L4__001__3.jpg">
                      <img
                        alt="three"
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L4__001__3.jpg"
                      />
                    </span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L4__001__3.jpg"
                        alt="three"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>Execution-only</h2>
                <div>
                  Simply carry out the client's trading instructions, usually
                  via an online platform. No advice given.
                </div>
                <div className="options-image">
                  <b>Low commission</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course1_Lesson4;
