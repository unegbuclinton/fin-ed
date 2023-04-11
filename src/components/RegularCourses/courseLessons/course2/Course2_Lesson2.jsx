import React from "react";
import { Link } from "react-router-dom";

const Course2_Lesson2 = () => {
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
                  <Link to="/course2">Other market participants</Link>
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
        <h1> Other market participants</h1>
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
                There are some market participants who you're unlikely to deal
                with directly, but still have a major influence on the markets
                and asset prices.
              </p>
              <h1 className="heading">Market makers</h1>
              <p>
                Suppose you want to buy a particular financial instrument, but
                nobody is selling.
              </p>
              <p>
                Fortunately this situation is unusual: there's generally a party
                who'll take the other side of your trade, and it's often a
                market maker -&nbsp;otherwise known as a
                <b>liquidity provider</b>.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                Market makers help keep the markets moving smoothly.
              </p>
              <p>
                A market maker is a firm or individual that holds an inventory
                of a particular security and quotes continuous prices to buyers
                and sellers.
              </p>
              <p>
                So if you place an order that goes through a market maker, it
                either deals from its own holding or seeks another party's order
                to offset yours. This happens electronically, almost
                instantaneously.
              </p>
              <p>
                Most market makers operate within exchanges, so your broker will
                transact with them on your behalf. The only market makers you're
                likely to deal with directly are <b>forex trading firms</b>,
                which offer clients the facility to buy or sell currencies OTC.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Institutional traders</h1>
              <p>
                Institutional investors or traders are organisations that deal
                in the financial markets, generally on a much larger scale than
                retail traders. As a retail trader, you may have little contact
                with these institutions, but it's useful to be aware of their
                activities.
              </p>
              <p>
                Institutional traders manage pools of money on behalf of
                individual investors, and this means they sometimes make trades
                of a magnitude such that they influence market price movements,
                particularly in shares.
              </p>
              <p>Institutional traders include:</p>
              <ul>
                <li>Banks</li>
                <li>Life assurance companies</li>
                <li>Pension funds</li>
                <li>Mutual funds</li>
                <li>Hedge funds</li>
              </ul>
              <p>
                The large size of these institutional traders' positions means
                that they can sometimes receive benefits such as reduced
                commission rates.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-didyouknow">
              <h2 className="lesson-section-title lesson-title-didyouknow">
                Did you know?
              </h2>
              <div className="fact">
                Typically institutions have a high level of trading expertise
                -&nbsp;but just occasionally this isn't the case.
              </div>
              <div className="fact">
                In the 1990s, UK institutional investor Barings Bank employed
                the now infamous Nick Leeson as one of its traders in Singapore.
                Leeson amassed losses totalling £827 million through
                unauthorised speculation on the Japanese markets. He
                successfully concealed his fraud until the Kobe earthquake
                caused Asian markets to crash, and with them Leeson's trades.
                When his losses were revealed, they resulted in the bank's
                collapse.
              </div>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">High-frequency trading</h1>
              <p>
                The development of ever-more-sophisticated technology has given
                birth to a specialised kind of institutional trading:
                high-frequency trading (HFT).
              </p>
              <p>
                HFT uses computers to automatically apply trading strategies and
                algorithms, finding and exploiting patterns, trends and tiny
                fluctuations in the market. Instead of employing teams of
                analysts and traders, an HFT firm relies on technology that can
                make multiple trading decisions in a fraction of the time it
                takes a human brain.
              </p>
              <p>
                This means HFT firms can open and close positions in the space
                of seconds, milliseconds, or even microseconds. They make these
                ultra-short-term trades in immense volumes, often aiming to
                capture just a tiny profit on each one.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="HFT"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L1__005.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "329px" }}
                data-desktopheight="329"
                data-mobileheight="263"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L1__005.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L1__005.png"
                    alt="HFT"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                HFT traders are the polar opposite of the traditional long-term
                investor, as they never accumulate portfolios or hold positions
                overnight. Their bread and butter is momentary market changes,
                rather than steady growth.
              </p>
              <p>
                HFT firms are so far removed from the world of retail traders
                that their activities have little significance for you. HFT is
                occasionally thought to contribute to general market volatility,
                and HFT firms can also benefit the market by acting as liquidity
                providers, but neither of these things will affect your trading
                decisions.
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
                <li>
                  A market maker provides liquidity by holding an inventory of a
                  particular security and quoting continuous prices to buyers
                  and sellers
                </li>
                <li>
                  Institutional traders manage large pools of money and trade
                  the financial markets on behalf of individual investors
                </li>
                <li>
                  High-frequency trading (HFT) uses technology to apply
                  algorithms, placing vast volumes of ultra-short-term trades
                  and capitalising on brief market fluctuations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course2_Lesson2;
