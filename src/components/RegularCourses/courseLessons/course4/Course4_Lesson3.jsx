import React from "react";
import { Link } from "react-router-dom";

const Course4_Lesson3 = () => {
  return (
    <div class="container mt-5">
      <div class="page-header mb-3 mt-3">
        <div class="page-block">
          <div class="row align-items-center">
            <div class="col-md-12">
              <div class="page-header-title"></div>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item " aria-current="page">
                  {" "}
                  <a href="{% url 'course4' %}">What is risk management?</a>
                </li>
                <li class="breadcrumb-item " aria-current="page">
                  {" "}
                  <a>Lesson 3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="banner">
        <h1> What is risk management?</h1>
      </div>
      <div class="row">
        <div class="col-md-12">
          <img
            height="300"
            class="img-responsive main-image"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/IG-Academy/com.ta.course1.img3x.jpg"
          />
        </div>
      </div>
      <div class="lesson__content">
        <div class="lesson_parsys parsys">
          <div class="lesson-content parbase section">
            <div class="lesson-type-default mt-4 mb-4">
              <p>
                Prices can go up, and prices can go down. One of the key parts
                to a successful trading plan is to ensure you manage your risk
                properly because, as any trader who's been in the game for long
                enough will know, you can't get it right every time.
              </p>
              <p>
                In finance, risk is defined as{" "}
                <b>
                  the potential for the actual return on an investment to be
                  lower than the expected return
                </b>
                .
              </p>
              <p>
                This includes the potential for loss and –&nbsp;if you're
                trading using leverage –&nbsp;the potential to lose even more
                than you put in.
              </p>
              <p>
                Risk management is a set of rules and measures you can put in
                place to ensure the impact of getting a decision wrong is
                manageable.
              </p>
              <p>
                In fact, traders with particularly effective risk management
                strategies can still make money even if they lose more trades
                than they win. That's because their winning trades are, on
                average, more profitable than their losses.
              </p>
              <p>
                We'll look into how that works a bit later, but first let's run
                through the three main types of risk you can come across when
                trading.
              </p>
              <h1 class="heading">Market risk</h1>
              <p>
                By far the most familiar type of risk is market risk. This is
                the possibility you will suffer losses due to movements in
                market prices.
              </p>
              <p>
                The four factors that have the greatest impact on market prices
                are:
              </p>
              <ul>
                <li>Interest rates</li>
                <li>Stock prices</li>
                <li>Foreign exchange rates</li>
                <li>Commodity prices</li>
              </ul>
              <p>
                It's worth noting that these factors do not directly have to
                change the price of the market you're trading to have an effect.
              </p>
              <p>
                For example, if you're trading a US stock from the UK, your
                profit or loss can be affected significantly by the GBP/USD
                exchange rate –&nbsp;even if the market price of the stock stays
                the same.
              </p>
              <p>
                Similarly, market prices can be influenced by many different
                elements working together or against each other.
              </p>
              <p>
                If you're trading on a major mining stock like Antofagasta, for
                instance, commodity prices will have a large effect on its share
                price –&nbsp;particularly copper as that's the main commodity
                the company produces.
              </p>
              <p>
                As most commodities are denominated in US dollars, the strength
                of the dollar will have a significant bearing on commodity
                prices and in turn the stock itself. Also, shifting monetary
                policy in China could potentially boost or dampen building
                expansion in the country, increasing or reducing global demand
                for commodities as building materials. This again could affect
                the mining company's share price.
              </p>
              <p>
                So, it's important to recognise that market risk can come from a
                number of different sources, some of which may not be
                immediately obvious when you first look at potential trading
                opportunities.
              </p>
              <h1 class="heading">Liquidity risk</h1>
              <p>
                Less well known, but still very significant, is liquidity risk.
                This is the risk that you can't buy or sell an asset quickly
                enough to prevent a loss. There are two main types:
              </p>
              <ul>
                <li>
                  <b>Asset liquidity risk</b> refers to the asset's ability to
                  be traded in the market. If, for example, you hold a
                  little-known stock and nobody wants to buy it, you may be
                  forced to sell at a less favourable price. This type of risk
                  tends only to be an issue in emerging or low-volume markets.
                </li>
                <li>
                  <b>Funding liquidity risk</b> is the potential for loss if one
                  of the parties involved in a trade cannot meet their financial
                  obligations when they need to. The resulting time delay could
                  have an impact on market prices, or may cause the trade to
                  fall through altogether.
                </li>
              </ul>
              <h1 class="heading">Systemic risk</h1>
              <p>
                Finally there's systemic risk –&nbsp;the risk that the entire
                financial system will be affected by a particular event or
                series of events.
              </p>
              <p>
                This occurred during the global financial crisis of 2008 where
                subprime debt issues and the subsequent collapse of major
                financial institutions, such as Lehman Brothers, caused stock
                markets to drop worldwide.
              </p>
              <p>
                As its effects are global, systemic risk is often very difficult
                to protect yourself against –&nbsp;though investors with more
                diverse portfolios tend not to be as badly affected as those who
                invest in just one sector or asset type.
              </p>
              <p>
                Other examples of systemic risk can include natural disasters,
                war and major political or regulatory change.
              </p>
            </div>
          </div>

          <div class="course-modules course-started lesson-progress">
            <div
              class="card col-md-6 offset-md-3 mt-5 p-5"
              style={{ border: "10px solid  #ee701e;" }}
            >
              <h2 class="text-center">Lesson Summary</h2>
              <ul>
                <li>
                  Risk management is a set of rules you can use to ensure
                  getting a decision wrong is manageable
                </li>
                <li>
                  Market risk is the potential to suffer loss due to movements
                  in market prices
                </li>
                <li>
                  Liquidity risk is the potential to suffer loss because you
                  can't buy or sell an asset quickly enough
                </li>
                <li>
                  Systemic risk is the potential for the entire financial system
                  to be affected by an event or series of events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course4_Lesson3;
