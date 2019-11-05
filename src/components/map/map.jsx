import React from "react";
import L from "leaflet";
import {Map, Marker, TileLayer} from "react-leaflet";
import PropTypes from "prop-types";

const icon = L.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const MapComponent = (props) => {
  const {cityOffers} = props;

  return <Map style={{height: `1135px`}}
    center={[cityOffers[0].city.location.latitude, cityOffers[0].city.location.longitude]}
    zoom={cityOffers[0].city.location.zoom}
    zoomControl={false}
    position={[cityOffers[0].city.location.latitude, cityOffers[0].city.location.longitude]}
  >
    <TileLayer
      url={`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`}
      attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
    />
    {cityOffers.map((item) => {
      return <Marker key={item.id} position={[item.location.latitude, item.location.longitude]} icon={icon}/>;
    })}
  </Map>;
};

MapComponent.propTypes = {
  cityOffers: PropTypes
    .arrayOf(PropTypes
      .exact({
        id: PropTypes.number.isRequired,
        city: PropTypes.exact({
          location: PropTypes.exact({
            name: PropTypes.string.isRequired,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired
          })
        }),
        location: PropTypes.exact({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired
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
