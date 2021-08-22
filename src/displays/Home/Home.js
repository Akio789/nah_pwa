import agIMG from '../../assets/export4.png';
import { Button } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { fetchVocalecciones } from '../../api/fetchVocalecciones';
import fontNAH from '../../assets/IMG_0635.png';
import styles from './Home.module.css'
import mexIMG from '../../assets/export3.png';
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';


const Home = () => {
  const [vocaleccion, setVocaleccion] = useState('');
  const [leccion, setLeccion] = useState(['Conozcamos el alfabeto', '¡El mundo hablado en Náhuatl!', 'Adjetivos']);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getVocaleccion = async (e) => {
      const { data, status } = await fetchVocalecciones()
      const min = 1;
      const max = 21;
      const rand = Math.floor(Math.random() * (max - min)) + min;
      setVocaleccion(data[rand])
  }

  const getLeccion = (e) => {
    switch (e) {
      case 0:
        return 'En esta Lección aprenderás el alfabeto, junto con sus fonemas y composiciones silábicas.';
      case 1:
        return 'En esta lección tendrás un acercamiento a vocabulario básico, conocerás la traducción de los colores, animales y otros sustativos básicos. ';
      case 2:
        return 'En esta lección conocerás cómo incluir adjetivos con los sustantivos que ya conoces. ¡Empezemos!';
      default:
        return 'Unknown step';
    }
  }


  return (
    <div className={styles.home} onLoad={getVocaleccion}>
      <img src={fontNAH}  alt="Logo Nah" height="40" className={styles.centerImage}></img>
      <h1 className="text-center"> B I E N V E N I D O </h1>
      <img src={mexIMG} alt="Logo Nah" className={styles.leftImage}></img>
      <Card>
        <CardContent>
          <p className={styles.cardTitle}>
            Palabra del día
          </p>
          <p className={styles.cardSubtitle}>
            Adjetivo
          </p>
          <h2>
            { vocaleccion.nahuatl }
            <br />
          </h2>
          <h2>
            { vocaleccion.español }
            <br />
          </h2>
          </CardContent>
            <CardActions>
              <Button>Ir a Glosario</Button>
            </CardActions>
      </Card> 

      <h1 className="text-center" >L E C C I O N E S</h1>
      <img src={agIMG} alt="Logo Nah"  className={styles.rightImage}></img>

      <div className={styles.rootTaskManager}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {leccion.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <h2>{getLeccion(index)}</h2>
                <div className={styles.actionsTaskManager}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      {activeStep === leccion.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                    <Button
                    >
                      Ir a la Lección
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === leccion.length && (
          <Paper square elevation={0} className={styles.reseterTaskManager}>
            <p> Lecciones Completadas </p>
            <Button onClick={handleReset}>
              Empezar de nuevo
            </Button>
          </Paper>
        )}
      </div>
    </div>
  );
};

export default Home;
