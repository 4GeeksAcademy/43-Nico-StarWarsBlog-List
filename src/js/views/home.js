import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Planets from "./Planets";
import Characters from "./Characters";

export const Home = () => (
  <div className="text-center mt-5">
    <Characters />
    <Planets />
  </div>
);

export default Home;
