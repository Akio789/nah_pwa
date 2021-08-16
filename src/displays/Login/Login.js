import React from 'react';
import { useHistory } from "react-router-dom";

import styles from './Login.module.css'

const Login = () => {
  const { push } = useHistory();

  const onLoginClicked = () => {
    console.log('hice login');
    push('/home');
  }

  return (
    <div>
      <h1>Login</h1>
      <button className={styles.test} onClick={onLoginClicked}>Login</button>
    </div>
  )
};

export default Login;
