import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap'

const LogoutButton = ({ className }) => {
  const { logout } = useAuth0();

  return (
    <Button className={className} onClick={() => logout({ returnTo: window.location.origin })}>
      Salir
    </Button>
  );
};

export default LogoutButton;