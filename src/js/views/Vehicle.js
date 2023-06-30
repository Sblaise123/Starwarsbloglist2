import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Vehicle = () => {
  const params = useParams();
  const [vehicle, setVehicle] = useState({});
  const { store, actions } = useContext(Context);
  function Details() {
    const vehicleDetails = store.vehicles.find(
      (vehicle) => vehicle.uid == params.id
    );
    setVehicle(vehicleDetails);
  }
  useEffect(() => {
    Details();
  }, [store.vehicles]);

  return (
    <div className="mainContainer marginSpecific ">
      <div className="d-flex ">
        <div className="">
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle?.uid}.jpg`}
            className="principalImage"
            alt={vehicle?.properties?.name}
          />
        </div>
        <div className="ps-3 border-start border-3 border-danger mainContainer ">
          <h1 className="text-light ">{vehicle?.properties?.name}</h1>
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
        <div className="flex-grow-1 ps-2"> <strong>Model</strong> 
            <p>{vehicle?.properties?.model}</p>  </div>
      <div className="flex-grow-1 ps-2 border-start border-2 border-danger">
          <strong>Cost in Credits</strong>
          <p>{vehicle?.properties?.cost_in_credits}</p>
        </div>
        <div className="flex-grow-1 ps-2 border-start border-2 border-danger">
          <strong>Passengers</strong>
          <p>{vehicle?.properties?.passengers}
  </p>      </div>
        <div className="flex-grow-1 ps-2 border-start border-2 border-danger">
          <strong>Properties</strong>
          <p>{vehicle?.properties?.length} Meters
      </p>  </div>
        <div className="flex-grow-1 ps-2 border-start border-2 border-danger">
          <strong>Vehicle Class</strong>
          <p>{vehicle?.properties?.vehicle_class}</p>
        </div>
      </div>
    </div>
  );
};