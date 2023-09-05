import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutFunction } from "../Redux/Auth/Auth.Action";
import Logout from "../Components/Logout";
import ViewProducts from "./ProductPages/ViewProducts";
import HomePageContent from "./HomePageComponents/HomePageContent";

const HomePage = () => {
  return (
    <div className="d-flex bg-light justify-content-center align-items-center pt-5">
      <HomePageContent/>
    </div>
  );
};

export default HomePage;
