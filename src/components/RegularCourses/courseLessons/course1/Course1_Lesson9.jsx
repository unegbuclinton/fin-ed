import React from "react";
import { Link } from "react-router-dom";

const Course1_Lesson9 = () => {
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
                  <Link to="/course1">What are commodities?</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 9</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> What are commodities?</h1>
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
              <p className="mt-3">
                Commodities are physical assets. Unlike shares, indices or
                currencies they are raw materials mined, farmed or extracted
                from the earth. Some examples include:
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section center-img">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-classNamenames=" "
                data-alt="Gold Oil Wheat Cattle"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__001.png"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ height: "162px" }}
                data-desktopheight="162"
                data-mobileheight="129"
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__001.png">
                  <img
                    alt="Gold Oil Wheat Cattle"
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__001.png"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__001.png"
                    alt="Gold Oil Wheat Cattle"
                  />{" "}
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                To be officially{" "}
                <b>
                  <i>tradable</i>
                </b>
                , a commodity must be entirely interchangeable with another
                commodity of the same type, no matter where it was produced,
                mined or farmed.
              </p>
              <p>
                For example, to a commodity trader, gold is gold. It doesn't
                matter where it was extracted. An ounce of gold mined in
                Australia is worth exactly the same amount as an ounce of gold
                mined in China, the USA or Tanzania.
              </p>
              <p>
                The same can be said of other commodities such as natural gas,
                cotton and copper, so long as they meet certain minimum quality
                or purity standards.
              </p>
              <p>
                Economists call this being <b>fungible</b> and it means large
                quantities of commodities can be traded relatively quickly and
                easily on an exchange. This is because every trader can be
                confident they are buying/selling equivalent assets without
                needing to inspect them, or find out where or how they were
                produced.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">How are they traded?</h1>
              <p>There are two main ways to trade commodities:</p>
              <h3>The spot market</h3>
              <p>
                The spot market is where financial assets are sold for cash and
                exchanged right there and then. So, if you need{" "}
                <b>
                  <i>immediate delivery</i>
                </b>{" "}
                of a commodity, you'd head to the spot market.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-classNamenames=" "
                data-alt="Spot market"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L9__003.png"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ height: "126px" }}
                data-desktopheight="126"
                data-mobileheight="101"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L9__003.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L9__003.png"
                    alt="Spot market"
                  />{" "}
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                For example, say you ran a business that built industrial pipes.
                You recently got an order for a large amount of copper piping,
                but there's none left in the warehouse. You need the copper
                immediately, so your best bet is to go to the spot market and
                buy some.
              </p>
              <p>
                Similarly, if you owned a mining company and had some copper you
                wanted to get off your hands straight away, you'd try and sell
                it on the spot market.
              </p>
              <p>
                Due to the large quantities of commodities traded -&nbsp;and
                global nature of these trades -&nbsp;set standards are used by
                the spot market so traders can buy and sell commodities quickly
                without the need for a visual inspection.
              </p>
              <h3>The futures market</h3>
              <p>
                The futures market is a place where buyers and sellers agree to
                exchange{" "}
                <b>
                  <i>
                    a specific quantity of an asset at a fixed date in the
                    future, at a price agreed today.
                  </i>
                </b>
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-classNamenames=" "
                data-alt="Future market"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L9__004.png"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ height: "126px" }}
                data-desktopheight="126"
                data-mobileheight="101"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L9__004.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/newimages/1__L9__004.png"
                    alt="Future market"
                  />{" "}
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                The assets in question are not physically traded on the
                exchange, so the participants buy and sell futures contracts
                instead. This enables traders to speculate on the price of
                commodities without having to own them at any point, because the
                contracts can be sold or closed before the actual delivery date.
              </p>
              <p>
                Which is particularly useful if, for example, you want to trade
                on the price of cattle, but don't want several herds of live
                cows delivered to your door in a few months' time...
              </p>
              <p>
                While futures contracts are often used by individuals and
                companies looking to exchange physical commodities at a later
                date, they are predominantly used for speculation and hedging.
              </p>
              <p>
                It's also worth noting that the price of futures contracts tends
                to be different from buying or selling an identical amount of
                that same commodity on the spot market. That's because the
                seller needs to take into account future risks and charges, such
                as the cost to hold the commodity and then transport it to the
                buyer. Hence futures contracts are valued using{" "}
                <b>forward prices</b>, rather than spot prices.
              </p>
              <h1>Who trades commodity futures?</h1>
              <p>There are four main types of commodity futures trader.</p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--icon_point">
                  <span
                    data-link=""
                    data-classNamenames=" "
                    data-alt="one"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__002_1.jpg"
                    data-app=""
                    data-ios=""
                    data-android=""
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__002_1.jpg"></span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__002_1.jpg"
                        alt="one"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>Producers</h2>
                <div>
                  These are companies/individuals that produce or extract
                  commodities and enter into a futures contract to offset the
                  risk of future price movements. If, for example, you are a
                  coffee farmer and agree to sell your yield for a specific
                  price on a specific date, you will have a guaranteed income on
                  that date even if coffee prices plummet in the meantime.
                </div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--icon_point">
                  <span
                    data-link=""
                    data-classNamenames=" "
                    data-alt="two"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__002_2.jpg"
                    data-app=""
                    data-ios=""
                    data-android=""
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__002_2.jpg"></span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__002_2.jpg"
                        alt="two"
                      />{" "}
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>Speculators</h2>
                <div>
                  These are traders looking solely to profit on commodity price
                  movements. They generally have no interest in owning the
                  physical commodity itself.
                </div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--icon_point">
                  <span
                    data-link=""
                    data-classNamenames=" "
                    data-alt="three"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__002_3.jpg"
                    data-app=""
                    data-ios=""
                    data-android=""
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__002_3.jpg"></span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__002_3.jpg"
                        alt="three"
                      />{" "}
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>Hedgers</h2>
                <div>
                  These are mid- or long-term investors who hold commodities in
                  their portfolio to provide protection against downward
                  movements in other securities. Commodities tend to move in an
                  opposite direction (or at least an unconnected direction) to
                  certain stocks and bonds.
                </div>
                <div>
                  In the event of a stock market crash, for example, investors
                  holding commodities may not suffer as badly as those with
                  exclusively share-based portfolios. Gold in particular is seen
                  as a 'safe haven' and receives significant investment when
                  equities are unstable.
                </div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--icon_point">
                  <span
                    data-link=""
                    data-classNamenames=" "
                    data-alt="four"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__002_4.jpg"
                    data-app=""
                    data-ios=""
                    data-android=""
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__002_4.jpg"></span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L9__002_4.jpg"
                        alt="four"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>Brokers</h2>
                <div>
                  These are firms or individuals who buy and sell commodity
                  contracts on behalf of their clients.
                </div>
              </div>
            </div>
          </div>

          <div className="course-modules course-started lesson-progress">
            <div
              className="card col-md-6 offset-md-3 mt-5 p-5"
              style={{ border: "10px solid #ee701e" }}
            >
              <h2 className="text-center">Lesson Summary</h2>
              <ul>
                <li>
                  Commodities are physical assets that are mined, farmed or
                  extracted from the earth
                </li>
                <li>
                  They can be soft commodities (agricultural) or hard
                  commodities (energy and metals)
                </li>
                <li>They are traded on either the spot or futures market</li>
                <li>
                  The spot market is generally for buyers and sellers of the
                  physical commodity, while the futures market tends to be
                  dominated by speculators and hedgers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course1_Lesson9;
