import React from "react";

const CardLoader = () => {
  return (
    <div>
      <div className="card" aria-hidden="true">
        <div className="card-header placeholder-glow"><span className="placeholder col-7"></span></div>
        <img src="https://retchhh.files.wordpress.com/2015/03/loading1.gif" className="card-img-top" alt="..." />
        <div className="card-footer placeholder-glow">
            <span className="placeholder col-6"></span>
            
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
