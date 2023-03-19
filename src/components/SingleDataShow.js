import React from "react";
import { useContextPokemonData } from "../contextApi/pokemonApi";

const SingleDataShow = () => {
  const { singlePokemonData } = useContextPokemonData();

  if (singlePokemonData.length === 0) {
    return null;
  }

  return singlePokemonData ? (
    <div className="mainDiv grow">
      <div>
        <img
          alt={singlePokemonData.name}
          src={singlePokemonData.sprites?.front_default}
          style={{ width: "150px" }}
        />
        <div style={{ textAlign: "left" }}>
          <h3>Name: {singlePokemonData.name.toUpperCase()}</h3>
          <p>
            <span style={{ fontWeight: "bold" }}>Weight:</span>
            {singlePokemonData.weight} Kg
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Weight:</span>
            {singlePokemonData.weight} Kg
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Type: </span>
            {singlePokemonData.types && singlePokemonData.types[0].type.name}
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default SingleDataShow;
