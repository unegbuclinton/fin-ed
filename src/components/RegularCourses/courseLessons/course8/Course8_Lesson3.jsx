import React from "react";
import { Link } from "react-router-dom";

const Course8_Lesson3 = () => {
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
                  <Link to="/course8">Discover the investment landscape</Link>
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
        <h1> Discover the investment landscape</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img
            height="300"
            classNameName="img-responsive main-image"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/IG-Academy/com.ta.course1.img3x.jpg"
          />
        </div>
      </div>
      <div className="lesson__content">
        <div className="lesson_parsys parsys">
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="mt-4 ,b-4">
                There are many ways you can invest in the stock market. It’s
                important that you have an overview of the different types of
                investment vehicles available for your portfolio. In this
                section, we’ll help you understand how some of them work, along
                with their benefits and drawbacks.
              </p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className="lesson-image parbase section center-img">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="Image of a greyed-out map of the world with a briefcase on it. A line extends downward from the briefcase where there’s a bill of money."
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/Module4_Beginners-05.png"
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ height: "266px" }}
                data-desktopheight="266"
                data-mobileheight="213"
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/Module4_Beginners-05.png">
                  <img
                    alt="Image of a greyed-out map of the world with a briefcase on it. A line extends downward from the briefcase where there’s a bill of money."
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/Module4_Beginners-05.png"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/Module4_Beginners-05.png"
                    alt="Image of a greyed-out map of the world with a briefcase on it. A line extends downward from the briefcase where there’s a bill of money."
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="definition">Example</p>
              <p className="definition">
                Say you invested £10,000 into a ten-year government bond with a
                5% annual coupon. Each year, the government would pay you 5% of
                your £10,000 as interest, and at the maturity date they would
                give you back your original £10,000.
              </p>
              <p className="definition">
                If you invested the same amount in company shares, there’s no
                guarantee that you’ll receive a dividend – even if the company
                performs well. This is because some companies will instead
                reinvest profits into growing the business.
              </p>
              <p className="definition">
                Additionally, when you sell your shares, the amount you get may
                be higher or lower than your initial investment depending on how
                the company’s worth has changed over time.
              </p>
              <h3 className="heading">Bonds</h3>
              <p>
                Bonds behave more like savings accounts than traditional
                investments. The difference is that you take on a bit more risk
                when you lend money to a company or government.
              </p>
              <p>
                That’s because if the borrower can’t pay you back, you could
                only get back a percentage of the money you lent them. But the
                reward for taking this risk is earning a higher interest rate
                than you would at a bank. Plus, you can choose bonds whose
                returns are linked to inflation to ensure your returns are
                always above it.
              </p>
              <p>
                Bonds also have a maturity date, and your return is guaranteed
                if you hold them until that point. However, they can still be
                bought and sold along the way.
              </p>
              <h3 className="heading">Equities</h3>
              <p>
                Equities are riskier than bonds, but both can have their place
                in an investment strategy depending on your goals and attitude
                to risk. The higher the proportion of equities in your
                portfolio, the higher up the risk ladder you’re going, but the
                potential for generating better returns should also
                theoretically increase.
              </p>
              <p>
                However, you’ll also stand a greater chance of losing money on
                your investment. If you primarily invest in bonds, it’s a
                lower-risk strategy, but also one that’s likely to produce lower
                returns.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-alt="Image of a house with the pound currency symbol at its center."
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/Module4_Beginners-06.png"
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ paddingBottom: "102.79851%" }}
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/Module4_Beginners-06.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/Module4_Beginners-06.png"
                    alt="Image of a house with the pound currency symbol at its center."
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h3 className="heading">Property</h3>
              <p>
                Property is an asset className just like equities and bonds, but
                it’s a different kind of investment. It’s used to diversify
                holdings within a portfolio. With property, you’re investing in
                physical buildings such as office blocks, shopping malls and
                business parks. They produce a return from their rental income
                and may also grow in capital value.
              </p>
              <p>
                Property is similar to equities in that it has potential for
                growth, and like bonds it promises a reliable income stream. But
                property can also be volatile depending on the state of the
                property market and the economic cycle.
              </p>
              <h3 className="heading">Other asset classNamees</h3>
              <p>
                Other popular asset classNamees include infrastructure, where
                you invest in the debt used to build schools, hospitals and
                other public or private investments. You can also invest
                directly or indirectly into physical commodities like oil and
                gold.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h2>Tax wrappers</h2>
              <h3 className="heading">
                Stocks and shares individual savings accounts (ISAs)
              </h3>
            </div>
          </div>
          <div className="image parbase section full-image">
            <div
              className="image-component-root maxWidth--none"
              style={{ display: "block" }}
            >
              <picture>
                <img
                  alt=""
                  onload="this.style.backgroundImage = ''"
                  loading="lazy"
                  src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/Module4_Beginners-08-.png"
                  className=""
                />
              </picture>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                An ISA is an account that receives generous tax breaks from the
                government to encourage you to invest or save. It enables you to
                protect your savings and investments from tax on capital gains,
                dividends and interest.
              </p>
              <p>
                A stocks and shares ISA therefore acts as a ‘tax wrapper’ for
                your investments. As the name suggests you can hold stocks and
                shares – and some other assets – within the ISA wrapper, without
                having to pay any tax on capital gains or dividends.
              </p>
              <p>
                There’s a set ISA allowance for each tax year, which represents
                the maximum you’re able to invest in your ISA.
              </p>
              <h3 className="heading">Self-invested personal pension (SIPP)</h3>
            </div>
          </div>
          <div className="image parbase section full-image">
            <div
              className="image-component-root maxWidth--none"
              style={{ display: "block" }}
            >
              <picture>
                <img
                  alt="Image of a building with pillars holding it up."
                  onload="this.style.backgroundImage = ''"
                  loading="lazy"
                  src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/Module4_Beginners-07.png"
                  className=""
                />
              </picture>
            </div>
          </div>
          <div className="simple-text parbase section">
            <div className="simple-text theme--light">
              <p>
                A SIPP is a type of pension available to UK residents that
                grants you greater freedom when investing for your retirement.
                While other types of employee or personal pension only allow you
                to select between a set number of funds, a SIPP enables you to
                choose exactly what you want to trade from a wide range of
                investments. This usually includes (but isn’t limited to):
              </p>
              <ul>
                <li>ETFs</li>
                <li>Commercial property</li>
                <li>Fixed-income products</li>
                <li>Commodities such as gold</li>
                <li>Stocks listed on a recognised exchange</li>
              </ul>
              <p>
                SIPPs are subject to the same tax benefits as other types of
                pension, so you’ll receive relief relative to your current
                income tax rate. Just remember that tax laws can change and will
                depend on your individual circumstances, and that tax law may
                differ in a jurisdiction other than the UK.
                <br />
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
                  You can invest in a range of assets like equities, bonds,
                  property, commodities, ISAs and SIPPs
                </li>
                <li>
                  Equities enable you to invest in a company’s performance,
                  while bonds are a fixed debt-based investment
                </li>
                <li>
                  Investing in property lets you profit from a rise in capital
                  value as well as rental payments, but the risk is in the
                  potential downturn of property values
                </li>
                <li>
                  You can invest in commodities like oil and gold – whether or
                  not you choose to own the physical asset
                </li>
                <li>
                  ISAs and SIPPs are tax wrappers where you can make tax-free
                  investments with a limited annual allowance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course8_Lesson3;
