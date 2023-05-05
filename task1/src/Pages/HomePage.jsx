import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutFunction } from "../Redux/Auth/Auth.Action";
import Logout from "../Components/Logout";

const HomePage = () => {


  return (
    <div className="backgroundImage">
      <Container className="pt-5 text-center">
        <h1>This is Home Page</h1>
        <Logout/>
      </Container>
    </div>
  );
};

export default HomePage;
