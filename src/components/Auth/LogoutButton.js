import React from "react";
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const LogoutButton = ({ className }) => {
  const { push } = useHistory();
  const logout = () => {
    localStorage.removeItem('user');
    push('/');
  }

  return (
    <Button className={className} onClick={logout}>
      Salir
    </Button>
  );
};

export default LogoutButton;