import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();

        const characters1 = data.results.map((character, index) => ({
          ...character,
          uid: index + 1,
        }));

        setCharacters(characters1);
      } catch (error) {
        console.log("Error al cargar los personajes", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div id="Character">
      <h2>Personajes</h2>
      <div className="card-container">
        {characters.map((character, index) => (
          <div className="card card-item" key={`character-${index}`}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} />
            <h3>{character.name}</h3>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <div>
              <a href={`/characters/${character.uid}`} className="btn btn-primary"  style={{marginRight: '40px'}}>Learn more!</a>
                <i className="fa-regular fa-heart btn"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;


