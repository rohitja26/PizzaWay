import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizzas from "../component/Pizzas";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../component/Loading";
import Error from "../component/Error";

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
          <Loading />
        ) : error ? (
          <Error error="Somthing went wroing" />
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
