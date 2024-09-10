export const addToCart = (pizza, quantity, varient) => (dispatch, getstate) => {
  var cartItem = {
    name: pizza.name,
    _id: pizza.id,
    image: pizza.image,
    quantity: quantity,
    varient: varient,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };
  if (cartItem.quantity > 10) {
    alert("Cannot add more than 10 same pizzas");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: cartItem,
      });
    }
  }
  const cartItems = getstate().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deletFromCart = (pizza) => (dispatch, getstate) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  const cartItems = getstate().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
