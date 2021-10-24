import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCulture } from '../../api/fetchCulture';


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
    <div className='container'>
      <h2 className='font-weight-bold'>{taleInfo.name}</h2>
      <div dangerouslySetInnerHTML={createMarkup(taleInfo.lecture)} />
    </div>
  )
};

export default Tales;
