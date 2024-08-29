import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const ViewSingleProduct = () => {
  const { id } = useParams();
  const { allProducts } = useSelector((state) => state.app);
  const navigate = useNavigate();

  const singleProduct =
    allProducts.length > 0 &&
    allProducts.filter((ele) => ele.id === parseInt(id));

  useEffect(() => {
    if (!singleProduct) {
      navigate("/");
    }
  }, [singleProduct]);

  return (
    <>
        <SingleProduct singleProduct = {singleProduct}/>
    </>
  );
};

export default ViewSingleProduct;
