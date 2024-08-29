import React, { useEffect, useState } from "react";

const CheckOut = ({ cart , itemCounts}) => {
  let [TotalAmount, setTotal] = useState(0);
  
  useEffect(() => {
    const Total = cart.reduce((acc, items) => {
      const itemsTotal = items.price * (itemCounts[items.id] || 1)
      return acc + itemsTotal;
    },0);
    setTotal(Total);
  },[cart , itemCounts])

  return (
    <>
      <div className="col">
        <div className="card shadow-sm p-3">
          <h4>Order Summary</h4>
          <div className="d-flex justify-content-between">
            <span>Items:</span>
            <span>${TotalAmount}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Shipping:</span>
            <span>$5.00</span>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <strong>Total:</strong>
            <strong>${TotalAmount + 5}</strong>
          </div>
          <button className="btn btn-primary mt-4 w-100">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
