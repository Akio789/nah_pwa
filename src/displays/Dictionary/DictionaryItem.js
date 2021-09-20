import { Container } from '@mui/material';
import React from 'react'
import styles from './Dictionary.module.css';

const DictionaryItem = ({ item, grayBg }) => {
  const { paleography, normalized_grapheme, translation1, source } = item;
  return (
    <div className={grayBg ? styles['item-gray-bg'] : ''}>
      <Container className={styles.container}>
        <p className={styles.paleography}>
          {paleography}
        </p>
        <p>
          {normalized_grapheme}
        </p>
        <p className={styles.translation1}>
          {translation1}
        </p>
        <p className={styles.source}>
          {source}
        </p>
      </Container>
    </div>
  )
}

export default DictionaryItem
