import React, { useEffect } from 'react';
import Loading from '../../components/Auth/Loading'

import { useAuth0 } from '@auth0/auth0-react';


const Login = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, [])

  return (
    <Loading />
  )
};

export default Login;
