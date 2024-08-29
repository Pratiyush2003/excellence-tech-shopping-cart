import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchProduct } from "../../State Management/shopingSlice";
import { useDispatch, useSelector } from "react-redux";
import '../customcss/Header.css'; 

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.app);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("mylogintoken");
    navigate("/login");
  }

  useEffect(() => {
    const token = localStorage.getItem("mylogintoken");
    if (token) {
      setToggle(true);
    }
  }, []);

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

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`${toggle ? "d-none" : "nav-item"}`}>
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
                  Filter
                </a>
                <ul className="dropdown-menu cursor-pointer">
                  <li
                    onClick={() => setSearch("jewelery")}
                    className="dropdown-item"
                  >
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Jewelry
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </li>
                  <li
                    onClick={() => setSearch("electronics")}
                    className="dropdown-item"
                  >
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Electronics
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </li>
                  <li
                    onClick={() => setSearch("women's clothing")}
                    className="dropdown-item"
                  >
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Women's clothing
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </li>
                  <li
                    onClick={() => setSearch("men's clothing")}
                    className="dropdown-item"
                  >
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Men's clothing
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </li>
                  <hr />
                  <li onClick={() => setSearch("")} className="dropdown-item">
                    Remove Filter
                  </li>
                </ul>
              </li>
            </ul>

            <form
              className="d-flex search-form mx-auto mx-4 fs-6 my-1"
              role="search"
            >
              <input
                className="form-control search-input mx-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-evenly">
              <Link
                to={"/CartPage"}
                className="btn btn-outline-dark mx-2 fs-6 my-1"
                type="button"
                style={{ minWidth: "80px", flexGrow: 1 }}
              >
                Cart-{`${cart.length}`}
              </Link>
              <button
                className="btn btn-outline-dark mx-2 md-mx-2 fs-6 my-1"
                type="button"
                onClick={logout}
                style={{ minWidth: "80px", flexGrow: 1 }}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
