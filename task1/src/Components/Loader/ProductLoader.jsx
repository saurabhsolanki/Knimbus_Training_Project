import React from "react";

const ProductLoader = () => {
  return (
    <div>
      <div className="card" aria-hidden="true">
        <img src="https://media.easemytrip.com/media/Blog/India/Goa/Goa7cvngW.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a className="btn btn-primary disabled placeholder col-6"></a>
        </div>
      </div>
    </div>
  );
};

export default ProductLoader;
