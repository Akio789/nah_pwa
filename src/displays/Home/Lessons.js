import agIMG from '../../assets/export4.png';
import { Button } from 'react-bootstrap';
import styles from './Home.module.css'
import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { fetchLessonDescription } from '../../api/fetchLessonDescription';
import { useHistory } from 'react-router-dom';
import { saveLatestLesson } from '../../api/latestLesson';

const Lessons = ({ latestLesson }) => {
  const [lessonDescriptions, setLessonDescriptions] = useState([])
  const [lessonSteps, setLessonSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const { push } = useHistory();
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    fetchLessonDescription().then((data) => setLessonDescriptions(data));
  }, [])

  useEffect(() => {
    if (lessonDescriptions.length !== 0) {
      const lessonsToShow = lessonDescriptions.slice(latestLesson - 1, latestLesson + 2);
      setLessonSteps(lessonsToShow.map(({ name, id }) => ({ name, id })));
    }
  }, [latestLesson, lessonDescriptions])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const goToLesson = (id) => {
    saveLatestLesson(user.email, id);
    push('lecciones/' + id);
  }

  return (
    <div>
      <h1 className="text-center" >L E C C I O N E S</h1>
      <img src={agIMG} alt="Logo Nah" className={styles.rightImage + ' mb-2'}></img>

      <div className={styles.rootTaskManager}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {lessonSteps.map(({ name, id }, index) => (
            <Step key={name}>
              <StepLabel onClick={() => setActiveStep(index)}>{name}</StepLabel>
              <StepContent>
                <div>
                  <div>
                    <Button
                      onClick={() => goToLesson(id)}
                    >
                      Ir a la Lección
                    </Button>
                  </div>
                  <div className='mt-2'>
                    <Button
                      variant='contained'
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Atrás
                    </Button>
                    <Button
                      color="primary"
                      onClick={handleNext}
                    >
                      {activeStep === lessonSteps.length - 1 ? 'Terminar' : 'Siguiente'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === lessonSteps.length && (
          <Paper square elevation={0} className={styles.reseterTaskManager}>
            <p> Lecciones Completadas </p>
            <Button onClick={handleReset}>
              Empezar de nuevo
            </Button>
          </Paper>
        )}
      </div>
    </div>
  )
}

export default Lessons
