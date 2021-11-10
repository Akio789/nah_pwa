import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Lecciones.module.css';
import fontNAH from '../../assets/IMG_0635.png';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import HelpIcon from '@material-ui/icons/Help';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Box from '@material-ui/core/Box';
import { fetchLessonDescription } from '../../api/fetchLessonDescription';
import { fetchLesson } from '../../api/fetchLesson';
import { saveLatestLesson } from '../../api/latestLesson';
import "bootstrap/dist/css/bootstrap.min.css";
import FlipCard from '../../components/FlipCard/FlipCard';
import CardVocabulary from '../../components/CardVocabulary/CardVocabulary';
import { fetchVocabulary } from '../../api/fetchVocabulary';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <h1>{children}</h1>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}



const Lecciones = () => {
  const { latestLesson } = useParams();
  const [allVocabulary, setAllVocabulary] = React.useState([]);
  // Variable que marca el index donde se encuentra actual el usuario.
  const [value, setValue] = React.useState(0);
  // Variables para vocabulario, gramática y ejercicios a cargar por lección.
  const [selectedLessonId, setSelectedLessonId] = React.useState(latestLesson);
  const [lecciones, setLecciones] = React.useState([]);
  const [nombresLecciones, setNombresLecciones] = React.useState([]);
  const [resumenLeccion, setResumenLeccion] = React.useState('El sistema de escritura es variado entre las diversas formas que se han intentado para llevar el náhuatl hablado a la escritura. En este sistema se intentará tomar el sistema ortográfico ideado por la SEP para la alfabetización de la lengua. El nahualt, hace uso de 18 sonidos y todas las palabras llevarán el acento en la penúltima sílaba (graves) solo con fines didácticos en algunas palabras, sin embargo es importante recordar la entonación, pues en las lecciones posteriores no se utilizará.');
  const [vocabularioLeccion, setVocabularioLeccion] = React.useState('')
  const [gramaticaLeccion, setGramaticaLeccion] = React.useState('')
  const [ejerciciosLeccion, setEjerciciosLeccion] = React.useState([]);

  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    fetchVocabulary().then((data) => {
      setAllVocabulary(data)
    });
  }, [selectedLessonId])

  useEffect(() => {
    fetchLessonDescription().then((data) => {
      setNombresLecciones(data)
    })
  }, []);

  useEffect(() => {
    fetchLesson(selectedLessonId).then((data) => {
      setLecciones(data)
    })
  }, [selectedLessonId]);

  useEffect(() => {
    fetchLesson(selectedLessonId).then((data) => {
      setEjerciciosLeccion(data.exercises .map((obj) => { return {variant: 'click', ...obj}}))
      console.log(ejerciciosLeccion)
    })
  }, [selectedLessonId, lecciones]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const createMarkup = (grammarLeccion) => {
    return { __html: grammarLeccion };
  }

  const onLessonSelected = (event) => {
    saveLatestLesson(user.email, event.target.value)
    setSelectedLessonId(event.target.value)
  };

  return (
    <div className={styles.root}>
      <img src={fontNAH} alt="Logo Nah" height="40" className={styles.centerImage}></img>
      <h1 className="text-center"> L E C C I O N E S </h1>
      <div>
        <select class="form-control" onChange={onLessonSelected}>
          {nombresLecciones.reverse().map(function ({ id, name }) {
            const isSelected = id === parseInt(latestLesson);
            return <option key={id} value={id} selected={isSelected}>{name}</option>
          })}
        </select>
      </div>
      <h6> {resumenLeccion}</h6>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="inherit"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Vocabulario" className={styles.colorMenuLeccion} icon={<MenuBookIcon />} {...a11yProps(0)} />
          <Tab label="Gramática" className={styles.colorMenuLeccion} icon={<SpellcheckIcon />} {...a11yProps(1)} />
          <Tab label="Ejercicios" className={styles.colorMenuLeccion} icon={<BorderColorIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
      <table class="styledtable"  >
                <thead>
                <tr><td>Español</td><td>Náhuatl</td></tr>
                </thead>
                <tbody>
                { allVocabulary.map((tuplas, i) => (
                      <CardVocabulary key={i} grayBg={i % 2 === 1} tuplas={tuplas}>
                      </CardVocabulary>
                    )) }
                </tbody>
      </table>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div dangerouslySetInnerHTML={createMarkup(lecciones.grammar)} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="container">
      <div className="row h-100">
        <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {ejerciciosLeccion.map((ejercicios) => (
            <FlipCard key={ejercicios.id} exercise={ejercicios} />
          ))}
        </div>
      </div>
    </div>
      </TabPanel>
    </div>
  );
}

export default Lecciones;