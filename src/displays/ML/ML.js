import placeholder from '../../assets/placeholder.jpg';
import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import styles from './ML.module.css';
import fontNAH from '../../assets/IMG_0635.png';


const ML = () => {
  
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({image: e.target.result});
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  
  const checkImage = () => {
  }
  return (
    <div>
      <div className={styles.titlecard}>
        <img  src={fontNAH} alt="Logo Nah" height="40" className={styles.centerImage}></img>
        <h1 className="text-center"> RECONOCIMIENTO DE IMAGEN</h1>
      </div>
      <div className={styles.wrapper}>
        <div>
          <img id="target" src={placeholder} alt="Placeholder"width="500" height="300"></img>
          <form action="/action_page.php">
          <label for="img">Seleccionar Imagen:</label>
          <input type="file" id="img" name="img" accept="image/*" onChange={onImageChange} className="filetype" id="group_image"></input>
          <Button className={styles.registerBtn} onClick={checkImage}>Subir</Button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default ML;
