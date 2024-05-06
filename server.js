const express = require("express");
const db = require("./db.js");
const Pizza = require("./models/pizzaModel");
const app = express();
const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/usersRoute.js");
const port = process.env.PORT || 5000;
const ordersRoute = require("./routes/ordersRoute.js");

app.use(express.json());

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

app.get("/", (req, res) => {
  res.send("server is running on jj" + port);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
