import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import config from '~/config';

export const ProtectedRoute = ({ user, children }) => {
    if (!user) {
        return <Navigate to={config.authRoutes.login} replace />;
    }

    return children ? children : <Outlet />;
};
