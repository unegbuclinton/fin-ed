import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const CourseLayout = ({ textInfo, title, lessonsOdd, lessonsEven, quiz }) => {
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
                  <Link to="#">Technical Analysis Basis</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img
            height="300"
            className="img-responsive main-image "
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/IG-Academy/com.ta.course1.img3x.jpg"
          />
        </div>
      </div>
      <h1 className="text-center mt-5 mb-5">{title}</h1>
      <div className="row">
        <div className="col-md-4">{textInfo}</div>
        <div className="col-md-4">
          {lessonsOdd?.map(({ lessonTitle, id, to }, idx) => (
            <div key={idx} className="card w-100 bg-light bg-light mt-1">
              <div className="card-body">
                <p className="card-title">
                  <Link
                    to={to}
                    className=" nav-link"
                    style={{ padding: " 0px 0px !important" }}
                  >
                    {`Lesson ${id}`} <span className="float-end"> </span>
                  </Link>
                </p>
                <p className="card-text">{lessonTitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          {lessonsEven?.map(({ lessonTitle, Id, to }, idx) => (
            <div key={idx} className="card w-100 bg-light bg-light mt-1">
              <div className="card-body">
                <p className="card-title">
                  <Link
                    to={to}
                    className=" nav-link"
                    style={{ padding: " 0px 0px !important" }}
                  >
                    {`Lesson ${Id}`} <span className="float-end"> </span>
                  </Link>
                </p>
                <p className="card-text">{lessonTitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="offset-md-6 col-md-4 mt-5">
          <div className="card w-100 bg-light mt-1">
            <div className="card-body">
              <p className="card-title">
                <Link
                  to={quiz}
                  className=" nav-link"
                  style={{ padding: "0px 0px !important" }}
                >
                  <i className="fas fa-question-circle"></i> Quiz
                  <span className="float-end"> </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;
