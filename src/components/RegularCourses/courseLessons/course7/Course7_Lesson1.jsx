import React from "react";
import { Link } from "react-router-dom";

const Course7_Lesson1 = () => {
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
                  <Link to="/course7">What is an investment strategy</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 1</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> What is an investment strategy?</h1>
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
            <div className="lesson-type-default mt-4 mb-4">
              <p>
                An investment strategy is a plan you develop as you go along on
                your journey to grow your wealth. It serves as a guide for how
                you’ll manage your investing.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section full-image">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="Image of a woman at different stages of her wealth-building journey against a backdrop of bar graphs. Money is stacked up at the last and highest bar."
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Share-dealing-strategy-infrequent-share-trader/Module-3-Share-dealing-strategy-01.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "250px" }}
                data-desktopheight="250"
                data-mobileheight="200"
                data-picture=""
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Share-dealing-strategy-infrequent-share-trader/Module-3-Share-dealing-strategy-01.png">
                  <img
                    alt="Image of a woman at different stages of her wealth-building journey against a backdrop of bar graphs. Money is stacked up at the last and highest bar."
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Share-dealing-strategy-infrequent-share-trader/Module-3-Share-dealing-strategy-01.png"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/Share-dealing-strategy-infrequent-share-trader/Module-3-Share-dealing-strategy-01.png"
                    alt="Image of a woman at different stages of her wealth-building journey against a backdrop of bar graphs. Money is stacked up at the last and highest bar."
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                There’s no blueprint strategy that all investors use. Your goals
                and financial circumstances are unique, so a good plan should
                reflect and account for that.
              </p>
              <p>
                Your strategy is where you’ll record important information about
                your investments and their performance. It will guide any future
                decisions you make and keep track of your capital, goals and
                risk tolerance.
              </p>
              <p>
                There are some important questions you need to answer before you
                begin investing. In the previous course, you thought about how
                much money you’ll need and what investing will cost you. Now you
                should be thinking about forming a strategy. Ask yourself these
                questions before starting:
              </p>
              <ul>
                <li>
                  <strong>Why do you want to invest?</strong>
                  <br />
                  Investing involves taking risk. Stock markets have
                  historically provided investors with greater returns than cash
                  savings have, but your investments can fall in value as well
                  as rise. Because of this, you need to carefully consider your
                  reason for investing, and whether you can afford to take the
                  risk and be prepared for all outcomes at the end of your
                  journey
                </li>
              </ul>
              <p></p>
              <ul>
                <li>
                  <strong>By when will you need your money?</strong>
                  <br />
                  As well as knowing why you’re investing, you should think
                  about how long you want to commit your money for and when
                  you’ll need to cash it in. Unlike saving money towards
                  something tangible such as a holiday or a deposit for a home,
                  which most people aim to do in three years or less, investing
                  requires a longer time commitment
                </li>
              </ul>
              <p></p>
              <ul>
                <li>
                  <strong>How much risk are you willing to take on?</strong>
                  <br />
                  Are you willing to put your money into high-risk investments
                  with the hopes of high returns? Or would you prefer something
                  more stable with less risk of losing your capital and profits?
                  This is one of the most important things to think about before
                  investing. We’ll discuss it later in this course
                </li>
              </ul>
              <p></p>
              <ul>
                <li>
                  <strong>
                    How much time can you dedicate to managing your portfolio?
                  </strong>
                  <br />
                  The economic landscape can change in a heartbeat due to social
                  and political events. This means you have to regularly monitor
                  your portfolio to ensure it’s on track to reaching your profit
                  target. Thinking about how much time you have will help you
                  decide whether you can manage your own portfolio or if you’ll
                  need someone else to do it for you
                </li>
              </ul>
              <p></p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-didyouknow">
              <h2 className="lesson-section-title lesson-title-didyouknow">
                Did you know?
              </h2>
              <p>
                You can build your own investment portfolio or you can delegate
                this task to a fund manager, financial advisor or investment
                firm. Some brokers allow you to invest in ready-made portfolios,
                such as our
                <strong>
                  <a href="/uk/investments/smart-portfolios">
                    IG Smart Portfolios
                  </a>
                </strong>
                , where you’d simply choose one that aligns best with your
                goals.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                In the next lessons, we’ll guide you through some more factors
                to consider to get you started on creating your strategy.
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
                  An investment strategy helps you prepare for your
                  wealth-building journey
                </li>
                <li>
                  It should be unique to your financial circumstances, goals and
                  risk profile
                </li>
                <li>
                  Just as the financial markets and economy change, your
                  portfolio will need to be adjusted as well
                </li>
                <li>
                  Your investment strategy needs careful consideration,
                  including whether you can manage it yourself or need to employ
                  a specialist
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course7_Lesson1;
