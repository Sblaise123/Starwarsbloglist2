import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Character = () => {
  const params = useParams();
  const [character, setCharacter] = useState({});
  const { store, actions } = useContext(Context);
  function Details() {
    const characterDetails = store.characters.find(
      (character) => character.uid == params.id
    );
    setCharacter(characterDetails);
  }
  useEffect(() => {
    Details();
  }, [store.characters]);

  return (
    <div className="mainContainer marginSpecific ">
      <div className="d-flex ">
        <div className="">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${character?.uid}.jpg`}
            className="principalImage"
            alt={character?.properties?.name}
          />
        </div>
        <div className="ps-3 border-start border-3 border-danger mainContainer ">
          <h1 className="text-light ">{character?.properties?.name}</h1>
          <p className="text-white-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            urna quis velit dapibus blandit. Aenean lectus nibh, ultricies eu
            commodo sit amet, maximus id ante. Aenean metus nibh, luctus a nulla
            vitae, efficitur accumsan nisi. Pellentesque convallis lorem ac
            ligula imperdiet, at sodales sapien rutrum. Cras vitae felis id
            mauris semper ullamcorper eu non metus. Etiam iaculis tempor leo, in
            gravida dolor varius ac.
          </p>
        </div>
      </div>
      <div className="d-flex text-light mt-3">
        <div className="flex-grow-1">
          <strong>Birthday</strong>
          <p>{character?.properties?.birth_year}</p>
        </div>
        <div className="flex-grow-1 border-start ps-2 border-2 border-danger">
          <strong>Gender</strong>
          <p> {character?.properties?.gender} </p>
        </div>
        <div className="flex-grow-1 border-start ps-2 border-2 border-danger">
          <strong>Height</strong>
          <p> {character?.properties?.height} Cm</p>
        </div>
        <div className="flex-grow-1 border-start ps-2 border-2 border-danger">
          <strong>Mass</strong>
          <p> {character?.properties?.mass} Kg </p>
        </div>
        <div className="flex-grow-1 border-start ps-2 border-2 border-danger">
          <strong>Skin Color</strong>
          <p> {character?.properties?.skin_color} </p>
        </div>
        <div className="flex-grow-1 border-start ps-2 border-2 border-danger">
          <strong>Hair Color</strong>
          <p>{character?.properties?.hair_color} </p>
        </div>
        <div className="flex-grow-1 border-start ps-2 border-2 border-danger">
          <strong>Eye Color</strong>
          <p>{character?.properties?.eye_color}</p>
        </div>
      </div>
    </div>
  );
};