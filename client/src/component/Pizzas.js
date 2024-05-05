import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

export default function Pizzas({ pizza }) {
  const [varient, setVarients] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  function addToCartHandler() {
    dispatch(addToCart(pizza, quantity, varient));
  }
  return (
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          className="img fluid"
          style={{ height: "200px", width: "200px" }}
          alt="pizzaImage"
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarients(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-2 w-100">
          <h1 className="mt-1">
            Price: {pizza.prices[0][varient] * quantity} Rs./-
          </h1>
        </div>
        <div className="m-2 w-100">
          <button
            className="btn btn-outline-danger mt-1"
            onClick={addToCartHandler}
          >
            Add to card
          </button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title className="mx-auto d-block">{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img className="mx-auto d-block" src={pizza.image} alt="pizzaimage" />
          <p className="text-center m-2">{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-outline-danger" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
