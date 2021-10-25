import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import Marker from 'react-google-maps/lib/components/Marker';
const Map = (props) => {
  return (<GoogleMap defaultZoom={10} 
              defaultCenter={{ lat: 19.43760, lng: -99.14194}}>
              <Marker key="marker_1" label={"San Juan Tezontla"} position={{lat: 19.544770,lng:  -98.815421}}/>
              <Marker key="marker_2" label={"Alcohuacan"} position={{lat: 19.321416, lng:-98.844517}}/>
              <Marker key="marker_3" label={"Tetelcingo"} position={{lat: 18.869534,lng: -98.931438}}/>
              <Marker key="marker_4" label={"Chiconcuac"} position={{lat: 19.557352, lng:-98.899887}}/>
              <Marker key="marker_5" label={"Pueblo de Milpa Alta"} position={{lat: 19.211319,lng: -98.982901}}/>
              <Marker key="marker_6" label={"Cuautla"} position={{lat: 18.838790, lng:-98.949608}}/>
              <Marker key="marker_7" label={"San Jerónimo"} position={{lat:19.517891,lng: -98.762461}}/>
              <Marker key="marker_8" label={"Cuscatlán"} position={{ lat:13.704121,lng: -89.231364}}/>
              <Marker key="marker_9" label={"Santa Catarina"} position={{ lat:18.972187, lng:-99.145260}}/>
              <Marker key="marker_10" label={"San Pablo Ixacoyoc"} position={{lat:19.470638, lng:-98.796959}}/>
              <Marker key="marker_11" label={"Escuintla"} position={{lat:14.298574, lng:-90.782015}}/>
              <Marker key="marker_12" label={"Tepoztlán"} position={{lat:18.996569, lng:-99.096158}}/>
              <Marker key="marker_13" label={"Huesca de Ocampa"} position={{lat: 20.202251,lng: -98.575344}}/>
              <Marker key="marker_14" label={"Hueyapan"} position={{lat: 18.885226, lng:-98.692152}}/>
              <Marker key="marker_15" label={"Cueytepec"} position={{lat: 18.862699,lng: -99.324663}}/>
              <Marker key="marker_16" label={"Tlaxcala Apizaco"} position={{lat: 19.411767,lng: -98.145540}}/>
              <Marker key="marker_17" label={"Tetela"} position={{lat:18.896714, lng:-98.728217}}/>
              <Marker key="marker_18" label={"Puente de Ixtla"} position={{lat: 18.614465, lng:-99.327043}}/>
              <Marker key="marker_19" label={"Chalco"} position={{lat: 19.263090,lng: -98.898412}}/>
              <Marker key="marker_20" label={"Amecameca"} position={{lat: 19.119521, lng:-98.763713}}/>
              <Marker key="marker_21" label={"Temixco"} position={{lat: 18.842600, lng:-99.237031}}/>
              <Marker key="marker_22" label={"Xococotla"} position={{lat: 18.685589, lng:-99.253316}}/>
              <Marker key="marker_23" label={"Chicontepec"} position={{lat: 20.973458, lng:-98.166029}}/>
              <Marker key="marker_24" label={"Ixhuatlán"} position={{lat: 20.688095, lng:-98.014368}}/>
              <Marker key="marker_25" label={"Benito Juárez"} position={{lat: 20.884605,lng: -98.206448}}/>
              <Marker key="marker_26" label={"Sierra Mazateca"} position={{lat:18.272410, lng: -96.768035}}/>
              </GoogleMap>
              );
}

export default withScriptjs(withGoogleMap(Map))