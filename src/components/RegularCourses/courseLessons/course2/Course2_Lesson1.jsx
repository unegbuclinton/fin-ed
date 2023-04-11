import React from "react";
import { Link } from "react-router-dom";

const Course2_Lesson1 = () => {
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
                  <Link to="/course2">What is forex?</Link>
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
        <h1> Who's involved in trading?</h1>
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
            <div className="lesson-type-default mt-3 mb-3">
              <p>
                As a trader, you'll come into contact with various individuals
                and bodies, and in some cases need their services to gain access
                to the markets.
              </p>
              <p>
                Here we'll look at these 'market participants', their functions
                and their motivations&nbsp;–&nbsp;and importantly your
                relationship with them.
              </p>
              <h1 className="heading">Retail traders</h1>
              <p>
                The terms 'retail trader' or 'retail investor' generally mean a
                private individual who buys and sells financial instruments
                using a personal account, not on behalf of an organisation. So
                that will probably be you.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-alt="Trader work place"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/2__L1__001.jpg"
                className="lazyload adaptive-image-disabled"
                style={{ paddingBottom: "42.857143%" }}
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/2__L1__001.jpg"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/2__L1__001.jpg"
                    alt="Trader work place"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                Retail traders generally deal in relatively small sizes, often
                in their spare time.
              </p>
              <p>
                However, some become semi-professional and use sophisticated
                technology and techniques from the comfort of their own homes.
              </p>
              <p>
                As a retail trader you have access to an incredible range of
                financial markets, and can trade them in multiple ways to suit
                your preferences.
              </p>
              <p>
                Let's say you decide to buy some shares. Would you be hoping to
                see long-term growth, accepting that the shares'&nbsp;value may
                fluctuate in the meantime? Or would you be hoping for a fast
                profit from short-term price movements, regardless of
                longer-term trends?
              </p>
              <p>
                If you're looking for long-term growth, you're more of an
                'investor', but if a fast profit is your goal you can call
                yourself a 'trader'. Investors are interested in overall price
                trends and the fundamental value of the assets they trade.
                Traders generally prefer to capitalise on volatility and the
                market reactions triggered by news events.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Brokers</h1>
              <p>
                As a retail trader, unfortunately you can't just stroll into
                your local stock exchange and start dealing in shares.
              </p>
              <p>
                To buy or sell in the stock market, and other financial markets,
                you'll generally need an authorised intermediary or broker to
                act on your behalf. You may be picturing a bowler-hatted City
                gentleman, but in fact it's more likely to be a company that
                provides an online trading platform.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-alt="Broker"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/2__L1__002.jpg"
                className="lazyload adaptive-image-disabled"
                style={{ paddingBottom: "42.857143%" }}
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/2__L1__002.jpg"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/2__L1__002.jpg"
                    alt="Broker"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                A broker can be either a firm or an individual, and might offer:
              </p>
              <ul>
                <li>
                  <b>Full service </b>–&nbsp;actively managing your investments
                  and providing personal advice
                </li>
                <li>
                  <b>Advisory management</b>&nbsp;–&nbsp;providing
                  recommendations but leaving the final decision to you
                </li>
                <li>
                  <b>Execution-only dealing</b>&nbsp;–&nbsp; simply carrying out
                  your instructions to trade, on demand
                </li>
              </ul>
              <p>
                Of course, the greater the input you want from your broker, the
                higher the fee you'll need to pay.
              </p>
              <p>
                As well as representing you and executing your trades, some
                brokers also separately buy and sell on their own account. A
                broker who does this is known as a <b>broker-dealer.</b>
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Trading on exchange versus OTC</h1>
              <p>
                Suppose you want to trade shares in a FTSE 100 plc. As the
                company is listed on a formal exchange, in this case the London
                Stock Exchange, you trade its shares 'on exchange' through your
                stockbroker.
              </p>
              <p>
                An exchange has a central physical location –&nbsp; often in an
                iconic building –&nbsp; where brokers and dealers come together
                to buy and sell. Most market participants transact remotely and
                electronically, but some deals can be made in person by traders
                on the exchange's trading floor.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="Building"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L1__003.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "404px" }}
                data-desktopheight="404"
                data-mobileheight="323"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L1__003.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L1__003.png"
                    alt="Building"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                However, if you want to trade a forex pair, an unlisted stock,
                or any other instrument that's not listed on an exchange, you'll
                generally need to do so via a broker-dealer who offers it as an
                'over-the-counter' (OTC) market.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                OTC markets have no central physical location.
              </p>
              <p>
                OTC markets exist as virtual networks of participants, who trade
                with each other electronically or by phone.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="Otc markets"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L1__004.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "404px" }}
                data-desktopheight="404"
                data-mobileheight="323"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L1__004.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L1__004.png"
                    alt="Otc markets"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                In OTC markets, dealers set their own prices, and transactions
                can be executed privately, with the dealing price invisible to
                other market participants.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-didyouknow">
              <h2 className="lesson-section-title lesson-title-didyouknow">
                Did you know?
              </h2>
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--default">
                  <span
                    data-alt="Outcry"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/2__L1__007.jpg"
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "42.857143%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/2__L1__007.jpg"></span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/2__L1__007.jpg"
                        alt="Outcry"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="fact">
                Traditionally, trading at exchanges was conducted using the
                <b>open outcry</b> method, in a part of the trading floor known
                as the <b>pit</b>.
              </div>
              <div className="fact">
                Traders shouted buy and sell orders to each other or used coded
                hand signals. A contract was made when one trader called out
                that they would sell at a particular price, and another replied
                that they would buy at that price.
              </div>
              <div className="fact">
                This method has largely been replaced by electronic trading
                systems, but is still used in a few exchanges such as the New
                York Mercantile Exchange and the London Metal Exchange.
              </div>
              <div className="fact">
                Although electronic trading is faster and more efficient, some
                argue the open outcry system provides more opportunity for
                traders to get the best prices.
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
                  Retail traders are private individuals who buy and sell
                  financial instruments using a personal account
                </li>
                <li>
                  A broker is an authorised intermediary who executes trades on
                  your behalf and may also give you advice
                </li>
                <li>
                  An exchange has a central physical location where brokers and
                  dealers come together to buy and sell
                </li>
                <li>
                  OTC markets are traded via a virtual network of broker-dealers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course2_Lesson1;
