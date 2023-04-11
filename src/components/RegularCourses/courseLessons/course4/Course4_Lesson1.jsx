import React from "react";
import { Link } from "react-router-dom";

const Course4_Lesson1 = () => {
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
                  <Link to="/course4">What is a trading plan?</Link>
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
        <h1> What is a trading plan?</h1>
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
            <div className="lesson-type-default mt-4 mb-4">
              <p>
                Having a suitable trading plan is one of the most important
                aspects of trading. It's there to act as your own personal
                decision-making tool, helping you answer vital questions like{" "}
                <b>what</b>, <b>when</b>,<b>why</b> and <b>how much</b> to
                trade. Your plan should cover your personality, attitude to
                risk, trading goals, risk management rules and any trading
                strategies you intend to follow.
              </p>
              <p>
                It is vital for your trading plan to be <b>personal to you</b>.
                It's no good copying someone else's plan, because that person
                will very likely have different goals, attitudes and ideas to
                you. They will also almost certainly have a different amount of
                time and money to dedicate to trading.
              </p>
            </div>
          </div>
          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h3>
                What's the difference between a trading strategy, a trading plan
                and a trading diary?
              </h3>
              <p>
                You'll hear these terms used a lot in the industry, often
                interchangeably, but for the purposes of this course we'll be
                talking about specific things when we refer to them:
              </p>
              <ul>
                <li>
                  <b>A trading strategy</b> defines precisely how you should
                  enter and exit trades. For example, 'Buy gold when it drops
                  below $1250, sell when it reaches $1350' would be a very
                  simple trading strategy.
                </li>
                <li>
                  <b>A trading plan</b> is a comprehensive blueprint covering
                  everything from your goals, motivation and attitude to risk,
                  through to risk management rules and analysis of past trades.
                  It can (and should) include both your strategies and your
                  commitment to keeping a diary.
                </li>
                <li>
                  <b>A trading diary</b> is a written record of everything that
                  happens when you trade, including entry and exit points,
                  profit/loss, trading statistics and even your emotional state
                  before, during and after each trade.
                </li>
              </ul>
            </div>
          </div>

          <div className="lesson-content parbase section">
            <div className="lesson-type-default">
              <h1 className="heading">Why is a trading plan important?</h1>
              <h3>It makes trading easier</h3>
              <p>
                A trading plan gives you guidance on when and how you should
                trade. Without a plan you might be constantly worrying about
                which market to trade, whether to take your profits early, let
                your losses run, or if you're missing out on other opportunities
                in different markets. With a trading plan you've done all the
                thinking upfront, so you can wait for the right market
                conditions and trade according the parameters you've set for
                yourself.
              </p>
              <h3 className="heading">It helps you trade without emotion</h3>
              <p>
                A plan can remove emotional decision-making in the heat of the
                moment. You should already know your desired profit, and
                acceptable loss, on every trade before you place it. This means
                you'll be able to cope with any dramatic changes in the market
                price as your trade is in progress. Realistically, markets can
                only go up or down, so you should be able to plan for every
                eventuality beforehand.
              </p>
              <h3 className="heading">It helps you to maintain discipline</h3>
              <p>
                Discipline is an extremely important trait for a trader. Anyone
                can get lucky on a few trades, but a disciplined trader is much
                more likely to be profitable in the long run. And if you have a
                solid trading plan, discipline is much easier to maintain.
              </p>
              <p>
                Say you start using a simple trading strategy –&nbsp;for
                example, you go long on the S&amp;P 500 every time it goes up
                more than 0.5% in one day, with the expectation it will continue
                to rise.
              </p>
              <p>
                However, after a couple of trades your strategy doesn't seem to
                be working very well and you've lost some money. Do you abandon
                it immediately?
              </p>
              <p>
                Depending on your circumstances, you might decide to stick with
                it. You can then find out if there's a fundamental flaw with the
                strategy, or if you were just unlucky with the first few trades.
              </p>
              <p>
                If it's the former, is there a way you can tweak the strategy
                based on the results of your trades? By maintaining discipline
                and sticking to your plan, you could potentially turn a losing
                strategy into a winning one –&nbsp;or at least discover how and
                why it wasn't successful.
              </p>
              <h3>It enables you to improve</h3>
              <p>
                By following a trading plan, and maintaining a trading diary,
                you can keep a record of what works for you and what doesn't.
                This is useful for analysing your own performance and improving
                as a trader. A full record of every trade makes it much easier
                to learn from your mistakes, and to evaluate which trades you
                won (or lost) by luck or by judgment.
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
                  A trading plan is your own personal decision-making tool,
                  helping you answer questions like <b>what</b>, <b>when</b>,{" "}
                  <b>why</b> and <b>how much</b> to trade
                </li>
                <li>
                  It should provide a blueprint of how to trade in any given
                  situation, which:
                </li>
                <ul>
                  <li>Makes trading easier</li>
                  <li>Helps you trade without emotion</li>
                  <li>Helps you to maintain discipline</li>
                  <li>Enables you to improve</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="lesson__complete">Lesson complete</div>
      </div>
    </div>
  );
};

export default Course4_Lesson1;
