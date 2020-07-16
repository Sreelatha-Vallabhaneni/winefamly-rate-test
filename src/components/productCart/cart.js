import React from "react";
import circleIcon from "../../Images/circle.png";
import "./cart.css";

function ProductCart() {
  return (
    <div className="product-cart">
      <div className="save-price-sec">
        <img
          src="https://cdn.winefamly.com/images/magento/icons/noun-save.svg"
          alt="Discount Icon"
          width="16px"
        />
        <p className="save-price">Spar:23,44 Kr.</p>
      </div>
      <div className="cart-info">
        <p>Pris per flaske</p>
        <div className="price">
          <h1>38,33 Kr. &nbsp;</h1>
          <p>
            Normal price:<del>88,98 Kr.</del>
          </p>
        </div>
        <div className="cart-btns">
          <div className="quantity">
            <button>-</button>
            <input value="1" />
            <button>+</button>
          </div>
          <button className="shopping-cart">
            <img
              src="https://cdn.winefamly.com/images/magento/icons/icon-inverted-shop-shopping-cart.svg"
              alt="shopping cart"
            />
          </button>
        </div>
        <div className="stock-icon">
          <img src={circleIcon} alt="Circle Icon" width="11px" />
          <p>1123 stk.på lager</p>
        </div>
        <ul className="info-icons">
          <li>
            <img
              src="https://cdn.winefamly.com/images/magento/icons/delivery.svg"
              alt="delivery Icon"
              width="20px"
            />
          </li>
          <li>
            <img
              src="https://cdn.winefamly.com/images/magento/icons/noun-checkmark.svg"
              alt="Checkmark Icon"
              width="13px"
            />
          </li>
          <li>
            <img
              src="https://cdn.winefamly.com/images/magento/icons/order-amount.svg"
              alt="Orders Icon"
              width="19px"
            />
          </li>
        </ul>
        <ul className="cart-text">
          <li>
            <p>Free delivery</p>
          </li>
          <li>
            <p>Price guarantee</p>
          </li>
          <li>
            <p>No min. orders</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCart;
