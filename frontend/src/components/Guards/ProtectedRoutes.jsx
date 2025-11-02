import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  // No authentication check - always allow access
  return <Outlet />;
};

export default ProtectedRoutes;
