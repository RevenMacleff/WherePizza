import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
              <div className="cart__price">0 ₽</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
