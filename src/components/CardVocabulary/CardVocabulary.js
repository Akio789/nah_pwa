import React, { useEffect , useState} from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import styles from './CardVocabulary.module.css'

function CardVocabulary({ tuplas,  grayBg }) {
    
    return (<tr><td>{ tuplas.spanish }</td><td>{ tuplas.nahuatl }</td></tr>);
  }
  
  
  export default CardVocabulary;