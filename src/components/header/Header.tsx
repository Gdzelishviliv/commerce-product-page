import { useState } from "react";
import "./header.css";

const Header = ({ cartItems, removeFromCart }: any) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const itemPrice = 125;

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="header-container">
      <div className="header-items">
        <div>
          <button></button>
          <span className="logo"></span>
        </div>
        <a href="">Collections</a>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div className="header-cart-profile">
        <button onClick={toggleCart}>
          {totalQuantity > 0 && (
            <div className="quantity-circle">{totalQuantity}</div>
          )}
        </button>
        <img src="" alt="" />
        {isCartOpen && cartItems.length >= 0 && (
          <div className="cart-preview">
            <h4>cart</h4>
            {cartItems.map((item: any, index: any) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt="item" />
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <div>
                    ${itemPrice}x{item.quantity}{" "}
                    <span>${itemPrice * item.quantity}</span>
                  </div>
                </div>
                <button onClick={() => removeFromCart(index)}></button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
