import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  return true ? <Outlet /> : <Navigate to={"/"} replace />;
};
