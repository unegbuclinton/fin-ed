import React from "react";
import { Link } from "react-router-dom";

const QuizComponent = ({ quizItems }) => {
  return (
    <div className="container mb-5">
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
                  <Link to="/Course2">Technical Analysis Basis</Link>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                  <a>Quiz</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ backgroundColor: "#3a445d" }}>
        <div className="col-md-12">
          <img
            height="300"
            className="img-responsive"
            style={{ objectFit: "cover" }}
            src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/IG-Academy/com.ta.course1.img3x.jpg"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mt-5 mb-5">
            Introduction to finance Quiz!
          </h1>
        </div>
      </div>
      {quizItems?.map(
        ({
          question,
          id1,
          id2,
          id3,
          id4,
          value1,
          value2,
          value3,
          value4,
          ans1,
          ans2,
          ans3,
          ans4,
          inpValue1,
          inpValue2,
          inpValue3,
          inpValue4,
          label1,
          label2,
          label3,
          label4,
        }) => {
          return (
            <div className="row p-4 bg-white">
              <div className="col-12">
                <p className="fw-bold">{question}</p>
                <div>
                  <input
                    type="radio"
                    inp-value={inpValue1}
                    question={question}
                    name="box"
                    id={id1}
                    value={value1}
                    ans={ans1}
                  />
                  <input
                    type="radio"
                    inp-value={inpValue2}
                    question={question}
                    name="box"
                    id={id2}
                    value={value2}
                    ans={ans2}
                  />
                  <input
                    type="radio"
                    inp-value={inpValue3}
                    question="1. Shares of HIJ plc are trading at 1000p. You borrow 50 shares of HIJ plc from your stockbroker to short sell, and are credited with £500 as a result. After opening your short trade, the price of HIJ plc falls to 700p, at which point you decide to close (cover) your position. Ignoring any charges or commission, how much profit or loss have you made in this scenario?"
                    name="box"
                    id={id3}
                    value={value3}
                    ans={ans3}
                  />
                  <input
                    type="radio"
                    inp-value={inpValue4}
                    question="1. Shares of HIJ plc are trading at 1000p. You borrow 50 shares of HIJ plc from your stockbroker to short sell, and are credited with £500 as a result. After opening your short trade, the price of HIJ plc falls to 700p, at which point you decide to close (cover) your position. Ignoring any charges or commission, how much profit or loss have you made in this scenario?"
                    name="box"
                    id={id4}
                    value={value4}
                    ans={ans4}
                  />
                  <label for="one" className="box first">
                    <div className="course">
                      <span className="circle"></span>
                      <span className="subject">{label1}</span>
                    </div>
                  </label>
                  <label for="two" className="box second">
                    <div className="course">
                      <span className="circle"></span>
                      <span className="subject"> {label2} </span>
                    </div>
                  </label>
                  <label for="three" className="box third">
                    <div className="course">
                      <span className="circle"></span>
                      <span className="subject">{label3} </span>
                    </div>
                  </label>
                  <label for="four" className="box forth">
                    <div className="course">
                      <span className="circle"></span>
                      <span className="subject">{label4} </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          );
        }
      )}

      {/* <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            1. Shares of HIJ plc are trading at 1000p. You borrow 50 shares of
            HIJ plc from your stockbroker to short sell, and are credited with
            £500 as a result. After opening your short trade, the price of HIJ
            plc falls to 700p, at which point you decide to close (cover) your
            position. Ignoring any charges or commission, how much profit or
            loss have you made in this scenario?
          </p>
          <div>
            <input
              type="radio"
              inp-value="£350 profit"
              question="1. Shares of HIJ plc are trading at 1000p. You borrow 50 shares of HIJ plc from your stockbroker to short sell, and are credited with £500 as a result. After opening your short trade, the price of HIJ plc falls to 700p, at which point you decide to close (cover) your position. Ignoring any charges or commission, how much profit or loss have you made in this scenario?"
              name="box"
              id="one"
              value="a"
              ans="b"
            />
            <input
              type="radio"
              inp-value="
           £150 profit"
              question="1. Shares of HIJ plc are trading at 1000p. You borrow 50 shares of HIJ plc from your stockbroker to short sell, and are credited with £500 as a result. After opening your short trade, the price of HIJ plc falls to 700p, at which point you decide to close (cover) your position. Ignoring any charges or commission, how much profit or loss have you made in this scenario?"
              name="box"
              id="two"
              value="b"
              ans="b"
            />
            <input
              type="radio"
              inp-value="£150 loss"
              question="1. Shares of HIJ plc are trading at 1000p. You borrow 50 shares of HIJ plc from your stockbroker to short sell, and are credited with £500 as a result. After opening your short trade, the price of HIJ plc falls to 700p, at which point you decide to close (cover) your position. Ignoring any charges or commission, how much profit or loss have you made in this scenario?"
              name="box"
              id="three"
              value="c"
              ans="b"
            />
            <input
              type="radio"
              inp-value="£200 loss"
              question="1. Shares of HIJ plc are trading at 1000p. You borrow 50 shares of HIJ plc from your stockbroker to short sell, and are credited with £500 as a result. After opening your short trade, the price of HIJ plc falls to 700p, at which point you decide to close (cover) your position. Ignoring any charges or commission, how much profit or loss have you made in this scenario?"
              name="box"
              id="four"
              value="d"
              ans="b"
            />
            <label for="one" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> £350 profit</span>
              </div>
            </label>
            <label for="two" className="box second">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> £150 profit </span>
              </div>
            </label>
            <label for="three" className="box third">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> £150 loss </span>
              </div>
            </label>
            <label for="four" className="box forth">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> £200 loss </span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            2. If Company OPQ reports an annual profit of £163 million, but most
            analysts were expecting a figure of at least £200 million, how would
            you expect levels of supply and demand to affect the price of its
            shares?
          </p>
          <div>
            <input
              type="radio"
              inp-value="Share price rises"
              question="2. If Company OPQ reports an annual profit of £163 million, but most analysts were expecting a figure of at least £200 million, how would you expect levels of supply and demand to affect the price of its shares?"
              name="box1"
              id="one1"
              value="a"
              ans="b"
            />
            <input
              type="radio"
              inp-value="Share price falls"
              question="2. If Company OPQ reports an annual profit of £163 million, but most analysts were expecting a figure of at least £200 million, how would you expect levels of supply and demand to affect the price of its shares?"
              name="box1"
              id="two1"
              value="b"
              ans="b"
            />
            <input
              type="radio"
              inp-value="Share price stays the same"
              question="2. If Company OPQ reports an annual profit of £163 million, but most analysts were expecting a figure of at least £200 million, how would you expect levels of supply and demand to affect the price of its shares?"
              name="box1"
              id="three1"
              value="c"
              ans="b"
            />
            <label for="one1" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Share price rises </span>
              </div>
            </label>
            <label for="two1" className="box second">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> Share price falls </span>{" "}
              </div>
            </label>
            <label for="three1" className="box third">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> Share price stays the same </span>{" "}
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            3. As a trader, why might a tight spread be advantageous?
          </p>
          <div>
            <input
              type="radio"
              inp-value="The tighter the spread, the quicker you can profit if the market moves in your favour"
              name="box2"
              question="3. As a trader, why might a tight spread be advantageous?"
              id="one2"
              value="a"
              ans="a"
            />
            <input
              type="radio"
              inp-value="The tighter the spread, the less tax you have to pay on your profits"
              name="box2"
              question="3. As a trader, why might a tight spread be advantageous?"
              id="two2"
              value="b"
              ans="a"
            />
            <input
              type="radio"
              inp-value="The tighter the spread, the less money you need to pay your broker"
              name="box2"
              question="3. As a trader, why might a tight spread be advantageous?"
              id="three2"
              value="c"
              ans="a"
            />
            <input
              type="radio"
              inp-value="When the spread is tight, you are guaranteed to make a profit"
              name="box2"
              question="3. As a trader, why might a tight spread be advantageous?"
              id="four2"
              value="d"
              ans="a"
            />
            <label for="one2" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">
                  The tighter the spread, the quicker you can profit if the
                  market moves in your favour
                </span>
              </div>
            </label>
            <label for="two2" className="box second">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject">
                  The tighter the spread, the less tax you have to pay on your
                  profits{" "}
                </span>{" "}
              </div>
            </label>
            <label for="three2" className="box third">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject">
                  The tighter the spread, the less money you need to pay your
                  broker{" "}
                </span>{" "}
              </div>
            </label>
            <label for="four2" className="box forth">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject">
                  When the spread is tight, you are guaranteed to make a profit{" "}
                </span>{" "}
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            4. If you sell 500 shares short at 4000p, what is the maximum amount
            of money you could lose (ignoring any charges or commission)?
          </p>
          <div>
            <input
              type="radio"
              inp-value="£2000"
              name="box3"
              question="4. If you sell 500 shares short at 4000p, what is the maximum amount of money you could lose (ignoring any charges or commission)?"
              id="one3"
              value="a"
              ans="b"
            />
            <input
              type="radio"
              inp-value="£unlimitede"
              name="box3"
              question="4. If you sell 500 shares short at 4000p, what is the maximum amount of money you could lose (ignoring any charges or commission)?"
              id="two3"
              value="b"
              ans="b"
            />
            <input
              type="radio"
              inp-value="£20,000"
              name="box3"
              question="4. If you sell 500 shares short at 4000p, what is the maximum amount of money you could lose (ignoring any charges or commission)?"
              id="three3"
              value="c"
              ans="b"
            />
            <input
              type="radio"
              inp-value="£200,000"
              name="box3"
              question="4. If you sell 500 shares short at 4000p, what is the maximum amount of money you could lose (ignoring any charges or commission)?"
              id="four3"
              value="d"
              ans="b"
            />
            <label for="one3" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> £2000</span>
              </div>
            </label>
            <label for="two3" className="box second">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject">£unlimited </span>{" "}
              </div>
            </label>
            <label for="three3" className="box third">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> £20,000 </span>{" "}
              </div>
            </label>
            <label for="four3" className="box forth">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> £200,000 </span>{" "}
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            5. If a broker provides recommendations on investment opportunities,
            but leaves the final decision up to their client, what kind of
            service are they offering?
          </p>
          <div>
            <input
              type="radio"
              inp-value="Advisory management"
              question="5. If a broker provides recommendations on investment opportunities, but leaves the final decision up to their client, what kind of service are they offering?"
              name="box4"
              id="one4"
              value="a"
              ans="a"
            />
            <input
              type="radio"
              inp-value="Full service"
              question="5. If a broker provides recommendations on investment opportunities, but leaves the final decision up to their client, what kind of service are they offering?"
              name="box4"
              id="two4"
              value="b"
              ans="a"
            />
            <input
              type="radio"
              inp-value="Execution-only"
              question="5. If a broker provides recommendations on investment opportunities, but leaves the final decision up to their client, what kind of service are they offering?"
              name="box4"
              id="three4"
              value="c"
              ans="a"
            />
            <label for="one4" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Advisory management </span>
              </div>
            </label>
            <label for="two4" className="box second">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> Nickel </span>{" "}
              </div>
            </label>
            <label for="three4" className="box third">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject">Execution-only </span>{" "}
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            6. Sellers in the market are commonly referred to as which animal?
          </p>
          <div>
            <input
              type="radio"
              inp-value="Warthogs"
              question="6. Sellers in the market are commonly referred to as which animal?"
              name="box9"
              id="one9"
              value="a"
              ans="b"
            />
            <input
              type="radio"
              inp-value="Bears"
              question="6. Sellers in the market are commonly referred to as which animal?"
              name="box9"
              id="two9"
              value="b"
              ans="b"
            />
            <input
              type="radio"
              inp-value=" Crocodiles "
              question="6. Sellers in the market are commonly referred to as which animal?"
              name="box9"
              id="three9"
              value="c"
              ans="b"
            />
            <input
              type="radio"
              inp-value="Rabbits"
              question="6. Sellers in the market are commonly referred to as which animal?"
              name="box9"
              id="four9"
              value="d"
              ans="b"
            />
            <label for="one9" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Warthogs </span>
              </div>
            </label>
            <label for="two9" className="box second">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> Bears </span>{" "}
              </div>
            </label>
            <label for="three9" className="box third">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> Crocodiles </span>{" "}
              </div>
            </label>
            <label for="four9" className="box forth">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> Rabbits </span>{" "}
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            7. If you sell 100 shares short at 3000p, what is the maximum amount
            of profit you could make (ignoring any charges or commission)?{" "}
          </p>
          <div>
            <input
              type="radio"
              inp-value="£3000"
              name="box5"
              question="7. If you sell 100 shares short at 3000p, what is the maximum amount of profit you could make (ignoring any charges or commission)?"
              id="one5"
              value="a"
              ans="a"
            />
            <input
              type="radio"
              inp-value="£30,000"
              name="box5"
              question="7. If you sell 100 shares short at 3000p, what is the maximum amount of profit you could make (ignoring any charges or commission)?"
              id="two5"
              value="b"
              ans="a"
            />
            <input
              type="radio"
              inp-value="£unlimited"
              name="box5"
              question="7. If you sell 100 shares short at 3000p, what is the maximum amount of profit you could make (ignoring any charges or commission)?"
              id="three5"
              value="c"
              ans="a"
            />
            <input
              type="radio"
              inp-value="£300"
              name="box5"
              question="7. If you sell 100 shares short at 3000p, what is the maximum amount of profit you could make (ignoring any charges or commission)?"
              id="four5"
              value="d"
              ans="a"
            />
            <label for="one5" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> £3000 </span>
              </div>
            </label>
            <label for="two5" className="box second">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> £30,000 </span>{" "}
              </div>
            </label>
            <label for="three5" className="box third">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> £unlimited </span>{" "}
              </div>
            </label>
            <label for="four5" className="box forth">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> £300 </span>{" "}
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            8. If you decide to buy GBP/USD and your broker quotes a bid price
            of 1.54296 and an ask price of 1.54304, at which price will you open
            your trade?
          </p>
          <div>
            <input
              type="radio"
              name="box6"
              inp-value="Bid price - 1.54296"
              question="8. If you decide to buy GBP/USD and your broker quotes a bid price of 1.54296 and an ask price of 1.54304, at which price will you open your trade?"
              id="one6"
              value="a"
              ans="c"
            />
            <input
              type="radio"
              name="box6"
              inp-value="Mid price - 1.54300"
              question="8. If you decide to buy GBP/USD and your broker quotes a bid price of 1.54296 and an ask price of 1.54304, at which price will you open your trade?"
              id="two6"
              value="b"
              ans="c"
            />
            <input
              type="radio"
              name="box6"
              inp-value="Ask price - 1.54304"
              question="8. If you decide to buy GBP/USD and your broker quotes a bid price of 1.54296 and an ask price of 1.54304, at which price will you open your trade?"
              id="three6"
              value="c"
              ans="c"
            />

            <label for="one6" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Bid price - 1.54296 </span>
              </div>
            </label>
            <label for="two6" className="box second">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> Mid price - 1.54300 </span>{" "}
              </div>
            </label>
            <label for="three6" className="box third">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> Ask price - 1.54304 </span>{" "}
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            9. Which of the following markets are traded on exchange?
          </p>
          <div>
            <input
              type="radio"
              name="box7"
              inp-value="Shares listed on the LSE"
              question="9. Which of the following markets are traded on exchange?"
              id="one7"
              value="a"
              ans="a"
            />
            <input
              type="radio"
              name="box7"
              inp-value="The pound versus the yen (GBP/JPY)"
              question="9. Which of the following markets are traded on exchange?"
              id="two7"
              value="b"
              ans="a"
            />
            <input
              type="radio"
              name="box7"
              inp-value="Gold futures"
              question="9. Which of the following markets are traded on exchange?"
              id="three7"
              value="c"
              ans="a"
            />
            <input
              type="radio"
              name="box7"
              inp-value="Properties and real estate"
              question="9. Which of the following markets are traded on exchange?"
              id="four7"
              value="d"
              ans="a"
            />
            <label for="one7" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Shares listed on the LSE </span>
              </div>
            </label>
            <label for="two7" className="box second">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject">
                  The pound versus the yen (GBP/JPY){" "}
                </span>{" "}
              </div>
            </label>
            <label for="three7" className="box third">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> Gold futures </span>{" "}
              </div>
            </label>
            <label for="four8" className="box forth">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> Properties and real estate </span>{" "}
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            10. Which of the following can be considered as institutional
            investors?
          </p>
          <div>
            <input
              type="radio"
              name="box8"
              inp-value="Banks"
              question="10. Which of the following can be considered as institutional investors?"
              id="one8"
              value="a"
              ans="c"
            />
            <input
              type="radio"
              name="box8"
              inp-value="Mutual funds"
              question="10. Which of the following can be considered as institutional investors?"
              id="two8"
              value="b"
              ans="c"
            />
            <input
              type="radio"
              name="box8"
              inp-value="Hedge funds"
              question="10. Which of the following can be considered as institutional investors?"
              id="three8"
              value="c"
              ans="c"
            />
            <input
              type="radio"
              name="box8"
              inp-value="All of the above"
              question="10. Which of the following can be considered as institutional investors?"
              id="four8"
              value="d"
              ans="c"
            />
            <label for="one8" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Banks </span>
              </div>
            </label>
            <label for="two8" className="box second">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> Mutual funds </span>{" "}
              </div>
            </label>
            <label for="three8" className="box third">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> Hedge funds </span>{" "}
              </div>
            </label>
            <label for="four8" className="box forth">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> All of the above </span>{" "}
              </div>
            </label>
          </div>
        </div>
      </div> */}

      <button
        data-bs-toggle="modal"
        style={{ display: "none" }}
        id="show-modal"
        data-bs-target="#staticBackdrop"
      >
        Reveal Result
      </button>

      <div className="col-12 mt-5">
        <div className="d-flex justify-content-center">
          <button
            className="btn px-4 py-2 fw-bold"
            id="reveal-answer"
            style={{
              backgroundColor: " #ee701e !important",
              color: "white !important",
              border: "none",
            }}
          >
            Reveal Result
          </button>
        </div>
      </div>
      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default QuizComponent;
