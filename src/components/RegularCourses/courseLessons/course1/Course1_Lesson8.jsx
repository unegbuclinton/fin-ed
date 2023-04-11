import React from "react";
import { Link } from "react-router-dom";

const Course1_Lesson8 = () => {
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
                  <Link to="course1">Trading forex</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 8</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> Trading forex</h1>
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
                What is a 'pip'?
              </h1>
              <p>
                Unlike share price movements, which are measured in recognisable
                units of currency such as pence or cents, forex changes are
                measured in very small units called <b>pips</b>.
              </p>
              <p>
                For example, if the EUR/USD price moves from 1.201<b>6</b>0 to
                1.201<b>7</b>0, that 0.0001 USD rise in value represents{" "}
                <b>one pip</b>.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section center-img">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-classNamenames=" "
                data-alt="EUR/USD"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L8__001.png"
                data-app=""
                data-ios=""
                data-android=""
                className=" lazyload adaptive-image-disabled"
                style={{ height: "195px" }}
                data-desktopheight="195"
                data-mobileheight="156"
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L8__001.png">
                  <img
                    alt="EUR/USD"
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L8__001.png"
                  />
                </span>
                <noscript>
                  {" "}
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L8__001.png"
                    alt="EUR/USD"
                  />{" "}
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                For most major currency pairs, a pip represents a one-digit move
                in the fourth decimal place.
              </p>
              <p>
                One important exception to this is where the <b>yen</b> is the
                counter currency. Here the second decimal place is the one to
                watch.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-classNamenames=" "
                data-alt="GBP/JPY"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L8__002.png"
                data-app=""
                data-ios=""
                data-android=""
                className=" lazyload adaptive-image-disabled"
                style={{ height: "195px" }}
                data-desktopheight="195"
                data-mobileheight="156"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L8__002.png"></span>
                <noscript>
                  {" "}
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/introducing-the-financial-markets/1__L8__002.png"
                    alt="GBP/JPY"
                  />{" "}
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                Any extra decimal places shown in the price are known as
                fractional pips or <b>pipettes</b>.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">What is a 'lot'?</h1>
              <p>
                Each one-pip movement in a forex price is only worth a tiny
                amount. So, to take advantage of these small changes in value,
                forex is traditionally traded in large batches called{" "}
                <b>lots</b>.
              </p>
              <p>
                A standard lot is 100,000 units of currency. You may also come
                across mini lots and micro lots, which represent 10,000 and 1000
                units respectively.
              </p>
              <table>
                <tbody>
                  <tr>
                    <th>Lot</th>
                    <th>Units of currency</th>
                  </tr>
                  <tr>
                    <td>Standard</td>
                    <td>100,000</td>
                  </tr>
                  <tr>
                    <td>Mini</td>
                    <td>10,000</td>
                  </tr>
                  <tr>
                    <td>Micro</td>
                    <td>1000</td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                Small investors generally don't have access to such large
                amounts of money, so many forex brokers allow clients to trade
                on <b>leverage</b>.
              </p>
              <p>
                Leverage essentially means you can open a large market position
                with a relatively small deposit -&nbsp;called <b>margin</b>. Any
                profit or loss is based on the full position however, so gains
                or losses could far exceed this amount. We look at leverage in
                more detail in the 'Orders, execution and leverage' course.
              </p>
            </div>
          </div>{" "}
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">What is a 'lot'?</h1>
              <p>
                Each one-pip movement in a forex price is only worth a tiny
                amount. So, to take advantage of these small changes in value,
                forex is traditionally traded in large batches called{" "}
                <b>lots</b>.
              </p>
              <p>
                A standard lot is 100,000 units of currency. You may also come
                across mini lots and micro lots, which represent 10,000 and 1000
                units respectively.
              </p>
              <table>
                <tbody>
                  <tr>
                    <th>Lot</th>
                    <th>Units of currency</th>
                  </tr>
                  <tr>
                    <td>Standard</td>
                    <td>100,000</td>
                  </tr>
                  <tr>
                    <td>Mini</td>
                    <td>10,000</td>
                  </tr>
                  <tr>
                    <td>Micro</td>
                    <td>1000</td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                Small investors generally don't have access to such large
                amounts of money, so many forex brokers allow clients to trade
                on <b>leverage</b>.
              </p>
              <p>
                Leverage essentially means you can open a large market position
                with a relatively small deposit -&nbsp;called <b>margin</b>. Any
                profit or loss is based on the full position however, so gains
                or losses could far exceed this amount. We look at leverage in
                more detail in the 'Orders, execution and leverage' course.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Major pairs</h1>
              <p>
                Theoretically you can exchange any currency in the world for any
                other currency, which means the variety of forex pairs you could
                potentially trade is vast. You could even speculate on the price
                of the Armenian dram versus the Zambian kwacha (AMD/ZMW) if you
                found a broker willing to trade that pair.
              </p>
              <p>
                In practice, however, the majority of forex trades take place on
                a few select currency pairs called the <b>majors</b>. What
                constitutes a major pair varies widely depending on who you
                speak to, but most include the following six which account for
                over 80% of global forex trade:
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <table>
                <tbody>
                  <tr>
                    <th>Currency pair</th>
                    <th>Currency names</th>
                  </tr>
                  <tr>
                    <td>EUR/USD</td>
                    <td>Euro / US dollar</td>
                  </tr>
                  <tr>
                    <td>USD/JPY</td>
                    <td>US dollar / Japanese yen</td>
                  </tr>
                  <tr>
                    <td>GBP/USD</td>
                    <td>Sterling / US dollar</td>
                  </tr>
                  <tr>
                    <td>USD/CHF</td>
                    <td>US dollar / Swiss franc</td>
                  </tr>
                  <tr>
                    <td>USD/CAD</td>
                    <td>US dollar / Canadian dollar</td>
                  </tr>
                  <tr>
                    <td>AUD/USD</td>
                    <td>Australian dollar / US dollar</td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                Notice that all these pairs include the US dollar, which is by
                far the single most traded currency in the world.
              </p>
              <h1 className="heading">Minor and exotic pairs</h1>
              <p>
                Pairs which are traded less frequently are known as <b>minor</b>{" "}
                currency pairs. You may also see them called{" "}
                <b>cross-currency</b> pairs or simply <b>crosses</b>,
                particularly if the US dollar isn't involved. The most popular
                minor pairs tend to contain the euro (EUR), sterling (GBP) or
                the Japanese yen (JPY).
              </p>
              <p>
                Some forex brokers may also refer to <b>exotic</b> or{" "}
                <b>emerging</b> pairs. These generally consist of one major
                currency against another from a small or emerging economy, for
                example GBP/MXN (sterling vs Mexican peso) or USD/PLN (US dollar
                vs Polish zloty).
              </p>
              <p>
                Finally, you may come across forex classNamees which are based
                on a region, such as <b>Australasian</b> pairs or{" "}
                <b>Scandinavian</b> pairs. These classNamees set currencies from
                their respective regions against one another, or pair them with
                others from around the world. For example AUD/NZD (Australian
                dollar vs New Zealand dollar) could be categorised as an
                Australasian pair, while EUR/NOK (euro vs Norwegian krona) would
                be a Scandinavian pair.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">What drives the forex markets?</h1>
              <p>
                We've looked at what forex is and how to place a trade, but why
                do currency prices change?
              </p>
              <p>
                Well, currencies are effectively barometers for the health of
                the region they represent. So, if you place a trade hoping a
                particular currency will rise, you are essentially betting on
                the economy of that country.
              </p>
              <p className="definition">
                In general terms, the stronger the economy of a country, the
                stronger its currency will be compared to other currencies.
              </p>
              <p>
                Therefore, the factors that affect a country's economy tend to
                have the greatest influence on a currency's price. These
                include:
              </p>
              <ul>
                <li>Interest rates</li>
                <li>Inflation rates</li>
                <li>Government policy</li>
                <li>Demand for imports and exports</li>
                <li>
                  Economic statistics such as a county's growth figures,
                  unemployment levels and manufacturing data
                </li>
              </ul>
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
                  Forex movements are measured in pips. For most pairs, a pip is
                  a one-digit move in the fourth decimal place of the price
                </li>
                <li>
                  Forex is traded in standard lots, which represent 100,000
                  units of currency
                </li>
                <li>
                  Currency pairs are usually classNameed as major, minor or
                  exotic
                </li>
                <li>
                  Generally, the stronger the economy of a country, the stronger
                  its currency will be
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course1_Lesson8;
