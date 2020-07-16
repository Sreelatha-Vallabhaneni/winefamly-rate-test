import React from "react";
import ProductDetails from "./productDetails/product-details";
import ProductCart from "./productCart/cart";
import Modal from "./productModalBox/modal";

const WineDetails = () => {
  return (
    <React.Fragment>
      <div className="product-page">
        <div className="product-image-section">
          <div className="heart-symbol">
          </div>
          <div className="hero-image">
            <div className="dialog-window">
              <Modal />
            </div>
          </div>
        </div>
        <ProductDetails />
        <ProductCart />
      </div>
    </React.Fragment>
  );
};

export default WineDetails;
