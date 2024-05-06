import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userAction";

export default function Navbar() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-body-tertiary rounded ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            PizzaWay
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {currentUser ? (
                <div class="dropdown show mt-2 mx-2">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {currentUser.name}
                  </a>

                  <div
                    className="dropdown-menu mb-3"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Orders
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => dispatch(logoutUser())}
                    >
                      Log out{" "}
                      <span
                        className="material-symbols-outlined"
                        style={{ marginTop: "10px", marginLeft: "5px" }}
                      >
                        logout
                      </span>
                    </a>
                  </div>
                </div>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/login"
                  >
                    Login
                  </a>
                </li>
              )}

              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart{" "}
                  <span className=" border border-danger border-2 rounded-5 rounded-top-0 m-2 p-2">
                    {cartState.cartItems.length}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
