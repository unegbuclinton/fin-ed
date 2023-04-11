import React from "react";
import Login from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  bg-white">
        <div className="container">
          <a className="navbar-brand">FinEd </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <div className="dropstart">
              <button
                className="btn btn-secondary dropdown-toggle"
                style={{ background: "#ee701e" }}
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-user"></i>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item">Logout</a>
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Register
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Login />
      <RegisterModal />
    </>
  );
};

export default Nav;
