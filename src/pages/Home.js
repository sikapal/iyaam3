import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'

const Home = () => {
  return (
    <>
      <Container class1='home-wrapper-1 py-5'>
        <div className="row" >
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img className='img-fluid rounded-3' src='images/main-banner.jpg' alt='main banner' />

              <div className='main-banner-content position-absolute'>
                <h4>Supercharged for pro</h4>
                <h5>House for rent at a <br /> good Price</h5>
                <p>from 20000F to 100000F</p>
                <Link className='button'>Contact us</Link>
              </div>
            </div>

          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>
              <div className='small-banner position-relative '>
                <img className='img-fluid rounded-3' src='images/catbanner-01.jpg' alt='small banner' />

                <div className='small-banner-content position-absolute'>
                  <h4>Supercharged for pro</h4>
                  <h5>House for rent at a <br /> good Price</h5>
                  <p>from 20000F to 100000F</p>
                </div>
              </div>

              <div className='small-banner position-relative '>
                <img className='img-fluid rounded-3' src='images/catbanner-02.jpg' alt='small banner' />

                <div className='small-banner-content position-absolute'>
                  <h4>Supercharged for pro</h4>
                  <h5>House for rent at a <br /> good Price</h5>
                  <p>from 20000F to 100000F</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img className='img-fluid rounded-3' src='images/catbanner-04.jpg' alt='small banner' />

                <div className='small-banner-content position-absolute'>
                  <h4>Supercharged for pro</h4>
                  <h5>House for rent at a <br /> good Price</h5>
                  <p>from 20000F to 100000F</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img className='img-fluid rounded-3' src='images/catbanner-03.jpg' alt='small banner' />

                <div className='small-banner-content position-absolute'>
                  <h4>Supercharged for pro</h4>
                  <h5>House for rent at a <br /> good Price</h5>
                  <p>from 20000F to 100000F</p>
                </div>
              </div>

            </div>


          </div>
        </div>
      </Container>


      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex flex-wrap gap-30 ' >
              <div>
                <div className='dropdown'>
                  <button className='homecategories d-flex align-items-center gap-15 bg-white  '>
                    <img src='images/service.png' alt='services'></img>

                    <div>
                      <h6> immobiliers a vendre</h6>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-white" to=""> Action</Link></li>
                    <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                  </ul>
                </div>
              </div>
              <div className='homecategories d-flex align-items-center gap-15 bg-white '>
                <img src='images/service-02.png' alt='services'></img>
                <div>
                  <h6>Vetement</h6>

                </div>
              </div>
              <div className='homecategories d-flex align-items-center gap-15 bg-white '>
                <img src='images/service-03.png' alt='services'></img>
                <div>
                  <h6>electromenager</h6>

                </div>
              </div>
              <div className='homecategories d-flex align-items-center gap-15 bg-white '>
                <img src='images/service-03.png' alt='services'></img>
                <div>
                  <h6>electromenager</h6>

                </div>
              </div>
              <div className='homecategories d-flex align-items-center gap-15 bg-white '>
                <img src='images/service-03.png' alt='services'></img>
                <div>
                  <h6>electronique</h6>

                </div>
              </div>
              <div className='homecategories d-flex align-items-center gap-15 bg-white '>
                <img src='images/service-04.png' alt='services'></img>
                <div>
                  <h6>Vehicule</h6>

                </div>
              </div>
              <div className='homecategories d-flex align-items-center gap-15 bg-white '>
                <img src='images/service-05.png' alt='services'></img>
                <div>
                  <h6> Job</h6>

                </div>
              </div>
              <div className='homecategories d-flex align-items-center gap-15 bg-white '>
                <img src='images/service.png' alt='services'></img>

                <div>
                  <h6> Transport </h6>

                </div>
              </div>
              <div className='homecategories d-flex align-items-center gap-15 bg-white '>
                <img src='images/service.png' alt='services'></img>

                <div>
                  <h6> Services</h6>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-3 py-5'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Categories</h3>

            <div className='categories d-flex flex-wrap align-items-center justify-content-between'>
              <div className='d-flex gap align-items-center '>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt='camera' />
              </div>
              <div className='d-flex gap align-items-center '>
                <div >
                  <h6>Electronics</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt='camera' />
              </div>

              <div className='d-flex gap align-items-center '>
                <div >
                  <h6>Plots</h6>
                  <p>10Items</p>
                </div>
                <img src="images/camera.jpg" alt='camera' />
              </div>
              <div className='d-flex gap align-items-center '>
                <div >
                  <h6>Cars</h6>
                  <p>10Items</p>
                </div>
                <img src="images/laptop.jpg" alt='camera' />
              </div>
              <div className='d-flex gap align-items-center '>
                <div >
                  <h6>biens immobiliers à vendre</h6>
                  <p>10Items</p>
                </div>
                <img src="images/headphone.jpg" alt='camera' />
              </div>
              <div className='d-flex gap align-items-center '>
                <div >
                  <h6>Bien immobiliers à louer</h6>
                  <p>10Items</p>
                </div>
                <img src="images/camera.jpg" alt='camera' />
              </div>
              <div className='d-flex gap align-items-center '>
                <div >
                  <h6>Cours de Répétitions</h6>
                  <p>10Items</p>
                </div>
                <img src="images/speaker.jpg" alt='camera' />
              </div >
              <div className='d-flex gap align-items-center '>
                <div>
                  <h6>Cours de Répétitions</h6>
                  <p>10Items</p>
                </div>
                <img src="images/speaker.jpg" alt='camera' />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
        </div>
        <div className='row'>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1='popular-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Recommended Products</h3>
          </div>
        </div>

        <div className='row'>

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>






    </>
  )
}

export default Home
