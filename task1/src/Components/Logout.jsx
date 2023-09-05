import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutFunction } from '../Redux/Auth/Auth.Action';
import {toast } from 'react-toastify';

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
      if (window.confirm("Are you sure you want to Logout")) {
        dispatch(logoutFunction());
        toast.success('Logged Out Successfully', {autoClose: 1000, theme: "dark", })
      }
    };
  return (
    <div>
      <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
    </div>
  )
}

export default Logout
