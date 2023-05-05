import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {
    const token = useSelector((store) => store.auth.token);
    if (token) {
        return <Navigate to="/home" /> ;
      }
      return children;
}

export default PublicRoute
