import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const gldadminkey = JSON.parse(localStorage.getItem("gldadminkey")) || null;

  if (gldadminkey) {
    console.log(gldadminkey, "hagi");
    return children;
  }

  return (
    <>
      <Navigate to="/admin/login" />
    </>
  );
};

export default PrivateRoute;
