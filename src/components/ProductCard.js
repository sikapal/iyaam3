import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
      <>
        <div
          className={`${
            location.pathname === "/store" ? `gr-${grid}` : "col-3"
          }`}
        >
          <Link to=":id" className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <Link>
                <img src="images/wish.svg" alt="wishlist" />
              </Link>
            </div>
            <div className="product-image">
              <img
                src="images/tab1.jpg"
                className="img-fluid"
                alt="product_image"
              />
            </div>
            <div className="product-details">
              <h6 className="brand">Havels</h6>
              <h5 className="product-title">
                Kids headphones bulk 10 pack multi
              </h5>
              <p
                className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              >
                {" "}
                At vero eos at accusamus et iosto odio dignitaiooff filoria et
                hf
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

        <div
          className={`${
            location.pathname === "/store" ? `gr-${grid}` : "col-3"
          }`}
        >
          <Link to=":id" className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <button className="border-0 bg-transparent">
                <img src="images/wish.svg" alt="wishlist" />
              </button>
            </div>
            <div className="product-image">
              <img src="images/tab1.jpg" className="img-fluid" alt="product" />
            </div>
            <div className="product-details">
              <h6 className="brand">Havels</h6>
              <h5 className="product-title">
                Kids headphones bulk 10 pack multi
              </h5>
              <p
                className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              >
                {" "}
                At vero eos at accusamus et iosto odio dignitaiooff filoria et
                hf
              </p>
              <p className="price">5000 FCFA</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent">
                  <img src="images/add-cart.svg" alt="compare" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src="images/view.svg" alt="view" />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
}

export default ProductCard

