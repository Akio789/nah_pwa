import React from 'react';
import { useHistory } from "react-router-dom";

const Login = () => {
  const { push } = useHistory();

  const onLoginClicked = () => {
    console.log('hice login');
    push('/home');
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={onLoginClicked}>Login</button>
    </div>
  )
};

export default Login;
