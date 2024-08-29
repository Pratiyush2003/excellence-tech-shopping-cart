import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../State Management/shopingSlice";

const Cartitems = ({ cart , itemCounts, setItemCounts}) => {
  const dispatch = useDispatch();
  
  const increment = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const decrement = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(prevCounts[id] - 1, 1), 
    }));
  };

  return (
    <div className="row">
      <div className="col">
        {cart.map((item) => (
          <div key={item.id} className="card mb-3 shadow-sm">
            <div className="row g-0">
              <div className="col-md-4 d-flex align-items-center">
                <img
                  src={item.image}
                  className="img-fluid rounded-start m-4"
                  alt={item.title}
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="input-group" style={{ width: "120px" }}>
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => decrement(item.id)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="form-control text-center"
                        value={itemCounts[item.id]}
                        readOnly
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => increment(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger ms-3"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartitems;
