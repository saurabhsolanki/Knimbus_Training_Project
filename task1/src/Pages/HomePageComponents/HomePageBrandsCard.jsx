import React from "react";

const HomePageBrandsCard = ({ Mahindra = 0, Nike = 0, Boat = 0 }) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-header">Single Brand Detail</div>
            <div className="card-body">
              <p>Number of Mahindra Products:- {Mahindra.length}</p>
            </div>
          </div>
        </div>
        <div className="col h-100">
          <div className="card">
            <div className="card-header">Single Brand Detail</div>
            <div className="card-body">
              <p>Number of Nike Products:- {Nike.length}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
          <div className="card-header">Single Brand Detail</div>
                <div className="card-body">
                  <p>Number of Boat Products:-{Boat.length}</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBrandsCard;
