import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import ScrollButton from "../components/ScrollButton";

const Home = () => {
  const [toggleIndex, setToggleIndex] = useState(-1);

  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // Couleur de fond par défaut (blanc)

  const handleToggle = (index) => {
    setToggleIndex(toggleIndex === index ? -1 : index);
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 ">
            <div className="main-banner position-relative ">
              <img
                className="img-fluid rounded-3"
                src="images/main-banner.jpg"
                alt="main banner"
              />

              <div className="main-banner-content position-absolute  justify-content-center">
                <h4>Supercharged for pro</h4>
                <h5>
                  House for rent at a <br /> good Price
                </h5>
                <p>from 20000F to 100000F</p>
                <Link className="button position-absolute">Contact us</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative col-12">
                <img
                  className="img-fluid rounded-3"
                  src="images/catbanner-01.jpg"
                  alt="small banner"
                />

                <div className="small-banner-content position-absolute">
                  <h4>Supercharged for pro</h4>
                  <h5>
                    House for rent at a <br /> good Price
                  </h5>
                  <p>from 20000F to 100000F</p>
                </div>
              </div>

              <div className="small-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src="images/catbanner-02.jpg"
                  alt="small banner"
                />

                <div className="small-banner-content position-absolute">
                  <h4>Supercharged for pro</h4>
                  <h5>
                    House for rent at a <br /> good Price
                  </h5>
                  <p>from 20000F to 100000F</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src="images/catbanner-04.jpg"
                  alt="small banner"
                />

                <div className="small-banner-content position-absolute">
                  <h4>Supercharged for pro</h4>
                  <h5>
                    House for rent at a <br /> good Price
                  </h5>
                  <p>from 20000F to 100000F</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src="images/catbanner-03.jpg"
                  alt="small banner"
                />

                <div className="small-banner-content position-absolute">
                  <h4>Supercharged for pro</h4>
                  <h5>
                    House for rent at a <br /> good Price
                  </h5>
                  <p>from 20000F to 100000F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex flex-wrap gap-30">
              <div
                className={`homecategories  d-flex align-items-center gap-15 ${
                  toggleIndex === 0 ? "#b3cff3 " : "bg-white"
                }`}
                onClick={() => {
                  handleToggle(0);
                  handleColorChange("#b3cff3"); // Changer la couleur de fond en vert
                }}
                style={{ backgroundColor }}
              >
                <img src="images/service.png" alt="services"></img>
                <div>
                  <h6> Biens immobiliers à vendre</h6>
                </div>
              </div>
              ;
              {toggleIndex === 0 && (
                <ul className="col-12 list-group">
                  <li className="list-group-item ">Terrain</li>
                  <li className="list-group-item ">Maison</li>
                  <li className="list-group-item ">Immeuble</li>
                  <li className="list-group-item ">Duplex</li>
                  <li className="list-group-item ">Magasin</li>
                  <li className="list-group-item ">Espace Commercial</li>
                  <li className="list-group-item ">Autre</li>
                </ul>
              )}
              <div
                className={`homecategories  d-flex align-items-center gap-15 ${
                  toggleIndex === 1 ? "#b3cff3 " : "bg-white"
                }`}
                onClick={() => {
                  handleToggle(1);
                  handleColorChange("#b3cff3"); // Changer la couleur de fond en vert
                }}
                style={{ backgroundColor }}
              >
                <img src="images/service-02.png" alt="services"></img>
                <div>
                  <h6>vetement et Accessoires</h6>
                </div>
              </div>
              {toggleIndex === 1 && (
                <ul className="col-12 list-group">
                  <li className="list-group-item">Vêtement pour enfant</li>
                  <li className="list-group-item">Vêtement pour femme</li>
                  <li className="list-group-item">Sacs</li>
                  <li className="list-group-item">Bijoux</li>
                  <li className="list-group-item">Chaussures</li>
                  <li className="list-group-item">Lunettes</li>
                  <li className="list-group-item">Autre</li>
                </ul>
              )}
              <div
                className={`homecategories  d-flex align-items-center gap-15 ${
                  toggleIndex === 2 ? "#b3cff3 " : "bg-white"
                }`}
                onClick={() => {
                  handleToggle(2);
                  handleColorChange("#b3cff3"); // Changer la couleur de fond en vert
                }}
                style={{ backgroundColor }}
              >
                <img src="images/service-03.png" alt="services"></img>
                <div>
                  <h6>Bien immobiliers à louer</h6>
                </div>
              </div>
              {toggleIndex === 2 && (
                <ul className="col-12 list-group">
                  <li className="list-group-item item">Appartement</li>
                  <li className="list-group-item item">Maison</li>
                  <li className="list-group-item item">Duplex</li>
                  <li className="list-group-item item">Villa</li>
                  <li className="list-group-item item">Espace Commercial</li>
                  <li className="list-group-item item">Bureau</li>
                  <li className="list-group-item item">Chambres</li>
                  <li className="list-group-item item">Studio</li>
                  <li className="list-group-item item">Salle de Fête</li>
                  <li className="list-group-item item">Boutique</li>
                  <li className="list-group-item item">Autres</li>
                </ul>
              )}
              <div
                className={`homecategories  d-flex align-items-center gap-15 ${
                  toggleIndex === 3 ? "#b3cff3 " : "bg-white"
                }`}
                onClick={() => {
                  handleToggle(3);
                  handleColorChange("#b3cff3"); // Changer la couleur de fond en vert
                }}
                style={{ backgroundColor }}
              >
                <img src="images/service-03.png" alt="services"></img>
                <div>
                  <h6>Véhicules</h6>
                </div>
              </div>
              {toggleIndex === 3 && (
                <ul className="col-12 list-group">
                  <li className="list-group-item item">Voiture</li>
                  <li className="list-group-item item">Moto</li>
                  <li className="list-group-item item">Camions</li>
                  <li className="list-group-item item">Tricycles</li>
                  <li className="list-group-item item">Tracteur</li>
                  <li className="list-group-item item">Bicyclette</li>
                  <li className="list-group-item item">Pieces de véhicules</li>
                  <li className="list-group-item item">Bateau</li>
                  <li className="list-group-item item">Bus</li>
                  <li className="list-group-item item">Vans</li>
                  <li className="list-group-item item">Autres</li>
                </ul>
              )}
              <div
                className={`homecategories  d-flex align-items-center gap-15 ${
                  toggleIndex === 4 ? "#b3cff3 " : "bg-white"
                }`}
                onClick={() => {
                  handleToggle(4);
                  handleColorChange("#b3cff3"); // Changer la couleur de fond en vert
                }}
                style={{ backgroundColor }}
              >
                <img src="images/service-03.png" alt="services"></img>
                <div>
                  <h6>Téléphones et Accessoires</h6>
                </div>
              </div>
              {toggleIndex === 4 && (
                <ul className="col-12 list-group">
                  <li className="list-group-item item">Téléphone Portable</li>
                  <li className="list-group-item item">Téléphone fixe</li>
                  <li className="list-group-item item">
                    Accessoires Téléphone
                  </li>
                </ul>
              )}
              <div
                className='homecategories d-flex align-items-center gap-15 bg-white  ${toggleIndex === 3 ? "" : "d-none" '
                onClick={() => handleToggle(3)}
              >
                <img src="images/service-03.png" alt="services"></img>
                <div>
                  <h6>electromenager</h6>
                </div>
              </div>
              <div className="homecategories d-flex align-items-center gap-15 bg-white ">
                <img src="images/service-03.png" alt="services"></img>
                <div>
                  <h6>electronique</h6>
                </div>
              </div>
              <div className="homecategories d-flex align-items-center gap-15 bg-white ">
                <img src="images/service-04.png" alt="services"></img>
                <div>
                  <h6>Vehicule</h6>
                </div>
              </div>
              <div className="homecategories d-flex align-items-center gap-15 bg-white ">
                <img src="images/service-05.png" alt="services"></img>
                <div>
                  <h6> Job</h6>
                </div>
              </div>
              <div className="homecategories d-flex align-items-center gap-15 bg-white ">
                <img src="images/service.png" alt="services"></img>

                <div>
                  <h6> Transport </h6>
                </div>
              </div>
              <div className="homecategories d-flex align-items-center gap-15 bg-white ">
                <img src="images/service.png" alt="services"></img>

                <div>
                  <h6> Services</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-3 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Categories</h3>

            <div className="categories d-flex flex-wrap align-items-center justify-content-between">
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Electronics</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>

              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Plots</h6>
                  <p>10Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Cars</h6>
                  <p>10Items</p>
                </div>
                <img src="images/laptop.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>biens immobiliers à vendre</h6>
                  <p>10Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Bien immobiliers à louer</h6>
                  <p>10Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Cours de Répétitions</h6>
                  <p>10Items</p>
                </div>
                <img src="images/speaker.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center ">
                <div>
                  <h6>Cours de Répétitions</h6>
                  <p>10Items</p>
                </div>
                <img src="images/speaker.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Recommended Products</h3>
          </div>
        </div>

        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <ScrollButton />
      </Container>
    </>
  );
};

export default Home;
