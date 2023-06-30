import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
        <span className="navbar-brand marginNavbar h1">
          <img
            className="StarWarsLogo"
            src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"
          ></img>
        </span>
      </Link>
      <div className="dropdown marginNavbar">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites {store.favorites.length}
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {!(store.favorites.length == 0) ? (
            store.favorites.map((favorite) => (
              <li key={favorite._id} className="d-flex flex-nowrap p-2">
                <span className="dropdown-item">
                  {favorite.properties.name}
                </span>
                <button
                  className="btn-dropdown"
                  onClick={(e) => actions.getUpdateFavorite(favorite)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))
          ) : (
            <li className="text-center">No favorites</li>
          )}
        </ul>
      </div>
    </nav>
  );
};