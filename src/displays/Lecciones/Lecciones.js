import React from 'react';
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
  // Variable que marca el index donde se encuentra actual el usuario.
  const [value, setValue] = React.useState(0);
 // Variables para vocabulario, gramática y ejercicios a cargar por lección.
  const [resumenLeccion, setResumenLeccion] = React.useState('El sistema de escritura es variado entre las diversas formas que se han intentado para llevar el náhuatl hablado a la escritura. En este sistema se intentará tomar el sistema ortográfico ideado por la SEP para la alfabetización de la lengua. El nahualt, hace uso de 18 sonidos y todas las palabras llevarán el acento en la penúltima sílaba (graves) solo con fines didácticos en algunas palabras, sin embargo es importante recordar la entonación, pues en las lecciones posteriores no se utilizará.');
  const [vocabularioLeccion, setVocabularioLeccion] = React.useState('Hola')
  const [gramaticaLeccion, setGramaticaLeccion] = React.useState('Hola')
  const [ejerciciosLeccion, setEjerciciosLeccion] = React.useState('Panza');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.root}>
      <img src={fontNAH} alt="Logo Nah" height="40" className={styles.centerImage}></img>
      <h1 className="text-center"> L E C C I O N E S </h1>
      <div>
        <select name="" id="" class="form-control" onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>
          <option value="">Lección 1: Alfabeto y su pronunciación</option>
          <option value="">Lección 1: Alfabeto y su pronunciación</option>
          <option value="">Lección 1: Alfabeto y su pronunciación</option>
          <option value="">Lección 1: Alfabeto y su pronunciación</option>
          <option value="">Lección 1: Alfabeto y su pronunciación</option>
          <option value="">Lección 1: Alfabeto y su pronunciación</option>
          <option value="">Lección 1: Alfabeto y su pronunciación</option>
          <option value="">Lección 1: Alfabeto y su pronunciación</option>
          <option value="">Lección 1: Alfabeto y su pronunciación</option>
          <option value="">Lección 1: Alfabeto y su pronunciación</option>
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
          <Tab label="Ayuda" className={styles.colorMenuLeccion} icon={<HelpIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

      <table className={styles.styledtable}>
      <thead>
          <tr>
            <td>A</td>
            <td>E</td>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>
                <ol>
                  <p>“pAdre”</p>
                  <li>ámatl</li>
                  <li>átl</li>
                  <li>káli</li>
                </ol>
            </td>
            <td>
                <ol>
                  <p>“hEmos”</p>
                  <li>mékatl</li>
                  <li>tétl</li>
                  <li>mémej</li>
                </ol>
            </td>
        </tr>
      </tbody>
      </table>

      <table className={styles.styledtable}>
      <thead>
        <tr>
          <td>I</td>
          <td>O</td>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>
                <ol>
                  <p>“nIño”</p>
                  <li>píli</li>
                  <li>tétl</li>
                </ol>
            </td>
            <td>
                <ol>
                  <p>“hOmbre”</p>
                  <li>Kóli</li>
                  <li>óme</li>
                  <li>tekólotl</li>
                </ol>
            </td>
        </tr>
      </tbody>
      </table>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
        {gramaticaLeccion}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {ejerciciosLeccion}
      </TabPanel>
      <TabPanel value={value} index={3}>
        Ayuda
      </TabPanel>
    </div>
  );
}

export default Lecciones;