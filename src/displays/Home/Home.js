import { Button } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { fetchVocalecciones } from '../../api/fetchVocalecciones';
import { fetchGlossary } from '../../api/fetchGlossary';
import fontNAH from '../../assets/IMG_0635.png';
import styles from './Home.module.css'
import mexIMG from '../../assets/export3.png';
import React, { useState, useEffect } from 'react';
import Lessons from './Lessons';
import { getLatestLesson } from '../../api/latestLesson';
 import { Play } from 'react-bootstrap-icons';

const Home = () => {
  const [latestLesson, setLatestLesson] = useState(1);
  const [vocaleccion, setVocaleccion] = useState('');
  const [audio, setAudio] = useState('');
  const [playAudio, setPlayAudio] = useState(false);
  const min = 1;
  const max = 50;
  const rand = Math.floor(Math.random() * (max - min)) + min;
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (user) {
      getLatestLesson(user.email)
        .then(({ latest_lesson }) => setLatestLesson(latest_lesson))
    }

  }, [user])
  
  if (playAudio) {
    const audio_tp = new Audio(audio)
    audio_tp.play();
    setPlayAudio(false);
  }

  const getVocaleccion = async () => {
  
    fetchGlossary().then((glossary) => {
      console.log(glossary)
      const index  = (glossary.findIndex((obj) =>  
      obj.id ==  rand 
      ))
      setVocaleccion(glossary[index]);
      setAudio(glossary[index].audio_url);
    })
  }
  
  const fetchAudioFile = async () => {
      setPlayAudio(true);
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
          <div className={styles.floatright}>
          <Button onClick={fetchAudioFile}>
          <Play />
          </Button>
          </div>
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
