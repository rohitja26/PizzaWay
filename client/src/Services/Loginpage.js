import React, { useEffect, useState } from "react";
import { loginUser } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../component/Loading";
import Error from "../component/Error";

export default function Loginpage() {
  const dispactch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginState;
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  function Login() {
    const user = {
      email,
      password,
    };
    console.log(user);
    dispactch(loginUser(user));
  }
  return (
    <div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}
          <h2 style={{ fontSize: "35px", fontWeight: "bold" }} className="m-5">
            Login{" "}
          </h2>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-outline-success m-3 mt-5 text-center"
              onClick={() => Login()}
            >
              <span
                className="material-symbols-outlined text-center"
                style={{
                  fontSize: "26px",
                }}
              >
                login
              </span>
            </button>
            <p>
              Click to here {"  "}
              <a
                href="/register"
                className="text-danger  mx-1"
                style={{ textDecoration: "none" }}
              >
                REGISTER
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
