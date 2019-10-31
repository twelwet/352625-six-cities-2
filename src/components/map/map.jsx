import React from "react";
import {Map, Marker, TileLayer} from "react-leaflet";
import PropTypes from "prop-types";

const MapComponent = (props) => {
  const {offers} = props;

  return <Map style={{height: `970px`}}
    center={[offers[0].city.location.latitude, offers[0].city.location.longitude]}
    zoom={offers[0].city.location.zoom}
    position={[offers[0].city.location.latitude, offers[0].city.location.longitude]}
  >
    <TileLayer
      url={`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`}
      attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
    />
    {offers.map((item) => {
      return <Marker key={item.id} position={[item.location.latitude, item.location.longitude]}/>;
    })}
  </Map>;
};

MapComponent.propTypes = {
  offers: PropTypes
    .arrayOf(PropTypes
      .exact({
        id: PropTypes.number.isRequired,
        city: PropTypes.exact({
          location: PropTypes.exact({
            name: PropTypes.string,
            latitude: PropTypes.number,
            longitude: PropTypes.number,
            zoom: PropTypes.number
          })
        }),
        location: PropTypes.exact({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
          zoom: PropTypes.number
        }),
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isBookmark: PropTypes.bool.isRequired,
      })
    )
};

export default MapComponent;
