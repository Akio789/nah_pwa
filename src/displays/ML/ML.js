import placeholder from '../../assets/placeholder.jpg';
import React, { useEffect,useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import styles from './ML.module.css';
import fontNAH from '../../assets/IMG_0635.png';
import {sendImage} from '../../api/sendImage.js';

const ML = () => {
  const [image, setImage] = useState(placeholder);
  const [file, setFile] = useState(false);
  const [prediction, setPrediction] = useState('');
  const onImageChange = event => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
 }
  const checkImage = () => {
    const data = new FormData();
    data.append('file',file);
    sendImage(data).then((data)=>{setPrediction(data.data.prediction)});
  }
  return (
    <div>
      <div className={styles.titlecard}>
        <img  src={fontNAH} alt="Logo Nah" height="40" className={styles.centerImage}></img>
        <h1 className="text-center"> RECONOCIMIENTO DE IMAGEN</h1>
      </div>
      <div className={styles.wrapper}>
      <img id="target" src={image} alt="Placeholder"width="500" height="300"></img>
      </div>
      <div className={styles.wrapper2}>
      <div>
          <label for="img">Seleccionar Imagen:</label>
          <div>
            <input type="file" id="img" name="img" accept="image/*" onChange={onImageChange} className="filetype" id="group_image"></input>
            <Button className={styles.btn} onClick={checkImage}>Subir</Button>
          </div>
          <h2>Predicción: {prediction}</h2>
        </div>
        </div>
    </div>
  )
};

export default ML;
