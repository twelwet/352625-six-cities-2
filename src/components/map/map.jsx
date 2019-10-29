import React from "react";
import {Map, Marker, TileLayer} from "react-leaflet";
// import PropTypes from "prop-types";

const MapComponent = () => {

  const city = [52.38333, 4.9];
  const position = [52.3709553943508, 4.89309666406198];
  const zoom = 12;

  return <Map
    center={city}
    zoom={zoom}
    position={position}
  >
    <TileLayer
      url={`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`}
      attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
    />
    <Marker
      position={position}
    />
  </Map>;
};

export default MapComponent;

