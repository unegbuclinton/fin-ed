import React from "react";
import { Link } from "react-router-dom";

const Course1_Lesson10 = () => {
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
                  <Link to="/course1"> Trading commodities</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 10</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> Trading commodities</h1>
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
              <h1 className="first text-center mt-5 mb-5 mobile-heading">
                Where are commodities traded?
              </h1>
              <p>
                Commodities are bought and sold on a number of exchanges
                specialising in a particular type of commodity.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem center-img">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--emblem">
                  <span
                    data-alt="LIFFE"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_1.png"
                    data-android=""
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100%" }}
                    data-picture=""
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_1.png">
                      <img
                        alt="LIFFE"
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_1.png"
                      />
                    </span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_1.png"
                        alt="LIFFE"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>LIFFE</h2>
                <div>
                  The London International Financial Futures and Options
                  Exchange is the largest trading floor for commodities in
                  Europe
                </div>
                <div>
                  <b>Speciality</b>
                </div>
                <div>Soft commodities: cocoa, wheat, coffee, sugar, corn</div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--emblem">
                  <span
                    data-alt="NYMEX"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_3.jpg"
                    data-android=""
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "99.17355%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_3.jpg"></span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_3.jpg"
                        alt="NYMEX"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>New York Mercantile Exchange (NYMEX)</h2>
                <div>
                  The world's largest physical commodities futures exchange
                </div>
                <div>
                  <b>Speciality</b>
                </div>
                <div>
                  Energy and metals: crude oil, natural gas, heating oil, RBOB
                  unleaded gas, gold, silver, copper, platinum, palladium
                </div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--emblem">
                  <span
                    data-alt="London Metal Exchange"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_2.jpg"
                    data-android=""
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_2.jpg"></span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_2.jpg"
                        alt="London Metal Exchange"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>London Metal Exchange</h2>
                <div>The world's leading non-ferrous metals market</div>
                <div>
                  <b>Speciality</b>
                </div>
                <div>
                  Metals that do not contain iron: aluminium, copper, tin,
                  nickel, zinc, lead, aluminium alloy, cobalt
                </div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--emblem">
                  <span
                    data-alt="ICE"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_4.jpg"
                    data-android=""
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "101.68067%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_4.jpg"></span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_4.jpg"
                        alt="ICE"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>ICE Futures US</h2>
                <div>
                  A leading global soft commodities futures and options exchange
                </div>
                <div>
                  <b>Speciality</b>
                </div>
                <div>
                  Soft commodities: sugar, cotton, cocoa, coffee, orange juice
                </div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--emblem">
                  <span
                    data-alt="CBOT"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_5.jpg"
                    data-android=""
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_5.jpg"></span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__002_5.jpg"
                        alt="CBOT"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>Chicago Board of Trade (CBOT)</h2>
                <div>The world's oldest futures and options exchange</div>
                <div>
                  <b>Speciality</b>
                </div>
                <div>
                  Grains: corn, soybeans, soybean oil, soybean meal wheat, oats,
                  rough rice
                </div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Contract size</h1>
              <p>
                Commodity futures are traded in <b>contracts</b>. Each commodity
                market has a standard size, set by the futures exchange where it
                trades. As commodities are often bought and sold in large
                amounts, the contract size also tends to be large.
              </p>
              <p>
                Let's take gold as an example. The contract size for gold
                futures is 100 troy ounces. So if gold is trading at $1100 per
                troy ounce and you buy just one contract of it, your contract
                would be worth $110,000 (1100 x 100 ounces).
              </p>
              <p>
                Small investors generally don't have access to such large
                amounts of money, so just like when trading forex, you can often
                trade commodity futures on <b>leverage</b>. Many exchanges and
                brokers also offer 'mini' contracts, which tend to be between
                10% and 50% of the size of a standard contract.
              </p>
              <p>
                It's very important to note that both standard and mini contract
                sizes vary widely depending on the type of commodity -&nbsp;so
                it's vital to check the contract size carefully before placing a
                trade.
              </p>
            </div>
          </div>

          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">What drives commodity prices?</h1>
              <p>
                As with all trading, the most important factor that affects
                commodity prices is the balance between <b>supply and demand</b>
                .
              </p>
              <p>
                If, for example, there's a good cotton crop which boosts the
                amount in circulation -&nbsp;the price of cotton will decrease
                (assuming that demand remains the same). On the other hand, if
                clothes manufacturers and other companies using cotton need more
                of the commodity, but producers don't have the capacity to match
                this demand, the price will increase.
              </p>
              <p>Other factors that drive commodity prices include:</p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--icon_point">
                  <span
                    data-alt="one"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__003_1.jpg"
                    data-android=""
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__003_1.jpg"></span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__003_1.jpg"
                        alt="one"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>The weather</h2>
                <div>
                  Agricultural commodities are particularly dependent on the
                  weather as it influences the harvest. A poor harvest will
                  result in low supply, causing prices to rise.
                </div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--icon_point">
                  <span
                    data-alt="two"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__003_2.jpg"
                    data-android=""
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__003_2.jpg"></span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__003_2.jpg"
                        alt="two"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>Economic and political factors</h2>
                <div>
                  Events such as war or political unrest can have a big effect
                  on prices. For example, turbulence in the Middle East often
                  causes the price of oil to fluctuate due to uncertainties on
                  the supply side.
                </div>
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-emblem">
              <div className="lesson-image parbase">
                <div className="lesson-image__component image text-image lesson-image--icon_point">
                  <span
                    data-alt="three"
                    data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__003_3.jpg"
                    data-android=""
                    className="lazyload adaptive-image-disabled"
                    style={{ paddingBottom: "100%" }}
                  >
                    <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__003_3.jpg"></span>
                    <noscript>
                      <img
                        src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L10__003_3.jpg"
                        alt="three"
                      />
                    </noscript>
                  </span>
                </div>
              </div>
              <div className="lesson__emblem_info">
                <h2>The US dollar</h2>
                <div>
                  Commodities are normally priced in US dollars, so their prices
                  generally move inversely to it. If the price of the dollar
                  falls, it takes more dollars to buy the same amount of
                  commodities -&nbsp;so the price of commodities rises.
                  Conversely, if the dollar goes up then it's cheaper to buy
                  commodities, all things being equal.
                </div>
              </div>
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
                  Commodities are bought and sold on special exchanges in
                  contracts
                </li>
                <li>
                  Contract sizes vary depending on the type of commodity traded,
                  but tend to be very large
                </li>
                <li>
                  However, smaller investors can usually buy and sell commodity
                  futures using leverage
                </li>
                <li>
                  Commodity prices are often very volatile and are affected by
                  supply and demand, the weather, geopolitical factors and the
                  value of the US dollar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course1_Lesson10;
