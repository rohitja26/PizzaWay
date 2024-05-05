import React, { useEffect, useState } from "react";
import { loginUser } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

export default function Loginpage() {
  const dispactch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <div className="col-md-4">
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
              className="btn btn-outline-success m-3 text-center"
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
          </div>
        </div>
      </div>
    </div>
  );
}
