import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrap">
          <Link to="/">
            <div className="header__logo">
              <div className="header__img">
                <img src="img/logo.svg" alt="logo" />
              </div>
              <div className="header__descr">Куда пицца</div>
            </div>
          </Link>
          <Link to="/cart">
            <div className="cart">
              <div className="cart__img">
                <img src="img/shopping_bag.svg" alt="cart" />
              </div>
              <div className="cart__price">{totalPrice} ₽</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
