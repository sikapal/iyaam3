import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <Link to="/" className="text-white">
                <h3>
                  I<span>YAAM</span>
                </h3>
              </Link>
            </div>
            <div className="col-lg-5 ">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search... "
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />

                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6 " />
                </span>
              </div>
            </div>
            <div className="col-lg-5 ">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <FaCodeCompare />
                    <p className="mb-0">
                      Compare <br />
                    </p>
                  </Link>
                </div>

                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/wishlists"
                  >
                    <FaRegBookmark />
                    <p className="text-white mb-0">Bookmark</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to=""
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <IoChatbubbleOutline />
                    <p className="mb-0">
                      Messagerie
                      <br />
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <FaUser />
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  {/* <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src='/images/cart.svg' alt='cart' />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'> 1000</p>

                    </div>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 m d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="menu"></img>
                      <span className="me-5 d-inline-block"> Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          {" "}
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Articles</NavLink>
                    {/*<NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );

}

export default Header
