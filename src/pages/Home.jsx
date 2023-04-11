import React from "react";
import { Link } from "react-router-dom";
import { card } from "../helper/homeCards";

const Home = () => {
  return (
    <div className="container mt-5">
      <div>
        <h1 className="text-center">Online trading courses</h1>
        <p className="text-center">
          Develop the skills of trading – from first steps to advanced
          strategies – with our interactive courses. Learn at your own pace,
          checking your understanding with practical exercises and quizzes.
        </p>
      </div>
      <hr style={{ marginTop: "100px" }} />

      <div className="d-flex align-items-start" style={{ marginTop: "50px;" }}>
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="btn btn1 btn-outline-white mt-1 active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
          >
            &nbsp;
            <img src="https://a.c-dn.net/c/etc.clientlibs/settings/wcm/designs/onedomain/1677777991000/clientlibs_academy_externals/resources/images/icons/beginner_icn.svg" />
            &nbsp; BEGINNER
          </button>
          <button
            className="btn btn1 btn-outline-white mt-3"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
          >
            &nbsp;
            <img src="https://a.c-dn.net/c/etc.clientlibs/settings/wcm/designs/onedomain/1677777991000/clientlibs_academy_externals/resources/images/icons/interm_icn.svg" />
            &nbsp; INTERMEDIATE
          </button>
          <button
            className="btn btn1 btn-outline-white mt-3"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
          >
            &nbsp;
            <img src="https://a.c-dn.net/c/etc.clientlibs/settings/wcm/designs/onedomain/1677777991000/clientlibs_academy_externals/resources/images/icons/advance_icn.svg" />
            &nbsp; ADVANCED
          </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <div className="row">
              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <Link
                        to="/course1"
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                      >
                        Introducing the financial markets
                      </Link>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> B1 </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <Link
                        to="/course2"
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                      >
                        How does trading work?
                      </Link>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> B2 </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <Link
                        to="/course3"
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                      >
                        Orders, execution and leverage
                      </Link>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> B3 </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <Link
                        to="/course4"
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                      >
                        Planning and risk management
                      </Link>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> B4 </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <Link
                        to="/course5"
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                      >
                        Trading Psychology
                      </Link>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> B5 </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <Link
                        to="/course6"
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                      >
                        How spread betting and CFD trading work
                      </Link>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> B6 </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <Link
                        to="/course7"
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                      >
                        Building your own investment strategy
                      </Link>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> B7 </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <Link
                        to="/course8"
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                      >
                        A beginners guide to investing.
                      </Link>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> B8 </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <div className="row">
              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <a
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                        href='{% url "intermed_course1" %}'
                      >
                        The basics of technical analysis
                      </a>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> I1 </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <a
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                        href='{% url "intermed_course2" %}'
                      >
                        Fundamental Analysis
                      </a>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> I2 </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <a
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                        href='{% url "intermed_course3" %}'
                      >
                        Using trading and investment products
                      </a>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> I3 </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <div className="row">
              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <a
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                        href='{% url "adv_course1" %}'
                      >
                        Understanding risk and reward
                      </a>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> A1 </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mt-1 course-card">
                <div className="card main-card">
                  <img
                    src="https://a.c-dn.net/c/content/dam/publicsites/1505390880738/igcom/shared/academy/com.ta.course1.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-center">
                      <a
                        style={{ fontsize: "1.2rem" }}
                        className=" btn btn-outline-white "
                        href='{% url "adv_course2" %}'
                      >
                        Using stops and limits to manage risk
                      </a>
                    </h5>
                    <p className="card-text  text-center mt-2">
                      Take a tour of the financial markets. Discover how they
                      operate, what drives them and how you can capitalize on
                      their movements.
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="d-flex flex-row-reverse">
                      <h3> A2 </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
