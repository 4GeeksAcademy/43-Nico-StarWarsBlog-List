import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Characters } from "../views/Characters";
import { Planets } from "../views/Planets";

export const Navbar = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (name) => {
    setFavorites((prevFavorites) => [...prevFavorites, name]);
  };

  return (
    <nav className="navbar navbar-light mb-3">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
          style={{ width: "30vh" }}
          alt="Star Wars Logo"
        />
      </Link>
      <div className="ml-auto">
	  <div className="dropdown">  
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {favorites.map((favorite, index) => (
              <li key={index}>
                <span className="dropdown-item-text">{favorite}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
