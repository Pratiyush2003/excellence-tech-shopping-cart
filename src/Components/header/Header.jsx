import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchProduct } from "../../State Management/shopingSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const {cart} = useSelector((state) => state.app)
  const navigate = useNavigate();

  function logout(){
    localStorage.removeItem('mylogintoken');
    navigate('/login')
  }

  useEffect(() => {
    dispatch(searchProduct(search));
  }, [search]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            Homepage
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/CartPage"} className="nav-link">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Apply Filter
                </a>
                <ul className="dropdown-menu cursor-pointer">
                  <li onClick={() => setSearch("jewelery")} className="dropdown-item ">Jewelery</li>
                  <li onClick={() => setSearch("electronics")} className="dropdown-item">Electronics</li>
                  <li onClick={() => setSearch("women's clothing")} className="dropdown-item">Women's clothing</li>
                    <li onClick={() => setSearch("men's clothing")} className="dropdown-item">Men's clothing</li>
                    <li onClick={() => setSearch("")} className="dropdown-item">Clear Fitler</li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-dark mx-2" type="button">
                  Cart-{(`${cart.length}`)}
              </button>
              <button className="btn btn-outline-dark" type="button" onClick={logout}>
                  Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
