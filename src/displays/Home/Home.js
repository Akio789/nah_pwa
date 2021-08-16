import React, { useState } from 'react';
import { fetchVocalecciones } from '../../api/fetchVocalecciones';

const Home = () => {
  const [vocaleccion, setVocaleccion] = useState('');
  const getVocaleccion = async (e) => {
    if (e.key === 'Enter') {
      const { data, status } = await fetchVocalecciones()
      const indexVocaleccion = Math.random() * (50 - 1) + 1
      console.log(data[6])
    }
  }
  return (
    <div>
      <h1> N A H</h1>
      <input
        type="text"
        onChange={(e) => setVocaleccion(e.target.value)}
        onKeyPress={getVocaleccion}
      ></input>
    </div>
  );
};

export default Home;
