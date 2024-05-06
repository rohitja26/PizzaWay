import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deletFromCart } from "../actions/cartAction";
import Checkout from "../component/Checkout";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2
            style={{ font: "40px", fontWeight: "bold" }}
            className="mb-5  mt-1"
          >
            My Cart
          </h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container justify-content-center">
                <div className="text-left m-3 w-100">
                  <h1 style={{ fontWeight: "bold" }} className="text-shadow-sm">
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price: {item.quantity} x {item.prices[0][item.varient]} ={" "}
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }} className="m-2">
                    Quantity:
                  </h1>
                  <i
                    className="fa fa-plus m-2"
                    aria-hidden="true"
                    onClick={() =>
                      dispatch(addToCart(item, item.quantity + 1, item.varient))
                    }
                    style={{ cursor: "pointer", fontSize: "25px" }}
                  />
                  <b style={{ fontSize: "20px" }}>{item.quantity}</b>
                  <i
                    className="fa fa-minus m-2"
                    aria-hidden="true"
                    onClick={() =>
                      dispatch(addToCart(item, item.quantity - 1, item.varient))
                    }
                    style={{ cursor: "pointer", fontSize: "25px" }}
                  />
                  <hr />
                </div>

                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    alt="Pizza Image"
                    style={{ height: "120px" }}
                  />
                </div>

                <div className="m-1 w-100">
                  <i
                    className="fa fa-trash mt-5"
                    aria-hidden="true"
                    onClick={() => dispatch(deletFromCart(item))}
                    style={{ cursor: "pointer", fontSize: "25px" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="flex-container justify-content-center ">
          <h1
            style={{ font: "40px", fontWeight: "bold" }}
            className="mb-3  mt-1"
          >
            Subtotal: {subtotal} Rs./-
          </h1>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
