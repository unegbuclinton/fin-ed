import React from "react";
import { Link } from "react-router-dom";

const Course8_Lesson4 = () => {
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
                  <Link to="/course8">
                    What are the risks involved with investing?
                  </Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> What are the risks involved with investing?</h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img
            height="300"
            classNameName="img-responsive main-image"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/IG-Academy/com.ta.course1.img3x.jpg"
          />{" "}
        </div>
      </div>
      <div className="lesson__content">
        <div className="lesson_parsys parsys">
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p className="mt-4">
                Investing is not a one-way ticket to riches. Asset prices can
                fall as well as rise, and there are no guarantees you will make
                money on your investment.
              </p>
              <p>
                That’s why saving cash is considered the safe option. You earn
                interest with your bank or building society, your savings pot
                grows slowly and there’s very little risk of you actually losing
                any money.
              </p>
              <p>
                However, with low risk generally comes lower returns. And if the
                interest you’re earning is below the prevailing rate of
                inflation, then the real value of your cash savings is actually
                diminishing. For example, say you deposit £1000 in a savings
                account that grows by 1% annually. In one year, you’d have
                £1010. But if inflation grows by 2%, you’d need £1020 to have
                the same buying power you started with.
              </p>
              <p>
                Equities have historically delivered higher returns than cash
                over the long term, but share prices regularly fall as well as
                rise, and some companies fail completely. While you’ll invest
                with expectations of generating positive returns, you must also
                accept that you could end up with less money than you originally
                put in.
              </p>
              <p className="definition">
                <strong>Did you know?</strong>
              </p>
              <p className="definition">
                While it’s common for people to invest in individual companies,
                a balanced investment portfolio includes multiple other assets.
                As you’ve come to learn, you can also capitalise on the
                potential growth of ETFs, investment trusts, mutual funds and
                many other assets. You can build your own portfolio or employ a
                specialist individual or company to do this on your behalf.
              </p>
              <h3></h3>
            </div>
          </div>
          <div className="simple-text parbase section">
            <div className="simple-text theme--light">
              <p>
                Understanding your own appetite and tolerance for this risk is a
                key part of investing. Ask yourself how much you’re willing to
                commit to the markets, but also how much you can afford to lose
                if they happen to move against you.
              </p>
              <h3 className="heading">Diversification</h3>
              <p>
                One of the most effective ways of managing your risk is by
                diversifying your portfolio. This involves distributing your
                funds across different asset classNamees such as shares, bonds,
                gold or property.
              </p>
              <p>
                For instance, government bonds are a much lower-risk investment
                than shares and should produce fairly consistent returns. This
                will help to reduce the negative impact on your portfolio if the
                stocks you hold fall in value.
              </p>
              <p>
                Below is an example of a balanced investments portfolio that
                includes various assets spread across many regions.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-link=""
                data-classNamenames=" "
                data-alt="Image of a pie chart with an example of a balanced investment portfolio, showing assets like international stocks, bonds, commodities and more."
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/Module4_Beginners-08-.png"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ paddingBottom: "57.469242%" }}
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/Module4_Beginners-08-.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/Module4_Beginners-08-.png"
                    alt="Image of a pie chart with an example of a balanced investment portfolio, showing assets like international stocks, bonds, commodities and more."
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h3></h3>
              <p>
                Building a diverse portfolio of assets can help you manage your
                exposure to market fluctuations. If you invest in the stock
                market, for example, you may consider holding shares in
                different companies, from various economic sectors, in order to
                diversify your investments. This will help to spread the risk
                within your portfolio, making it less reliant on the performance
                of one company or sector.
              </p>
              <p>
                For example, when there’s an economic downturn, consumer-facing
                companies like retailers may see their shares fall in value as
                customers tighten their belts and revenues and profits fall as a
                result. However, pharmaceutical and utility companies should
                fare much better during periods like this because the products
                they sell are considered essentials and aren’t as prone to
                economic fluctuations.
              </p>
              <p>
                Buying individual shares is therefore a high-risk strategy, and
                one that can leave you overly exposed should they underperform.
                Assembling a decent-sized, well-diversified portfolio is
                generally a much safer bet.
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
                  The value of shares can fall as well as rise, so there’s a
                  risk you may sell them for less than what you paid
                </li>
                <li>
                  One way to mitigate this risk is to build a diverse investment
                  portfolio that includes a broad range of sectors and assets
                </li>
                <li>
                  When you build your portfolio, consider how much risk you’re
                  willing to take on – including how much of your investment
                  you’re prepared to lose if the markets turn against you
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course8_Lesson4;
