import React from "react";

const AdvanceCourseThree = () => {
  return (
    <div className="container mt-5">
      <div className="page-header mb-3 mt-3">
        <div className="page-block">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="page-header-title"></div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a href="{% url 'adv_course1' %}">Controlling risk</a>
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
        <h1> Controlling risk</h1>
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
            <div className="lesson-type-default">
              <p className="mt-4">
                Following the first three rules will begin to help you manage
                risk in your trading activities. But these steps alone won't
                protect you from the risk that a single bad trade could wipe out
                your trading account if you risk too much on any one idea.
              </p>
              <p>
                So it's important to consider the amount of risk you're
                accepting on each and every trade.
              </p>
              <h1>Rule 4: control your risk amount per trade</h1>
              <p>
                Suppose you open a trade on EUR/USD, setting a protective
                stop-loss order at 100 pips and a limit 200 pips away. Could you
                still blow up your account?
              </p>
              <p>
                Yes, absolutely. If a move of 100 pips equates to 50% or more of
                your trading account, just that one trade could erase a
                significant portion of your equity if things go wrong.&nbsp;
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-example">
              <h2 className="lesson-section-title lesson-title-example">
                Example
              </h2>
              <p>
                Let's go back to the coin flip game in the last lesson. Suppose
                you hit a run of bad luck and lose five consecutive flips.
              </p>
              <p>
                What happens if each successive flip erases 50% of your
                remaining equity?
              </p>
              <p>
                Say you start with £10,000 in equity. After five flips you'll
                only have £625 remaining. That's a net drawdown of 93.75%, all
                because of five cases of bad luck.
              </p>
              <p>
                To get back to your original £10,000, you'd need to generate a
                return of 15,000%, since you're now starting from such a small
                base. Unfortunately this isn't likely to happen.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-alt="Loss - remaining capital"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L3__001.png"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ height: "162px" }}
                data-desktopheight="162"
                data-mobileheight="130"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L3__001.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L3__001.png"
                    alt="Loss - remaining capital"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                You can avoid this situation by controlling the risk amount on
                each individual trade setup.
              </p>
              <p>
                Many professional traders will keep their risk amount per
                individual trade idea to <strong>less than 1%</strong> of their
                account equity. That way, if any given trade idea doesn't work
                out, the most they stand to lose from it will still leave them
                with 99% or more of their account equity intact.
              </p>
              <p>
                So if your trading capital was £10,000, you'd risk no more than
                £100 per trade. That way, if you had an unlucky run of five
                successive losses, you'd still be left with a healthy £9500 in
                your account.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-link=""
                data-alt="Loss - remaining capital"
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L3__002.png"
                data-app=""
                data-ios=""
                data-android=""
                className="lazyload adaptive-image-disabled"
                style={{ height: "162px" }}
                data-desktopheight="162"
                data-mobileheight="130"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L3__002.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Moneymanagement/10__L3__002.png"
                    alt="Loss - remaining capital"
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                For newer traders it's a good idea to start with smaller
                amounts; but at no time should you risk more than 5% on any
                given idea. Frankly, markets are unpredictable, and even the
                most carefully planned trade by the most experienced trader can
                go wrong.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-homework">
              <h2 className="lesson-section-title lesson-title-homework">
                Homework
              </h2>
              <p>
                If you have any trades in progress at the moment, check to see
                if your risk vs reward ratio is 1:2 or higher.
              </p>
              <p>
                What percentage of your trading capital is at risk on each
                position, and are you comfortable that you could tolerate this
                level of loss if the unexpected happens?
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
                  A single bad trade could wipe out your capital if you accept
                  excessive risk
                </li>
                <li>Control the amount of risk you take on each trade</li>
                <li>
                  Risk no more than 1-5% of your trading capital on any single
                  idea
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceCourseThree;
