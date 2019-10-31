import React from "react";
import renderer from "react-test-renderer";
// import {Map, Marker, TileLayer} from "react-leaflet";
import MapComponent from "../map/map.jsx";
import {offers} from "../../mocks/offers.js";

it(`Map correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MapComponent offers={offers}>
    </MapComponent>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
