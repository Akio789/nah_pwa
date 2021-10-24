import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from './Register.module.css';
import { register } from '../../api/auth';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const { push } = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(null)

  const isLoggedIn = JSON.parse(localStorage.getItem('user'))
  if (!!isLoggedIn) {
    push('/home')
  }

  const setUser = (user) => {
    if (user === "Email already in use") {
      setShowAlert('El correo ya está en uso');
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    push('/home');
  }

  const onRegister = () => {
    if (email === '' || password === '') {
      setShowAlert('Credenciales inválidas');
      return;
    }
    register(email, password)
      .then((data) => setUser(data))
  };

  const sendToLogin = () => {
    push('/');
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles['img-wrapper']}>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="NAH logo" width="150" />
      </div>
      <Alert variant="danger" hidden={!showAlert}>{showAlert}</Alert>
      <Form className={styles.form}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo" onChange={({ target: { value } }) => setEmail(value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu contraseña" onChange={({ target: { value } }) => setPassword(value)} />
        </Form.Group>
        <Button className={styles.registerBtn} variant="warning" onClick={onRegister}>
          Registrarse
        </Button>
        <p>Ya tienes una cuenta?<Button className={styles.loginBtn} variant="link" onClick={sendToLogin}>Ingresa</Button></p>
      </Form>
    </div>
  )
};

export default Register;
