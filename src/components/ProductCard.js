import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import watch1 from "../images/watch1.jpg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image ">
            <img
              src={watch1}
              className="img-fluid"
              width={240}
              
              alt="product_image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi
            </h5>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              {" "}
              At vero eos at accusamus et iosto odio dignitaiooff filoria et hf
            </p>
            <p className="price">5000 FCFA</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link to="/compare">
                <img src="images/add-cart.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard

