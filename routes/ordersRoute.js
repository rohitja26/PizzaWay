const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51PD8vaSJecE9TdmtgazLyHfF4Czd2x1sEIr2dKIyYYqHwgskdsknAKOiqu7poX6sfM89ziiWRmlwCa8OeTjE56WN00t2jJup0V"
);
const { v4: uuidv4 } = require("uuid");

router.post("/placeorder", async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "INR",
        customer: customer.id,
        receipt_email: customer.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      res.send("Payment done");
    } else {
      res.send("Payment failed");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
