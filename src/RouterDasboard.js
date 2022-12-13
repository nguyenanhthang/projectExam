import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

function RouterDasboard() {
  if (localStorage.getItem("user")){
    return (
        <Outlet />
    );
  }
    
  return (
      <Navigate to="/" />
  );
}

export default RouterDasboard;
