import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
//import { FaUser } from "react-icons/fa";
import "rsuite/dist/rsuite.min.css";
//import DropdownMenu from "rsuite/esm/Dropdown/DropdownMenu";
import { Dropdown, Avatar } from "rsuite";

const renderToggle = (props) => (
  <Avatar
    circle
    {...props}
    src="https://i.pravatar.cc/150?u=git@rsutiejs.com"
  />
);

const Header = ({ filter, setFilter }) => {
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2 ">
              <Link to="/" className="text-white">
                <h3>
                  IY<span>AA</span>M
                </h3>
              </Link>
            </div>
            <div className="col-lg-5  col-md-6 col-12">
              <div className="input-group ">
                <span className="input-group-location p-3 flex-wrap d-flex bg-white">
                  <HiLocationMarker
                    color="#0460D9"
                    size={25}
                    className="m-20  m-6"
                  />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Recherche Par Produit... "
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />

                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6 text-white" />
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-9 col-lg-5  ">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <FaCodeCompare />
                    <p className="mb-0">
                      Comparer <br />
                    </p>
                  </Link>
                </div>

                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/wishlists"
                  >
                    <FaRegBookmark />
                    <p className="text-white mb-0">Signet</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/chatpage"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <IoChatbubbleOutline />
                    <p className="mb-0">
                      Messagerie
                      <br />
                    </p>
                  </Link>
                </div>

                <Dropdown
                  renderToggle={renderToggle}
                  panel
                  style={{ padding: 10, width: 160 }}
                >
                  <Dropdown.Item panel style={{ padding: 10, width: 170 }}>
                    <p>
                      Salut <strong>Lucien</strong>
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Separator />
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item>Aide</Dropdown.Item>
                  <Dropdown.Item>Parametres</Dropdown.Item>

                  <Dropdown.Separator />

                  <Dropdown.Item>
                    <Link to="/login" className="text-dark">
                      Se connecter
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>Deconnexion</Dropdown.Item>
                </Dropdown>
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
                      <span className="me-5 d-inline-block"> Publier</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="/post">
                          Bien Immobilier à vendre
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
};

export default Header
