import React from "react";
import { Link } from "react-router-dom";

const Course1_Lesson1 = () => {
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
                  <a>Lesson 1</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> What is financial trading?</h1>
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

      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mt-5 mb-5 mobile-heading">
            What is financial trading?
          </h1>
          <div className="text-left" style={{ wordWrap: "break-word" }}>
            That's where we come in. The purpose of our Trading Academy is to
            take you through financial trading from first principles. The more
            information you have, the less likely you are to make costly
            mistakes. And our goal is to provide you with all the knowledge you
            need to start making informed trading decisions.
            <br />
            <br />
            We're going to be looking at what, where and how you can trade.
            We'll teach you how to look out for trading opportunities, we'll
            investigate how to manage your risk, and we'll look at what
            techniques the professionals use to become consistently profitable
            traders - and much, much more.
            <br />
            <br />
            But before we do all that, let's address the fundamental question
            about financial trading. What exactly is it?
            <h2> What is financial trading?</h2>
            <p>
              Very simply, financial trading is the buying and selling of
              financial instruments. These instruments can take many forms, but
              some of the main categories are:
            </p>
            <ul className="mt-1">
              <li>
                Shares - small units of ownership in a company, such as Apple,
                Google, HSBC
              </li>
              <li>
                Indices - the value of a group of companies, represented as a
                single number, eg the FTSE 100, S&P 500, Nikkei 225
              </li>
              <li>
                Forex - global currencies, including the pound, dollar, euro
              </li>
              <li>
                Commodities - physical assets, raw materials and agricultural
                products, for example gold, oil, corn
              </li>
            </ul>
            <p>
              People and companies often trade financial instruments because
              they need the assets for themselves or their business. For
              example, you may be travelling from Europe to the USA and want to
              convert euros to dollars. To do this you would participate in the
              forex market.
            </p>
            <div className="lesson_parsys parsys">
              <div className="lesson-content parbase section">
                <div className="lesson-type-default">
                  <h1 className="heading">Introduction</h1>
                  <p>
                    When you first start looking in to it, financial trading can
                    be confusing. You're likely to hear a lot of jargon
                    surrounding it, some fairly recognisable such as
                    <b>interest rate</b>, <b>broker</b>, <b>commodity</b> or
                    <b>dividend</b>, and some you may never have heard before,
                    such as a <b>long strangle</b>, <b>EBITDA</b> or
                    <b>ichimoku cloud</b>.
                  </p>
                  <p>
                    However, beneath all the terminology, there's one core
                    principle that underpins financial trading: predicting
                    whether something will go up in price, or down. Get it right
                    and there's opportunity for great rewards. But get it wrong
                    and you could lose a lot of money.
                  </p>
                </div>
              </div>
              <div className="lesson-image parbase section image_center main-image">
                <div className="lesson-image__component image text-image lesson-image--default">
                  <span
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L1__001.png"
                    className=" lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "43.0%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L1__001.png">
                      <img
                        alt=""
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L1__001.png"
                      />
                    </span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L1__001.png"
                        alt=""
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson-content parbase section">
                <div className="lesson-type-default">
                  <p>
                    That's where we come in. The purpose of our Trading Academy
                    is to take you through financial trading from first
                    principles. The more information you have, the less likely
                    you are to make costly mistakes. And our goal is to provide
                    you with all the knowledge you need to start making informed
                    trading decisions.
                  </p>
                  <p>
                    We're going to be looking at <b>what</b>, <b>where</b> and
                    <b>how</b> you can trade. We'll teach you how to look out
                    for trading opportunities, we'll investigate how to manage
                    your risk, and we'll look at what techniques the
                    professionals use to become consistently profitable traders
                    -&nbsp;and much, much more.
                  </p>
                  <p>
                    But before we do all that, let's address the fundamental
                    question about financial trading. What exactly is it?
                  </p>
                  <h1 className="heading">What is financial trading?</h1>
                  <p>
                    Very simply, financial trading is the
                    <b>buying and selling of financial instruments</b>. These
                    instruments can take many forms, but some of the main
                    categories are:
                  </p>
                  <ul>
                    <li>
                      <b>Shares</b>&nbsp;-&nbsp;small units of ownership in a
                      company, such as Apple, Google, HSBC
                    </li>
                    <li>
                      <b>Indices</b>&nbsp;-&nbsp;the value of a group of
                      companies, represented as a single number, eg the FTSE
                      100, S&amp;P 500, Nikkei 225
                    </li>
                    <li>
                      <b>Forex</b>&nbsp;-&nbsp;global currencies, including the
                      pound, dollar, euro
                    </li>
                    <li>
                      <b>Commodities</b>&nbsp;-&nbsp;physical assets, raw
                      materials and agricultural products, for example gold,
                      oil, corn
                    </li>
                  </ul>
                  <p>
                    People and companies often trade financial instruments
                    because they need the assets for themselves or their
                    business. For example, you may be travelling from Europe to
                    the USA and want to convert euros to dollars. To do this you
                    would participate in the forex market.
                  </p>
                  <p>&nbsp;</p>
                </div>
              </div>
              <div className="lesson-image parbase section image_center">
                <div className="lesson-image__component image text-image lesson-image--center">
                  <span
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L1__002.png"
                    className=" lazyload adaptive-image-disabled"
                    style={{ height: "175px" }}
                    data-desktopheight="175"
                    data-mobileheight="140"
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L1__002.png">
                      <img
                        alt=""
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L1__002.png"
                      />
                    </span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L1__002.png"
                        alt=""
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson-content parbase section">
                <div className="lesson-type-default">
                  <p>
                    Or, a laptop manufacturer might need a large shipment of
                    aluminium to build components for its computers. When buying
                    the metal, the firm would be participating in the commodity
                    market.
                  </p>
                </div>
              </div>
              <div className="lesson-image parbase section image_center">
                <div className="lesson-image__component image text-image lesson-image--center">
                  <span
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L1__003.png"
                    data-app=""
                    data-ios=""
                    data-android=""
                    className=" lazyload adaptive-image-disabled"
                    style={{ height: "175px" }}
                    data-desktopheight="175"
                    data-mobileheight="140"
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L1__003.png" />
                    <img
                      alt=""
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L1__003.png"
                    />
                  </span>
                  <noscript>
                    <img
                      src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L1__003.png"
                      alt=""
                    />
                  </noscript>

                  <div className="lesson-content parbase section">
                    <div className="lesson-type-default">
                      <p>
                        However, <b>most of the time</b> financial traders don't
                        need the assets at all. They are simply looking to make
                        a profit from movements in the price, for example by
                        buying low, then selling high.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card col-md-6 offset-md-3 mt-5 p-5"
        style={{ border: "10px solid #ee701e" }}
      >
        <h2 className="text-center">Lesson Summary</h2>
        <ul>
          <li>
            Financial trading is the buying and selling of financial instruments
          </li>
          <li>
            There are many types of financial asset, including shares, indices,
            forex and commodities
          </li>
          <li>
            Most of the time financial traders don't want or need the assets -
            they trade to make a profit
          </li>
          <li>Financial markets are where buyers and sellers come to trade</li>
          <li>
            The markets are regulated to reduce fraud, keep transaction costs
            low and improve efficiency
          </li>
        </ul>
      </div>
      <div
        className=" border-left bg-white p-3 mt-5"
        style={{ borderLeft: "10px #ee701e solid" }}
      >
        <h5 style={{ color: "#ee701e" }}>
          <i className="fa fa-cog" aria-hidden="true"></i>
          Question
        </h5>
        <div>
          Company ABC is currently worth £1,200,000 and 3,000,000 shares have
          been issued. How much is one share worth in pence?
        </div>

        <div className="quiz">
          <form className="form-inline row mt-2 question-form">
            <div className=" col-md-8 mb-2 input-outer">
              <input
                type="number"
                required
                className="form-control input"
                ans="11000"
              />
            </div>
            <div className="col-md-2  mb-2">
              <button
                className="btn btn-outline-info question"
                style={{
                  backgroundColor: "#ee701e !important",
                  color: "white !important",
                  border: "none",
                }}
                type="submit"
              >
                Reveal Answer
              </button>
            </div>
          </form>
          <div
            className="correct-ans"
            style={{ fontSize: "16px;display:none" }}
          >
            <i className="fa-solid text-success fa-check"></i> £1,100 correct
            Answer
          </div>
          <div
            className="incorrect-ans"
            style={{ fontSize: "16px;display:none" }}
          >
            <i className="fa  text-danger  fa-times" aria-hidden="true"></i>
            £1,200,000. Incorrect
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course1_Lesson1;
