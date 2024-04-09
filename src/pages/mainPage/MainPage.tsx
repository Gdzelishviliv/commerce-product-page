import shoes1 from "../../assets/shoes1.svg";
import shoes2 from "../../assets/shoes2.svg";
import shoes3 from "../../assets/shoes3.svg";
import shoes4 from "../../assets/shoes4.svg";
import "./mainPage.css";
import buttonIcn from "../../assets/button-cart.svg";
import { useState } from "react";

const MainPage = ({ addToCart }: any) => {
  const [images] = useState({
    img1: shoes1,
    img2: shoes2,
    img3: shoes3,
    img4: shoes4,
  });

  const [activeImg, setActiveImg] = useState(images.img1);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    addToCart({ image: activeImg, quantity });
    setQuantity(0);
  };

  return (
    <div>
      <div className="info-section">
        <div>
          <img src={activeImg} alt="shoes" className="active-img" />
          <div className="unactive-images">
            <img
              src={images.img1}
              alt=""
              onClick={() => setActiveImg(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              onClick={() => setActiveImg(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              onClick={() => setActiveImg(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              onClick={() => setActiveImg(images.img4)}
            />
          </div>
        </div>
        <h5>Sneaker Company</h5>
        <h3>Fall Limited Edition Sneakers</h3>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <div className="discount">
            <h4>$125.00</h4>
            <span>50%</span>
          </div>
          <span>$250.00</span>
        </div>
        <div className="increase-decreas-item-section">
          <button onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button className="submit-button" onClick={handleAddToCart}>
          <img src={buttonIcn} alt="cart icn" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MainPage;
