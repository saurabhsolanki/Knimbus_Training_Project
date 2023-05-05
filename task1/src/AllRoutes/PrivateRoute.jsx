import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const token = useSelector((store) => store.auth.token);
    const location = useLocation();
    // console.log(location.pathname)
    if (!token) {
      return <Navigate to="/login" state={{ from: location }} repalce/> ;
    }
    return children;
}

export default PrivateRoute
