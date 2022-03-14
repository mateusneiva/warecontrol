import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/User';

const PublicRoute = ({ component: RouteComponent, restricted }) => {
  const user = useSelector(selectUser);

  if (user.isLogged && restricted) {
    return <Navigate to="/dashboard" />;
  }

  return <RouteComponent />;
};

export default PublicRoute;
