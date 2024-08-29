import React, { useState, useEffect } from "react";
import Cartitems from "../Carts/Cartitems";
import CheckOut from "../Carts/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingComponent/Loading";

const CartPage = () => {
  const {cart} = useSelector((state) => state.app)

  if(!cart){
    return <Loading/>
  }

  const [itemCounts, setItemCounts] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 1; 
      return acc;
    }, {})
  );

 
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8">
            <Cartitems cart={cart} itemCounts = {itemCounts} setItemCounts = {setItemCounts}/>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <CheckOut cart={cart} itemCounts = {itemCounts} setItemCounts = {setItemCounts}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
