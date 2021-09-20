import { Button } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { fetchVocalecciones } from '../../api/fetchVocalecciones';
import fontNAH from '../../assets/IMG_0635.png';
import styles from './Home.module.css'
import mexIMG from '../../assets/export3.png';
import React, { useState, useEffect } from 'react';
import Lessons from './Lessons';

const Home = ({ latestLesson }) => {
  const [vocaleccion, setVocaleccion] = useState('');

  const getVocaleccion = async () => {
    const min = 1;
    const max = 339;
    const rand = Math.floor(Math.random() * (max - min)) + min;
    const { data } = await fetchVocalecciones(rand)
    setVocaleccion(data)
  }

  useEffect(() => {
    getVocaleccion()
  }, [])

  return (
    <div className={styles.home}>
      <img src={fontNAH} alt="Logo Nah" height="40" className={styles.centerImage}></img>
      <h1 className="text-center"> B I E N V E N I D O </h1>
      <img src={mexIMG} alt="Logo Nah" className={styles.leftImage}></img>
      <Card className='mb-4'>
        <CardContent>
          <p className={styles.cardTitle}>
            Palabra del día
          </p>
          <p className={styles.cardSubtitle}>
            Adjetivo
          </p>
          <h2>
            {vocaleccion.nahuatl}
            <br />
          </h2>
          <h2>
            {vocaleccion.spanish}
            <br />
          </h2>
        </CardContent>
      </Card>
      <Lessons latestLesson={latestLesson} />
    </div>
  );
};

export default Home;
