import React from "react";
import L from "leaflet";
import {Map, Marker, TileLayer} from "react-leaflet";
import PropTypes from "prop-types";

const icon = L.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30]
});

const MapComponent = (props) => {
  const {offersList, mapHeight} = props;
  const cityLocation = offersList[0][`city`][`location`];

  return (
    <section className={props.mapClass}>
      <Map style={{height: mapHeight}}
        center={[cityLocation.latitude, cityLocation.longitude]}
        zoom={cityLocation.zoom}
        zoomControl={false}
        position={[cityLocation.latitude, cityLocation.longitude]}
      >
        <TileLayer
          url={`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`}
          attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
        />
        {offersList.map((item) => {
          return <Marker key={item.id} position={[item.location.latitude, item.location.longitude]} icon={icon}/>;
        })}
      </Map>
    </section>
  );
};

MapComponent.propTypes = {
  mapHeight: PropTypes.string.isRequired,
  mapClass: PropTypes.string.isRequired,
  offersList: PropTypes
    .arrayOf(PropTypes
      .shape({
        [`id`]: PropTypes.number.isRequired,
        [`city`]: PropTypes.exact({
          [`name`]: PropTypes.string.isRequired,
          [`location`]: PropTypes.exact({
            [`latitude`]: PropTypes.number.isRequired,
            [`longitude`]: PropTypes.number.isRequired,
            [`zoom`]: PropTypes.number.isRequired
          })
        }),
        [`location`]: PropTypes.exact({
          [`latitude`]: PropTypes.number.isRequired,
          [`longitude`]: PropTypes.number.isRequired,
          [`zoom`]: PropTypes.number.isRequired
        }),
        [`title`]: PropTypes.string.isRequired,
        [`type`]: PropTypes.string.isRequired,
        [`price`]: PropTypes.number.isRequired,
        [`preview_image`]: PropTypes.string.isRequired,
        [`rating`]: PropTypes.number.isRequired,
        [`is_premium`]: PropTypes.bool.isRequired,
        [`is_favorite`]: PropTypes.bool.isRequired,
      })
    )
};

export default MapComponent;
