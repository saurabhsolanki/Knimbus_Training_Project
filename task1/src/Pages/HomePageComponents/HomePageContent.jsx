import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductlength,
  getProduct,
} from "../../Redux/Products/Product.action";
import HomePageBrandsCard from "./HomePageBrandsCard";

const HomePageContent = () => {
  const { AllProductsLength } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const [Mahindra, setMahindra] = useState(0);
  const [Nike, setNike] = useState(0);
  const [Boat, setBoat] = useState(0);

  const getDetailOfProducts = () => {
    let mahi = AllProductsLength?.filter((e) => e.brand === "Mahindara");
    setMahindra(mahi);

    let nike = AllProductsLength?.filter((e) => e.brand === "Nike");
    setNike(nike);

    let boat = AllProductsLength?.filter((e) => e.brand === "Boat");
    setBoat(boat);
  };

  useEffect(() => {
    dispatch(getAllProductlength());
    getDetailOfProducts();
  }, [AllProductsLength.length]);
  return (
    <div>
      <div className="container">
        {/* <ViewProducts/> */}
        <div className="row gap-3">
          <div className="row">
            <div className="col ">
              <div className="card text-center">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://media.easemytrip.com/media/Blog/India/Mountain-&-Hill-Station/Mountain-&-Hill-StationrhDkVI.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6 ">
                    <div className="card-body ">
                      <h3 className="card-title">All Products Available</h3>
                      <p className="card-text">
                        No.of Products:- {AllProductsLength.length}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-3 mb-sm-1 mb-md-2">
              <div className="card">
                <div className="card-header">Single Brand Detail</div>
                <div className="card-body">
                  <h5>Number of Mahindra Products:- {Mahindra.length}</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3 mb-sm-0 mb-md-2">
              <div className="card">
                <div className="card-header">Single Brand Detail</div>
                <div className="card-body">
                  <h5>Number of Nike Products:- {Nike.length}</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3 mb-sm-0 mb-md-2">
              <div className="card">
                <div className="card-header">Single Brand Detail</div>
                <div className="card-body">
                  <h5>Number of Boat Products:-{Boat.length}</h5>
                </div>
              </div>
            </div>
          </div>

          {/* <HomePageBrandsCard Mahindra={Mahindra} Nike={Nike} Boat={Boat}/> */}
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
