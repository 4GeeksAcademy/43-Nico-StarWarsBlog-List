import React, { useState, useEffect } from "react";
import axios from "axios";

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/planets/");
        setPlanets(response.data.results);
      } catch (error) {
        console.log("Error al cargar los planetas", error);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <div>
      <h2>Planetas</h2>
      <div className="card-container">
        {planets.map((planet, index) => (
          <div className="card card-item" key={`planet-${index}`}>
            <h3>{planet.name}</h3>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
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

export default Planets;
