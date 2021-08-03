import React from "react";
import ImgLogo from "../../assets/img/logo.svg";

const Footer = ({ price, isCartPage }) => {
  return (
    <footer>
      <div class="subtotal">
        <span class="subtotal-test">Subtotal:</span>
        <span class="subtotal-price">${price}</span>
      </div>
      {isCartPage ? <button class="link-button">← Go back to Home</button> : <button>Check selected Items</button>}
    </footer>
  );
};

export default Footer;
