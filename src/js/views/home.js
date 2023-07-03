import React, { useEffect, useContext } from "react";
import { CardCharacter } from "../component/CardCharacter.jsx";
import { CardPlanet } from "../component/CardPlanet.jsx";
import { CardVehicle } from "../component/CardVehicle.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5 marginSpecific mainContainer ">
      <h1 className="text-danger">Characters</h1>

      <div className="carousel d-flex">
        {store.characters.map((character) => (
          <CardCharacter item={character} key={character.uid} />
        ))}
      </div>
      <h1 className="text-danger mt-5">Planets</h1>
      <div className="carousel d-flex">
        {store.planets.map((planet) => (
          <CardPlanet item={planet} key={planet.uid} />
        ))}
      </div>
      <h1 className="text-danger mt-5">Vehicles</h1>

      <div className="carousel d-flex">
        {store.vehicles.map((vehicle) => (
          <CardVehicle item={vehicle} key={vehicle.uid} />
        ))}
      </div>
    </div>
  );
};