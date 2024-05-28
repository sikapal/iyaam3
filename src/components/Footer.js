import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="relative bg-black text-white">
        <div className="Footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-5 col-12 ft-1">
                <h3>
                  <span>I</span>YAAM
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum ea quo ex ullam laboriosam magni totam, facere eos
                  iure voluptate.
                </p>
                <div className="footer-icons">
                  <i>
                    <FaInstagram />
                  </i>
                  <i>
                    <FaFacebook />
                  </i>
                  <i>
                    <FaTwitter />
                  </i>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-12 ft-2">
                <h5>Services</h5>
                <ul>
                  <li className="nav-item">
                    <a className="" href="/">
                      Service 1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="" href="/">
                      Service 2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="" href="/">
                      Service 3
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="" href="/">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 col-12 ft-3">
                <h5>Quick Links</h5>
                <p>
                  <i class="fa-solid fa-phone-volume"></i> +237 693240843
                </p>
                <p>
                  <i class="fa-solid fa-envelope"></i> iyaam@gmail.com
                </p>
                <p>
                  <i class="fa-solid fa-paper-plane"></i>Yaounde, Barriere
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Last-footer">
          <p>Design By Iyaam</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer

