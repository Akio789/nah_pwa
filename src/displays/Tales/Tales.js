import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCulture } from '../../api/fetchCulture';
import styles from './Tales.module.css';


const Tales = () => {
  const { id } = useParams()
  const [taleInfo, setTaleInfo] = useState({});

  useEffect(() => {
    fetchCulture(id).then((data) => {
      setTaleInfo(data)
    })
  }, [id]);

  const createMarkup = (tale) => {
    return { __html: tale };
  }

  return (
      <div className={styles.styledtable} dangerouslySetInnerHTML={createMarkup(taleInfo.html)} />
  )
};

export default Tales;
