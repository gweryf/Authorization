import { Outlet, Navigate } from "react-router-dom";
import React from "react";

function PrivateRoutes() {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
