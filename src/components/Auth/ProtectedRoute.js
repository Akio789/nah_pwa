import React from 'react';
import { Route, useHistory } from 'react-router-dom';

const ProtectedRoute = ({ component, ...args }) => {
  const { push } = useHistory();
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) {
    push('/');
  }
  return (
    <Route
      component={component}
      {...args}
    />
  )
};

export default ProtectedRoute;