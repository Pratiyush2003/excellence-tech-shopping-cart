import React, { useEffect, useState } from "react";
import "../customcss/ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetch_products } from "../../State Management/shopingSlice";
import RenderAllProduct from "./RenderAllProduct";
import Loading from "../LoadingComponent/Loading";
import Pagination from "../Pagination/Pagination";

const ProductList = () => {
  const dispatch = useDispatch();
  const { allProducts, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetch_products());
  }, [dispatch]); // added dispatch to dependency array

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProduct = allProducts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <RenderAllProduct productToRender={currentProduct} />
      <div className="mt-4">
        <Pagination
          productsPerPage={productsPerPage}
          length={allProducts.length}
          currentPage={currentPage}
          handlePagination={handlePagination}
        />
      </div>
    </div>
  );
};

export default ProductList;
