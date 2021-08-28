import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loader}>
      <Spinner animation="border" variant="primary" className='mb-2' />
      <h3>Loading...</h3>
    </div>
  )
};

export default Loading;
