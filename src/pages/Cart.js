import React from "react";
import PizzasTop from "../components/PizzasTop";

const Cart = () => {
  return (
    <div className="container container_cart">
      <PizzasTop showFilter={false} title={"Ваш заказ"}></PizzasTop>
    </div>
  );
};

export default Cart;
