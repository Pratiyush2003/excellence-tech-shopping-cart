import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderAllProduct from "./RenderAllProduct";
import { addToCart } from "../../State Management/shopingSlice";

const SingleProduct = ({ singleProduct }) => {
  const { allProducts } = useSelector((state) => state.app);

  const categoryProduct = allProducts.filter(
    (ele) => ele.category === singleProduct[0]?.category
  );

  const dispatch = useDispatch();

  const addproducttoCart = ( title , price , image) => {
      dispatch(addToCart({id : Math.ceil(Math.random() * 1000) , title , price , image}));
  }

  return (
    <>
      <div className="container my-5 d-flex justify-content-center align-items-center">
        <div className="card mb-3 shadow-lg" style={{ maxWidth: "80%" }}>
          <div className="row g-0">
            <div className="col-md-5 p-4 d-flex justify-content-center align-items-center bg-light">
              <img
                src={singleProduct[0]?.image || "default-image-url.jpg"}
                className="img-fluid rounded-start"
                alt={singleProduct[0]?.title || "Product"}
                style={{
                  width: "80%",
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h3 className="card-title font-weight-bold">
                  {singleProduct[0]?.title || "Product Title"}
                </h3>
                <p className="card-text text-muted">
                  {singleProduct[0]?.description ||
                    "Product description goes here. It provides an overview of the product features, benefits, and any other relevant details that would help the customer make a purchasing decision."}
                </p>
                <div className="d-flex align-items-center">
                  <h2 className="card-text text-primary font-weight-bold mb-0">
                    {`$${singleProduct[0]?.price || "0.00"}`}
                  </h2>
                </div>
                <button type="button" className="btn btn-dark mt-4 px-5 py-2" 
                onClick={() => addproducttoCart( singleProduct[0]?.title ,
                 singleProduct[0]?.price, singleProduct[0]?.image)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
      <RenderAllProduct productToRender={categoryProduct} />
      </div>
    </>
  );
};

export default SingleProduct;
