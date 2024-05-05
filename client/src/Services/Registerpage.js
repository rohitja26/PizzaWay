import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";

export default function Registerpage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const dispactch = useDispatch();

  function Register() {
    if (password != cpassword) {
      alert("Password Dosen't match");
    }
    const user = {
      name,
      email,
      password,
    };
    console.log(user);
    dispactch(registerUser(user));
  }

  return (
    <div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-4 text-left">
          <h2 style={{ fontSize: "35px", fontWeight: "bold" }} className="m-5 ">
            Register
          </h2>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
              required
            />
            <button
              className="btn btn-outline-success m-3 text-center"
              onClick={() => Register()}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  textAlign: "center",
                }}
              >
                how_to_reg
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
