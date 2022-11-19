import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation();

    if (user && user?.uid) {
        return children;
    }
    <Navigate to='/login' state={{ from: location }} replace></Navigate>



};

export default PrivateRoutes;