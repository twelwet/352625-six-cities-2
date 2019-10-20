import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const accommodations = [
  {
    id: 1,
    description: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    image: `img/apartment-01.jpg`,
    width: `93%`,
  },
  {
    id: 2,
    description: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    image: `img/room.jpg`,
    width: `80%`,
  },
  {
    id: 3,
    description: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    image: `img/apartment-02.jpg`,
    width: `80%`,
  },
  {
    id: 4,
    description: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    image: `img/apartment-03.jpg`,
    width: `100%`,
  },
  {
    id: 5,
    description: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    image: `img/room.jpg`,
    width: `80%`,
  },
];

const init = () => {

  ReactDOM.render(
      <App accommodations={accommodations}
      />,
      document.querySelector(`#root`)
  );
};

init();
