import React from 'react';
import { useHistory } from "react-router-dom";

import styles from './Login.module.css'

import { Button } from 'react-bootstrap'

const Login = () => {
  const { push } = useHistory();

  const onLoginClicked = () => {
    console.log('hice login');
    push('/home');
  }

  return (
    <div>
      <h1>Login</h1>
      <Button className={styles.test} onClick={onLoginClicked}>Login</Button>
    </div>
  )
};

export default Login;
