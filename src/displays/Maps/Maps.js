import { MapSharp } from '@material-ui/icons';
import React, { useState } from 'react';
import Map from '../../components/Map/Map';
import credentials from '../../credentials';
import Marker from 'react-google-maps/lib/components/Marker';
const Maps = () => {
  const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

  return (
    <div>
      <h2>Practica Náhuatl en Estas Comunidades</h2>
      <Map googleMapURL= {mapUrl}
        containerElement= {<div  style={{height: '900px'}} />}
        mapElement= {<div  style={{height: '100%'}} />}
        loadingElement={<p>Cargando</p>}
        >
        </Map>
    </div>
  )
};

export default Maps;
