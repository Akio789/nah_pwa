import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from './Login.module.css';
import { login } from '../../api/auth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { push } = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const isLoggedIn = JSON.parse(localStorage.getItem('user'))
  if (!!isLoggedIn) {
    push('/home')
  }

  const setUser = (user) => {
    if (user === "Incorrect credentials") {
      setShowAlert(true);
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    push('/home');
  }

  const onLogin = () => {
    if (email === '' || password === '') {
      setShowAlert(true);
      return;
    }
    login(email, password)
      .then((data) => setUser(data))
  };

  const sendToRegister = () => {
    push('/register');
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles['img-wrapper']}>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="NAH logo" width="150" />
      </div>
      <Alert variant="danger" hidden={!showAlert}>Credenciales Incorrectas</Alert>
      <Form className={styles.form}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo" onChange={({ target: { value } }) => setEmail(value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu contraseña" onChange={({ target: { value } }) => setPassword(value)} />
        </Form.Group>
        <Button className={styles.loginBtn} variant="warning" onClick={onLogin}>
          Ingresar
        </Button>
        <p>No tienes una cuenta?<Button className={styles.registerBtn} variant="link" onClick={sendToRegister}>Registrate</Button></p>
      </Form>
    </div>
  )
};

export default Login;
