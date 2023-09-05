import React from "react";

const Pagination = ({ page, totalPages, setPage }) => {
  // const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
  const pages = Array(totalPages)
    .fill(0)
    .map((e, i) => (
      <button
        className="btn btn-primary"
        disabled={page == i + 1}
        onClick={() => setPage(i + 1)}
        key={i}
      >
        {i + 1}
      </button>
    ));

  return (
    <div aria-label="Page navigation example">
      <div className="pagination justify-content-center gap-2">
        <div className="page-item">
          <button
            className="page-link"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            &laquo;
          </button>
        </div>

        {pages}

        <div className="page-item">
          <button
            className="page-link"
            onClick={() => setPage((prev) => prev + 1)}
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
