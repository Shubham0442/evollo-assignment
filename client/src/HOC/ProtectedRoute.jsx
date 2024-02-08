import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuth, token } = useSelector((state) => state.authReducer);

  if (isAuth && token) return children;
  else return <Navigate to="/login" />;
};

export default ProtectedRoute;
