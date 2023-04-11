import React from "react";
import { Link } from "react-router-dom";

const Course8_Lesson1 = () => {
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
                    Understanding the world of investments
                  </Link>
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
        <h1> Understanding the world of investments</h1>
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
              <p className="mt-4 mb-4">
                Saving and investing are two ways we can make the money we earn
                today work for us in the future. While saving is a great way to
                prepare for big expenses in the short term, investing is a
                better option to work towards financial freedom over a long
                period of time.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section center-img">
            <div className="lesson-image__component image text-image lesson-image--center">
              <span
                data-alt="Image of a woman with a platform trolley holding a stack of harvested coins. She’s watering a potted tree with money protruding from its leaves."
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/a-beginners-guide-to-investing/Module-4-Beginners-01.png"
                className="lazyload adaptive-image-disabled"
                style={{ height: "331px" }}
                data-desktopheight="331"
                data-mobileheight="265"
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/a-beginners-guide-to-investing/Module-4-Beginners-01.png">
                  <img
                    alt="Image of a woman with a platform trolley holding a stack of harvested coins. She’s watering a potted tree with money protruding from its leaves."
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/a-beginners-guide-to-investing/Module-4-Beginners-01.png"
                  />
                </span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/a-beginners-guide-to-investing/Module-4-Beginners-01.png"
                    alt="Image of a woman with a platform trolley holding a stack of harvested coins. She’s watering a potted tree with money protruding from its leaves."
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                Many people have access to a savings account as soon as they
                open a bank account. You likely already have an account that
                earns interest on your cash. However, if you want your money to
                work harder for you over a longer period, investing in assets
                such as company shares, bonds or property may be the answer.
              </p>
            </div>
          </div>
          <div className="lesson-image parbase section">
            <div className="lesson-image__component image text-image lesson-image--default">
              <span
                data-alt="Image with three graphics depicting different kinds of assets: a Netflix logo for shares, a certificate for bonds and a house to represent property."
                data-original="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/a-beginners-guide-to-investing/Module-4-Beginners-02.png"
                className="lazyload adaptive-image-disabled"
                style={{ paddingBottom: "38.598576%" }}
              >
                <span data-src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/a-beginners-guide-to-investing/Module-4-Beginners-02.png"></span>
                <noscript>
                  <img
                    src="//a.c-dn.net/c/content/dam/publicsites/igcom/shared/academy/a-beginners-guide-to-investing/Module-4-Beginners-02.png"
                    alt="Image with three graphics depicting different kinds of assets: a Netflix logo for shares, a certificate for bonds and a house to represent property."
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                The key difference between saving and investing is in the amount
                of risk you take on with each one. When you put your money into
                a savings account, it will always grow under normal economic
                circumstances and there’s very little risk that you’ll lose it
                unexpectedly. But the interest rate you receive is unlikely to
                be higher than the rate of inflation, meaning your cash is
                losing value in inflation-adjusted terms.
              </p>
              <p>
                Because putting cash in the bank is less risky, savings are
                ideal for funding short-term expenses like holidays or deposits
                on a home loan. As a general rule of thumb, you should use a
                savings account when you need to use the money within a short
                timeframe, say three years.
              </p>
              <p>
                With investing, there’s a greater chance that your initial
                investment could drop in value. But despite being risky in the
                short term, investments tend to earn more money in the long run
                than savings do. They’re therefore ideal for expenses ten or
                more years into the future.
              </p>
              <h3 className="heading">Setting targets for your investments</h3>
              <p>
                Setting targets is an important part of investing. You may have
                a single target at any one time, or multiple aims over different
                timeframes. For example, you might want to send your child to a
                good university in 18 years or buy a retirement home in a
                decade.
              </p>
              <p>
                Once you know what you want to achieve and by when, you can
                start thinking about what you’d like to invest in and how much
                you wish to contribute.
              </p>
              <p>
                There’s no instant result and you shouldn’t be trying to get
                rich quickly. But with patience, consistent contributions and a
                readiness to take some risk, there’s certainly the potential to
                get rich slowly over time – or at least achieve your financial
                goals for the future.
              </p>
              <p>
                For example, let’s say you put £1000 in an investment account
                that generates 10% returns (£100) every year. If, for ten years,
                you take that £100 and spend it, you’ll be left with just your
                initial £1000 deposit – even though you’ve earned an additional
                £1000.
              </p>
              <p>
                Now let’s say you leave all your returns in the account, rather
                than spending them. In year one, a 10% return on £1000 gives you
                £100 and a total investment pot of £1100. So in year two, you’d
                earn 10% of £1100 (£110) giving you £1210. This process is
                called ‘compounding’, and it’s the reason why money that’s been
                invested for longer earns more money.
              </p>
              <p>
                See if you can figure out how much money you’ll have in ten
                years’ time with this short exercise.
              </p>
            </div>
          </div>

          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <p>
                The effect of fees and charges compounds in the same way, but
                with a negative rather than a positive impact. We’ll talk more
                about this and the other risks of investing later in this
                course.
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
                  Investing is one of the ways you can grow your wealth over
                  time
                </li>
                <li>
                  You can invest in many financial securities including company
                  shares, government bonds and property
                </li>
                <li>
                  Investing doesn’t serve as a get-rich-quick method of gaining
                  wealth, but rather requires patience and discipline
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course8_Lesson1;
