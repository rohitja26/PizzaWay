import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizzas from "../component/Pizzas";
import { getAllPizzas } from "../actions/pizzaActions";
export default function Homepage() {
  const pizzasState = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasState;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading....</h1>
        ) : error ? (
          <h1>Something Went Wrong</h1>
        ) : (
          pizzas &&
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3 " key={pizza._id}>
                <div>
                  <Pizzas pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
