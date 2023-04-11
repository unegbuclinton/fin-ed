import React from "react";

const Course3Quiz = () => {
  return (
    <div className="container mb-5">
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
                  <a href="{% url 'course1' %}">Technical Analysis Basis</a>
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

      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            1. What is the correct term for an order that has been executed?
          </p>
          <div>
            <input
              type="radio"
              inp-value="A 'filled' order"
              question="1. What is the correct term for an order that has been executed?"
              name="box"
              id="one"
              value="a"
              ans="a"
            />
            <input
              type="radio"
              inp-value="A 'level' order"
              question="1. What is the correct term for an order that has been executed?"
              name="box"
              id="two"
              value="b"
              ans="a"
            />
            <input
              type="radio"
              inp-value="A 'burst' order"
              question="1. What is the correct term for an order that has been executed?"
              name="box"
              id="three"
              value="c"
              ans="a"
            />
            <input
              type="radio"
              inp-value="A 'struck' order"
              question="1. What is the correct term for an order that has been executed?"
              name="box"
              id="four"
              value="d"
              ans="a"
            />
            <label for="one" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> A 'filled' order</span>
              </div>
            </label>
            <label for="two" className="box second">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> A 'level' order </span>
              </div>
            </label>
            <label for="three" className="box third">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> A 'burst' order </span>
              </div>
            </label>
            <label for="four" className="box forth">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> A 'struck' order </span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            2. You buy shares in ABC plc, currently trading at 500p. Although
            the price is forecast to rise over the next few weeks, you expect it
            to fall shortly afterwards. You set a limit order to close the trade
            if it reaches 525p. ABC plcs share price rises to 550p before
            plummeting to 400p. What happens to your trade?
          </p>
          <div>
            <input
              type="radio"
              inp-value="Your limit order is triggered and your trade is closed at 550p"
              question="2. You buy shares in ABC plc, currently trading at 500p. Although the price is forecast to rise over the next few weeks, you expect it to fall shortly afterwards. You set a limit order to close the trade if it reaches 525p.
ABC plcs share price rises to 550p before plummeting to 400p. What happens to your trade?"
              name="box1"
              id="one1"
              value="a"
              ans="d"
            />
            <input
              type="radio"
              inp-value="Your limit order is triggered and your trade is closed at 400p"
              question="2. You buy shares in ABC plc, currently trading at 500p. Although the price is forecast to rise over the next few weeks, you expect it to fall shortly afterwards. You set a limit order to close the trade if it reaches 525p.
ABC plcs share price rises to 550p before plummeting to 400p. What happens to your trade?"
              name="box1"
              id="two1"
              value="b"
              ans="d"
            />
            <input
              type="radio"
              inp-value="Your limit order doesn't trigger, and your trade stays open"
              question="2. You buy shares in ABC plc, currently trading at 500p. Although the price is forecast to rise over the next few weeks, you expect it to fall shortly afterwards. You set a limit order to close the trade if it reaches 525p.
ABC plcs share price rises to 550p before plummeting to 400p. What happens to your trade?"
              name="box1"
              id="three1"
              value="c"
              ans="d"
            />
            <input
              type="radio"
              inp-value="Your limit order is triggered and your trade is closed at 525p"
              question="2. You buy shares in ABC plc, currently trading at 500p. Although the price is forecast to rise over the next few weeks, you expect it to fall shortly afterwards. You set a limit order to close the trade if it reaches 525p.
ABC plcs share price rises to 550p before plummeting to 400p. What happens to your trade?"
              name="box1"
              id="four1"
              value="d"
              ans="d"
            />
            <label for="one1" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">
                  Your limit order is triggered and your trade is closed at 550p
                </span>
              </div>
            </label>
            <label for="two1" className="box second">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">
                  Your limit order is triggered and your trade is closed at 400p
                </span>
              </div>
            </label>
            <label for="three1" className="box third">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">
                  Your limit order doesn't trigger, and your trade stays open
                </span>
              </div>
            </label>
            <label for="four1" className="box forth">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">
                  Your limit order is triggered and your trade is closed at 525p
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            3. When trading a derivative contract you...'
          </p>
          <div>
            <input
              type="radio"
              inp-value="...must own the underlying asset."
              name="box2"
              question="3. When trading a derivative contract you..."
              id="one2"
              value="a"
              ans="b"
            />
            <input
              type="radio"
              inp-value="...never need to own the underlying asset."
              name="box2"
              question="3. When trading a derivative contract you..."
              id="two2"
              value="b"
              ans="b"
            />
            <input
              type="radio"
              inp-value="..will pay higher tax rates."
              name="box2"
              question="3. When trading a derivative contract you..."
              id="three2"
              value="c"
              ans="b"
            />
            <input
              type="radio"
              inp-value="...will be at no risk of losing money."
              name="box2"
              question="3. When trading a derivative contract you..."
              id="four2"
              value="d"
              ans="b"
            />
            <label for="one2" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">
                  ...must own the underlying asset.
                </span>
              </div>
            </label>
            <label for="two2" className="box second">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">
                  ...never need to own the underlying asset.
                </span>
              </div>
            </label>
            <label for="three2" className="box third">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> ..will pay higher tax rates. </span>
              </div>
            </label>
            <label for="four2" className="box forth">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">
                  ...will be at no risk of losing money.
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            4. What is the term used when a trade executes at a worse price than
            your stop order has specified?
          </p>
          <div>
            <input
              type="radio"
              inp-value="Dropping"
              name="box3"
              question="4. What is the term used when a trade executes at a worse price than your stop order has specified?"
              id="one3"
              value="a"
              ans="c"
            />
            <input
              type="radio"
              inp-value="Falling"
              name="box3"
              question="4. What is the term used when a trade executes at a worse price than your stop order has specified?"
              id="two3"
              value="b"
              ans="c"
            />
            <input
              type="radio"
              inp-value="Slippage "
              name="box3"
              question="4. What is the term used when a trade executes at a worse price than your stop order has specified?"
              id="three3"
              value="c"
              ans="c"
            />
            <input
              type="radio"
              inp-value="Decline"
              name="box3"
              question="4. What is the term used when a trade executes at a worse price than your stop order has specified?"
              id="four3"
              value="d"
              ans="c"
            />
            <label for="one3" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Dropping</span>
              </div>
            </label>
            <label for="two3" className="box second">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">Falling</span>
              </div>
            </label>
            <label for="three3" className="box third">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Slippage </span>
              </div>
            </label>
            <label for="four3" className="box forth">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Decline </span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            5. Food Conglomerate plc is currently priced at 1000p per share. You
            decide to open a leveraged position and buy 400 shares. Your
            provider's margin requirement for Food Conglomerate plc is 5%. What
            is your maximum possible loss on this position (assuming you don't
            use a stop-loss), and how much margin must you pay?
          </p>
          <div>
            <input
              type="radio"
              inp-value="Maximum loss £4000, margin £200"
              question="5. Food Conglomerate plc is currently priced at 1000p per share. You decide to open a leveraged position and buy 400 shares. Your provider's margin requirement for Food Conglomerate plc is 5%. What is your maximum possible loss on this position (assuming you don't use a stop-loss), and how much margin must you pay?"
              name="box4"
              id="one4"
              value="a"
              ans="a"
            />
            <input
              type="radio"
              inp-value="Maximum loss £200, margin £200"
              question="5. Food Conglomerate plc is currently priced at 1000p per share. You decide to open a leveraged position and buy 400 shares. Your provider's margin requirement for Food Conglomerate plc is 5%. What is your maximum possible loss on this position (assuming you don't use a stop-loss), and how much margin must you pay?"
              name="box4"
              id="two4"
              value="b"
              ans="a"
            />
            <input
              type="radio"
              inp-value="Maximum loss £4000, margin £2000"
              question="5. Food Conglomerate plc is currently priced at 1000p per share. You decide to open a leveraged position and buy 400 shares. Your provider's margin requirement for Food Conglomerate plc is 5%. What is your maximum possible loss on this position (assuming you don't use a stop-loss), and how much margin must you pay?"
              name="box4"
              id="three4"
              value="c"
              ans="a"
            />
            <input
              type="radio"
              inp-value="Maximum loss £400, margin £200"
              question="5. Food Conglomerate plc is currently priced at 1000p per share. You decide to open a leveraged position and buy 400 shares. Your provider's margin requirement for Food Conglomerate plc is 5%. What is your maximum possible loss on this position (assuming you don't use a stop-loss), and how much margin must you pay?"
              name="box4"
              id="four4"
              value="d"
              ans="a"
            />
            <label for="one4" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">
                  {" "}
                  Maximum loss £4000, margin £200{" "}
                </span>
              </div>
            </label>
            <label for="two4" className="box second">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">
                  {" "}
                  Maximum loss £200, margin £200{" "}
                </span>
              </div>
            </label>
            <label for="three4" className="box third">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">
                  Maximum loss £4000, margin £2000{" "}
                </span>
              </div>
            </label>
            <label for="four4" className="box forth">
              <div className="course">
                <span className="circle"></span>
                <span className="subject">Maximum loss £400, margin £200 </span>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            6. Which type of order is being described below? 'If this order
            can't be filled in full immediately, it will be cancelled.'
          </p>
          <div>
            <input
              type="radio"
              inp-value="Fill or kill"
              question="6. Which type of order is being described below?
'If this order can't be filled in full immediately, it will be cancelled.'"
              name="box9"
              id="one9"
              value="a"
              ans="a"
            />
            <input
              type="radio"
              inp-value="Good for the day"
              question="6. Which type of order is being described below?
'If this order can't be filled in full immediately, it will be cancelled.'"
              name="box9"
              id="two9"
              value="b"
              ans="a"
            />
            <input
              type="radio"
              inp-value=" Execute or eliminate "
              question="6. Which type of order is being described below?
'If this order can't be filled in full immediately, it will be cancelled.'"
              name="box9"
              id="three9"
              value="c"
              ans="a"
            />
            <input
              type="radio"
              inp-value="Good 'til cancelled"
              question="6. Which type of order is being described below?
'If this order can't be filled in full immediately, it will be cancelled.'"
              name="box9"
              id="four9"
              value="d"
              ans="a"
            />
            <label for="one9" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Fill or kill </span>
              </div>
            </label>
            <label for="two9" className="box second">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Good for the day </span>
              </div>
            </label>
            <label for="three9" className="box third">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Execute or eliminate </span>
              </div>
            </label>
            <label for="four9" className="box forth">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> Good 'til cancelled </span>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            7. Which type of order is being described below? 'This order is an
            instruction to trade when a market's price reaches a level that's
            more favourable than the current price.'
          </p>
          <div>
            <input
              type="radio"
              inp-value="A limit order"
              name="box5"
              question="7. Which type of order is being described below?
'This order is an instruction to trade when a market's price reaches a level that's more favourable than the current price.'"
              id="one5"
              value="a"
              ans="a"
            />
            <input
              type="radio"
              inp-value="A stop order"
              name="box5"
              question="7. Which type of order is being described below?
'This order is an instruction to trade when a market's price reaches a level that's more favourable than the current price.'"
              id="two5"
              value="b"
              ans="a"
            />
            <input
              type="radio"
              inp-value="A market order"
              name="box5"
              question="7. Which type of order is being described below?
'This order is an instruction to trade when a market's price reaches a level that's more favourable than the current price.'"
              id="three5"
              value="c"
              ans="a"
            />
            <input
              type="radio"
              inp-value="An execute or eliminate order"
              name="box5"
              question="7. Which type of order is being described below?
'This order is an instruction to trade when a market's price reaches a level that's more favourable than the current price.'"
              id="four5"
              value="d"
              ans="a"
            />
            <label for="one5" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> A limit order </span>
              </div>
            </label>
            <label for="two5" className="box second">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> A stop order </span>
              </div>
            </label>
            <label for="three5" className="box third">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> A market order </span>
              </div>
            </label>
            <label for="four5" className="box forth">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> An execute or eliminate order </span>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="row p-4 bg-white">
        <div className="col-12">
          <p className="fw-bold">
            8. You want to go long on Tech Corp Inc and the current share price
            is $1. You find a provider offering leverage facilities which sets a
            margin requirement of 5% to open the position. If you put down $250
            to open the trade, how many shares do you have exposure to?
          </p>
          <div>
            <input
              type="radio"
              name="box6"
              inp-value="250"
              question="8. You want to go long on Tech Corp Inc and the current share price is $1. You find a provider offering leverage facilities which sets a margin requirement of 5% to open the position. If you put down $250 to open the trade, how many shares do you have exposure to?"
              id="one6"
              value="a"
              ans="c"
            />
            <input
              type="radio"
              name="box6"
              inp-value="2500
"
              question="8. You want to go long on Tech Corp Inc and the current share price is $1. You find a provider offering leverage facilities which sets a margin requirement of 5% to open the position. If you put down $250 to open the trade, how many shares do you have exposure to?"
              id="two6"
              value="b"
              ans="c"
            />
            <input
              type="radio"
              name="box6"
              inp-value="5000"
              question="8. You want to go long on Tech Corp Inc and the current share price is $1. You find a provider offering leverage facilities which sets a margin requirement of 5% to open the position. If you put down $250 to open the trade, how many shares do you have exposure to?"
              id="three6"
              value="c"
              ans="c"
            />
            <input
              type="radio"
              name="box6"
              inp-value="0"
              question="8. You want to go long on Tech Corp Inc and the current share price is $1. You find a provider offering leverage facilities which sets a margin requirement of 5% to open the position. If you put down $250 to open the trade, how many shares do you have exposure to?"
              id="four6"
              value="d"
              ans="c"
            />
            <label for="one6" className="box first">
              <div className="course">
                <span className="circle"></span>
                <span className="subject"> 250 </span>
              </div>
            </label>
            <label for="two6" className="box second">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> 2500</span>
              </div>
            </label>
            <label for="three6" className="box third">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> 5000 </span>
              </div>
            </label>
            <label for="four6" className="box forth">
              <div className="course">
                <span className="circle"></span>{" "}
                <span className="subject"> 0 </span>
              </div>
            </label>
          </div>
        </div>
      </div>

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
            style="background-color:  #ee701e !important;color: white !important;border: none;"
          >
            Reveal Result
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course3Quiz;
