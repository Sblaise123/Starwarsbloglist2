import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";



export const Planet = () => {
    const params = useParams()
    const [planet, setPlanet]= useState({})
    const {store, actions} = useContext(Context)
function Details (){
    const planetDetails =  store.planets.find(planet => planet.uid == params.id)
        setPlanet(planetDetails)
    
}
useEffect(()=>{
    Details()
},[store.planets])

    return (
        <div className="mainContainer marginSpecific ">
      <div className="d-flex ">
        <div className="">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${planet?.uid}.jpg`}
            className="principalImage"
            alt={planet?.properties?.name}
          />
        </div>
        <div className="ps-3 border-start border-3 border-danger mainContainer ">
          <h1 className="text-light ">{planet?.properties?.name}</h1>
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
        <div className="flex-grow-1 ps-2"> <strong>Diameter</strong> 
            <p>{planet?.properties?.diameter}</p>  </div>
      <div className="flex-grow-1 ps-2 border-start border-2 border-danger">
          <strong>Rotation Period</strong>
          <p>{planet?.properties?.rotation_period}</p>
        </div>
        <div className="flex-grow-1 ps-2 border-start border-2 border-danger">
          <strong>Orbital Period</strong>
          <p>{planet?.properties?.orbital_period}
  </p>      </div>
        <div className="flex-grow-1 ps-2 border-start border-2 border-danger">
          <strong>Gravity</strong>
          <p>{planet?.properties?.gravity} Meters
      </p>  </div>
        <div className="flex-grow-1 ps-2 border-start border-2 border-danger">
          <strong>Population</strong>
          <p>{planet?.properties?.population}</p>
        </div>
        <div className="flex-grow-1 ps-2 border-start border-2 border-danger">
          <strong>Climate</strong>
          <p>{planet?.properties?.climate}</p>
        </div>
        <div className="flex-grow-1 ps-2 border-start border-2 border-danger">
          <strong>Terrain</strong>
          <p>{planet?.properties?.terrain}</p>
        </div>
        <div className="flex-grow-1 ps-2 border-start border-2 border-danger">
          <strong>Surface Water</strong>
          <p>{planet?.properties?.surface_water}</p>
        </div>
        
      </div>
    </div>
    )
}