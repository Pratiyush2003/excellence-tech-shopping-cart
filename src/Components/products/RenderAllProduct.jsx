import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RenderAllProduct = ({ productToRender }) => {
  const {searchData} = useSelector((state) => state.app)

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {productToRender &&
          productToRender
          .filter((ele) => {
            if(searchData.length < 0){
              return ele;
            }else{
              return ele.title.toLowerCase().includes(searchData.toLowerCase()) || 
              ele.category.toLowerCase().includes(searchData.toLowerCase());
            }
            })
          .map((ele) => (
            <div className="col" key={ele.id}>
              <div className="card h-100 shadow-sm rounded  p-2">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={ele.image}
                    className="img-fluid"
                    alt="Product"
                    style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "contain",
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{ele.title}</h5>
                  <p className="card-text">This is a short card description.</p>
                  <Link to={`/view/${ele.id}`} type="button" className="btn btn-dark mt-auto">
                    <>View</> 
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default RenderAllProduct;
