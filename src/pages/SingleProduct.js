import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
//import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
 /*
  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
  };
*/
  /*  const [orderedProduct, setorderedProduct] = useState(false)*/
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                { /* <ReactImageZoom {...props} /> */}
                </div>
              </div>
              <div className="other-product-images d-flex  flex-wrap gap-15">
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Pack de 10 Montres de marque </h3>
                </div>
                <div className="border-bottom py-3">
                  <div className="price">
                    <strong>PRICE</strong> : 60000{" "}
                    <span>
                      {" "}
                      <strong>F</strong>
                    </span>
                  </div>
                </div>

                <div className="border-bottom ">
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">ABC :</h3>{" "}
                    <p className="product-data">abcdf</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">BC :</h3>{" "}
                    <p className="product-data">abcdf</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">BC :</h3>{" "}
                    <p className="product-data">abcdf</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">ABC :</h3>{" "}
                    <p className="product-data">abcdf</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">ABC :</h3>{" "}
                    <p className="product-data">abcdf</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">BC :</h3>{" "}
                    <p className="product-data">abcdf</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">ABC :</h3>{" "}
                    <p className="product-data">abcdf</p>
                  </div>

                  <div className="d-flex gap-15 align-items-center">
                    <div>
                      <a href="/">
                        <TbGitCompare className="fs-5 me-2" /> Add to Compare
                      </a>
                    </div>

                    <div>
                      <a href="/">
                        <AiOutlineHeart className="fs-5 me-2" /> Add to wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>Description</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div className="d-flex gap-10">
                    <h4 className="Customer-review">Customers Review</h4>
                  </div>
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>

                  <form action="" className="d-flex flex-column gap-15">
                    <div className="column">
                      <textarea
                        type=""
                        name=""
                        id=""
                        className="w-100 form-control "
                        cols="70"
                        rows="4"
                        placeholder="Write a comments"
                      ></textarea>
                    </div>

                    <div className="d-flex justify-content-end ">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our popular products</h3>
            </div>
            <div className="row">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
