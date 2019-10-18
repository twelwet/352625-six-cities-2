import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const accommodations = [
  {
    description: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    image: `img/apartment-01.jpg`,
    width: `93%`,
  },
  {
    description: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    image: `img/room.jpg`,
    width: `80%`,
  },
  {
    description: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    image: `img/apartment-02.jpg`,
    width: `80%`,
  },
  {
    description: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    image: `img/apartment-03.jpg`,
    width: `100%`,
  },
  {
    description: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    image: `img/room.jpg`,
    width: `80%`,
  },
];

const descriptions = accommodations.map((it) => it.description);

const init = () => {

  ReactDOM.render(
      <App descriptions={descriptions}
      />,
      document.querySelector(`#root`)
  );
};

init();
