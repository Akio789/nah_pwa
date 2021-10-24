import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <div className="container">
      <br />
      <p align="center" className={styles.class3}>
        Acerca de [NAH]
        Esta aplicación fue hecha con el motivo de ayudar a
        los aprendices de Náhuatl a interiorizar mejor los
        aspectos de gramática, por medio de vocabulario,
        ejercicios prácticos y cuestiones de cultura de
        nuestros pueblos originarios, que permitan al
        estudiante no solo dominar la lengua, sino conocer
        aspectos de la cosmovisión de nuestra gente macehualli.

      </p>
      <br />
      <hr size="5" color="gold" />
      <br />
      <p align="center" className={styles.class1}>
        Creado por:
      </p>
      <p align="center" className={styles.class2}>
        Enrique Orduña Ávila A01027318
      </p>
      <p align="center" className={styles.class3}>
        Miguel Alejandro Hernandez Garcia A01654722
      </p>
      <p align="center" className={styles.class2}>
        Jorge Akio Olvera Arao A01651395
      </p>
      <p align="center" className={styles.class2}>
        Jorge Alberto Figueroa Peart A01653348
      </p>
      <p align="center" className={styles.class2}>
        Gerardo Arturo Miranda Godoy A01338074
      </p>

      <br />
      <p align="center" className={styles.class1}>
        Con la colaboración de:
      </p>
      <p align="center" className={styles.class1}>
        Jesus Yohualli Lopez
      </p>
    </div>
  )
}

export default AboutUs
