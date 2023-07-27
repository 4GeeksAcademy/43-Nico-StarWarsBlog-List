// import React from "react";

// export const CharacterProfile = () => {
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/demo.css";

const PlanetProfile = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
        const data = await response.json();
        setPlanet(data);
      } catch (error) {
        console.log("Error al cargar el perfil del planeta", error);
      }
    };

    fetchPlanet();
  }, [id]);

  if (!planet) {
    return <div style={{ fontSize: "50px", color: "white" }}>Loading...</div>;
  }

  const {
    name,
    climate,
    population,
    terrain,
    diameter,
    gravity,
    orbital_period,
    rotation_period,
  } = planet;

  return (
    <div style={{ backgroundColor: "black", color: "white", marginBottom: "0", justifyContent: "center", textAlign: "center" }}>
      <div className="d-flex justify-content-center">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} style={{ padding: "0px 30px 30px 0px" }} />
        <div style={{ width: "50vh" }}>
          <h1>{name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit sapien, scelerisque ac risus eu, rhoncus mattis dui. Morbi in vestibulum
            purus. Duis hendrerit ut tortor eu placerat. Aenean dapibus facilisis euismod. Morbi consectetur eu eros vitae facilisis. Etiam placerat
            scelerisque tellus, vel accumsan augue. Ut in odio vel sem bibendum efficitur. Sed et lectus metus. Suspendisse at massa sodales velit
            consequat consectetur eu ut ante. Cras placerat pharetra nibh, ac tincidunt odio mollis id. Sed eu condimentum mi, ornare finibus ante.
            Maecenas convallis euismod condimentum. Quisque sodales lectus nisl, at tincidunt libero fringilla ut. Donec pretium odio non arcu scelerisque,
            sit amet elementum nibh aliquam. Sed eleifend nibh volutpat leo molestie laoreet. Proin ullamcorper varius metus id congue. Ut et mattis diam,
            quis sagittis neque. Pellentesque pharetra, dui ac luctus volutpat, orci nisl tincidunt urna, in blandit arcu eros eu nisi. Duis egestas sodales
            urna.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div style={{ color: "white", backgroundColor: "white", width: "130vh", height: "3px" }}></div>
      </div>
      <div className="info-container d-flex justify-content-center">
        <p>
          Climate:
          <br />
          {climate}
        </p>
        <div style={{ color: "white", backgroundColor: "white", height: "10vh", width: "2px" }}></div>
        <p>
          Population:
          <br />
          {population}
        </p>
        <div style={{ color: "white", backgroundColor: "white", height: "10vh", width: "2px" }}></div>
        <p>
          Terrain:
          <br />
          {terrain}
        </p>
        <div style={{ color: "white", backgroundColor: "white", height: "10vh", width: "2px" }}></div>
        <p>
          Diameter:
          <br />
          {diameter}
        </p>
        <div style={{ color: "white", backgroundColor: "white", height: "10vh", width: "2px" }}></div>
        <p>
          Gravity:
          <br />
          {gravity}
        </p>
        <div style={{ color: "white", backgroundColor: "white", height: "10vh", width: "2px" }}></div>
        <p>
          Orbital Period:
          <br />
          {orbital_period}
        </p>
        <div style={{ color: "white", backgroundColor: "white", height: "10vh", width: "2px" }}></div>
        <p>
          Rotation Period:
          <br />
          {rotation_period}
        </p>
      </div>
    </div>
  );
};

export default PlanetProfile;

