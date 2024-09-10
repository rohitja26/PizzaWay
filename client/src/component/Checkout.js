import React from "react";
import { useDispatch } from "react-redux";
import StripCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";

export default function Checkout({ subtotal }) {
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  function itemID() {}

  return (
    <div>
      <StripCheckout
        amount={subtotal * 100}
        shippingAddress
        stripeKey="pk_test_51PD8vaSJecE9TdmtqxoIIo2apoAQmf11xbRvS2eKTr3kok4VttOJ9cacvLdcxeUOHbUeWC05MtPAz8IFeJxpTifO00zQmI8OF8"
        token={tokenHandler}
        currency="INR"
      >
        <button className="btn btn-outline-success mx-5">Pay now</button>
      </StripCheckout>
    </div>
  );
}
