import React from "react";
import { Link } from "react-router-dom";

const Course1_Lesson6 = () => {
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
                  <Link to="/course1">Trading stock indices</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 6</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> Trading stock indices</h1>
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
                How are major stock indices calculated?
              </h1>
              <p>
                Most major indices are either calculated using a
                capitalisation-weighted or a price-weighted system.
              </p>
              <h3>Capitalisation-weighted system</h3>
              <p>
                Used by the majority of stock indices, this system takes the{" "}
                <i>size</i> of each company into account when calculating the
                value of the index as a whole. So, the more a particular company
                is worth, the more its share price will affect the index.
              </p>
              <p className="definition">
                You can tell how much a particular company is worth by
                multiplying its share price by the number of shares issued. This
                is called its market capitalisation.
              </p>
              <p>
                The FTSE 100 is calculated using this method. So if, for
                example, BP is valued at twice the size of Barclays -&nbsp;any
                change to BP's share price will have twice as large an effect on
                the FTSE 100 as a similar change for Barclays.
              </p>
              <p>
                Other indices using this system include the S&amp;P 500,
                NASDAQ-100, Hang Seng, CAC 40, IBEX 35 and ASX 200.
              </p>
              <h3>Price-weighted system</h3>
              <p>
                This method is based on the actual share price of the companies
                in the index, rather than their overall size.
              </p>
              <p>
                The higher the share price, the more influence that company has
                on the value of the index. For example, a stock trading at $100
                would have five times more clout than one trading at just $20.
              </p>
              <p>
                The only two major indices that use this system are the Dow
                Jones Industrial Average and Nikkei 225.
              </p>
            </div>
          </div>

          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">How do you trade stock indices?</h1>
              <p>
                Since indices are effectively just numbers, you can't buy or
                sell them directly. There's no asset to own and nothing to
                exchange. Therefore, to trade on the price of an index, you need
                to choose a product that mirrors its performance. There are
                several that do this:
              </p>
              <h3>Index fund</h3>
              <p>
                A specialised investment fund that attempts to replicate the
                movements of a particular stock index. You can invest in index
                funds through a fund manager.
              </p>
              <p>
                <b>Exchange-traded fund (ETF)</b>
              </p>
              <p>
                A distinct type of index fund that can be traded like a stock on
                an exchange. Just like stocks, the price of ETFs can change
                throughout the trading day as they are bought and sold.
                Currently the largest ETF in the world is the SPDR S&amp;P 500
                which, unsurprisingly, tracks the S&amp;P 500.
              </p>
              <h3>Derivatives</h3>
              <p>
                Financial products that derive their price from the performance
                of an underlying instrument. For example: futures, options,
                digital 100s, spread bets or contracts for difference (CFDs).
              </p>
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
                  Capitalisation-weighted indices are calculated based on the
                  size of their component companies
                </li>
                <li>Price-weighted indices are based on share prices</li>
                <li>
                  Stock indices are just numbers so you cannot trade them
                  directly. You need to use funds or derivatives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course1_Lesson6;
