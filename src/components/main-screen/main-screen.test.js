import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";
import {offers} from "../../mocks/offers.js";
import Offers from "../offers/offers";
import MapComponent from "../map/map.jsx";
import {Map} from "react-leaflet";

it(`MainScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainScreen>
      <Offers props={offers}/>
      <MapComponent props={offers}>
        <Map props={offers}/>
      </MapComponent>
    </MainScreen>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
