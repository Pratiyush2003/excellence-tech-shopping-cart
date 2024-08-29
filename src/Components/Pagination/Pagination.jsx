import React from "react";

const Pagination = ({productsPerPage, length, currentPage, handlePagination}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / productsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <>
      <nav aria-label="Page navigation example mt-4">
        <ul className="pagination justify-content-center gap-4">
          {paginationNumbers.map((pageNumber) => (
            <li className="page-item" key={pageNumber}>
              <button
                className={currentPage === pageNumber ? "btn btn-dark" : "active btn btn-dark"}
                onClick={() => handlePagination(pageNumber)}
              >
                 {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
