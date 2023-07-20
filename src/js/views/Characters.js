import React, { useState, useEffect } from "react";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/people/");
        setCharacters(response.data.results);
      } catch (error) {
        console.log("Error al cargar los personajes", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Personajes</h2>
      <div className="card-container">
        {characters.map((character, index) => (
          <div className="card card-item" key={`character-${index}`}>
            <h3>{character.name}</h3>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <div>
              <button className="btn btn-primary">Learn more!</button>
              <button className="btn"><i class="fa-regular fa-heart"></i></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
