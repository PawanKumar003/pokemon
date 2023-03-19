import React from "react";
import { useContextPokemonData } from "../contextApi/pokemonApi";

const PokemonCard = (props) => {
  const { getUrl } = useContextPokemonData();
  const { name, url } = props;

  return (
    <div className="mainDiv grow">
      <div>
        <h3 className="title-size" onClick={() => getUrl(url)}>
          {name.toUpperCase()}
        </h3>
      </div>
    </div>
  );
};

export default PokemonCard;
