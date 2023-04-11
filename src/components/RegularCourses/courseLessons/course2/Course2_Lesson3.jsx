import React from "react";
import { Link } from "react-router-dom";

const Course2_Lesson3 = () => {
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
                  <Link to="/course2">Buying and selling</Link>
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
        <h1> Buying and selling</h1>
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
            <div className="lesson-type-default mt-3 mb-3">
              <p>
                As the saying goes, 'it takes two sides to make a market'. The
                two sides concerned are:
              </p>
              <ul>
                <li>
                  <b>Buyers</b>, who usually believe an asset's value is likely
                  to rise - known as <b>'bulls'</b>
                </li>
                <li>
                  <b>Sellers</b>, who generally think an asset's value is set to
                  fall - known as <b>'bears'</b>
                </li>
              </ul>
            </div>
          </div>
          <div className="lesson-image parbase section center-img">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="Bear and bull"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L2__001.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "248px" }}
                data-desktopheight="248"
                data-mobileheight="198"
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L2__001.png">
                  <img
                    alt="Bear and bull"
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L2__001.png"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L2__001.png"
                    alt="Bear and bull"
                  />{" "}
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                The relationship between them powers the movements in market
                prices. Let's look at how that works.
              </p>
              <p>
                Suppose you were buying a car – you'd look for the lowest price
                on the model you wanted. And if other buyers were thin on the
                ground you might strike a good deal. On the other hand, if you
                were trying to bag a rare and sought-after vehicle, you might
                have to pay the seller a high price.
              </p>
              <p>
                In the same way, the balance of demand from buyers and supply
                from sellers influences prices in financial markets.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="Supply and demand"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L2__002.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "244px" }}
                data-desktopheight="244"
                data-mobileheight="195"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L2__002.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/How-trading-works/newimages/2__L2__002.png"
                    alt="Supply and demand"
                  />{" "}
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="sub">How levels of supply and demand move prices</p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Bid and ask prices</h1>
              <p>
                When you look at a quote for a financial asset, you'll generally
                see not one but two prices:
              </p>
              <ul>
                <li>
                  <b>Bid price&nbsp;</b>- the price you'll receive as a seller
                </li>
                <li>
                  <b>Ask price</b> - the price you'll pay as a buyer
                </li>
              </ul>
              <p>The ask price is also known as the 'offer price'.</p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">
                In a quote, the lower figure shown is normally the bid price and
                the higher is the ask price.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">The spread</h1>
              <p>So why do different prices apply for buyers and sellers?</p>
              <p>
                The gap between the bid and ask prices occurs because buyers and
                sellers often have contrasting views about the value of an
                asset:
              </p>
              <ul>
                <li>
                  The bid price is the highest price at which a buyer is
                  prepared to buy
                </li>
                <li>
                  The ask price is the lowest price for which a seller is
                  willing to sell
                </li>
              </ul>
              <p>
                The difference between the two prices is known as the 'spread',
                and also as the 'bid-ask spread' or 'bid-offer spread'.
              </p>
              <p>
                The spread may also incorporate a broker's fee for handling the
                trade. The broker quotes clients a price slightly lower than the
                fundamental bid price or slightly higher than the ask price,
                keeping the difference to cover its costs.
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
                  The balance between supply (sellers) and demand (buyers)
                  drives price movements in the financial markets
                </li>
                <li>
                  The bid price is the price you'll receive as a seller, while
                  the ask price (or offer price) is the price you'll pay as a
                  buyer
                </li>
                <li>
                  The gap between the bid and ask prices is called the spread,
                  and occurs because buyers and sellers often have differing
                  views about the value of an asset
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course2_Lesson3;
