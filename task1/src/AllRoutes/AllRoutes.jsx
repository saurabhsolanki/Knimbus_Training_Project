import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import PublicRoute from "./PublicRoute";
import LandingPage from "../Pages/LandingPage";
import HomePage from "../Pages/HomePage";
import AddProductPage from "../Pages/ProductPages/AddProductPage";
import ViewProducts from "../Pages/ProductPages/ViewProducts";
import UpdateProduct from "../Pages/ProductPages/UpdateProduct";
import ItemPage from "../Pages/ItemPages/ItemPage";
import EDashboard from "../Pages/E-library/E_Dashboard";
import Breadcrumbs from "../Components/Breadcrumbs";

const AllRoutes = () => {
  return (
    <div>
      {/* <Breadcrumbs/> */}
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route
          path="landing"
          element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route
          path="home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="addProduct"
          element={
            <PrivateRoute>
              <AddProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="viewProduct"
          element={
            <PrivateRoute>
              <ViewProducts />
            </PrivateRoute>
          }
        />
        <Route
          path="item"
          element={
            <PrivateRoute>
              <ItemPage/>
            </PrivateRoute>
          }
        />
        <Route
          path="e-library"
          element={
            <PrivateRoute>
              <EDashboard/>
            </PrivateRoute>
          }
        />
        <Route
          path="products/:id"
          element={
            <PrivateRoute>
              <UpdateProduct />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
