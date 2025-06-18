import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/useAuthStore";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children ? children : <div>Content not available</div>;
};
