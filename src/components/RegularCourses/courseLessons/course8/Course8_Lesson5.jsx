import React from "react";
import { Link } from "react-router-dom";

const Course8_Lesson5 = () => {
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
                  <Link to="/course8">Am I ready to start investing</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Lesson 5</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1> Am I ready to start investing?</h1>
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
              <p>
                Once you’ve set your targets, understood the risks involved and
                planned how to manage them, there are two main questions to
                consider before you start investing.
              </p>
              <h3 className="heading">How much money do I need?</h3>
              <p>
                At one time, the main way to invest was through a stockbroker,
                who would normally require a substantial amount of money to put
                into the markets. Today, the digital revolution has really
                shaken things up. You can now invest into ready-made online
                portfolios with as little as £500. Remember, investing carries
                the risk that you may lose some of your capital, so only put in
                money you can afford to potentially part with.
              </p>
              <h3 className="heading">How much does it cost?</h3>
              <p>
                Cost is a critical part of the investment decision. Just as
                inflation can erode the value of cash savings over time, high
                costs and fees can eat into your investment returns.
              </p>
              <p>
                If you invest via a wealth manager or active fund manager,
                you’ll pay a premium in the form of fees and commissions. You
                need to ensure that the manager is regularly outperforming their
                benchmark, otherwise those fees are undermining your returns.
                For instance, if your portfolio generates returns worth 5% of
                its total value, and your management fee is sitting at 8%, it
                means you’re losing more money than you’re making.
              </p>
              <p>
                Many wealth managers will charge a percentage fee on the amount
                of money you have invested. So when your wealth grows, the
                management fee you pay grows too. If you do entrust your cash to
                a traditional wealth or active fund manager, there’s usually an
                initial charge of anything up to 5% of your deposit.
              </p>
              <p>
                There are also management and administrative fees to consider
                which are generally combined into a single annual percentage
                cost. It can be difficult to establish exactly how much the
                charges are and what they’re for, and many are often hidden. But
                what is certain is that for every 1% you pay in costs you need
                to make an extra 1% return.
              </p>
              <p>
                Alternatively, you could take advantage of an online wealth
                management service. These have an online process that helps you
                build a portfolio that is suitable to your current
                circumstances. The portfolio is still often designed and managed
                by a team of investment professionals.
              </p>
              <p>
                As the process is largely automated and available through online
                providers, the associated fees tend to be much lower than they
                are for active funds. Many online wealth management services
                will also build their portfolios using ETFs, which further
                reduces the costs to you. Charges are one of the most important
                elements in reducing investment returns, so make sure you know
                which costs will apply to you.
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
                  Before making an investment, think about how much money you’re
                  willing or able to commit to the markets
                </li>
                <li>
                  Consider a target date for your investments – this will help
                  inform how much you should be contributing
                </li>
                <li>
                  Service costs have the potential to eat away at your wealth,
                  so it’s important to understand these charges and their impact
                  before investing in any fund
                </li>
              </ul>
              <p>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course8_Lesson5;
