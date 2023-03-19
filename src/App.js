import React, { Suspense, lazy } from "react";
import { useContextPokemonData } from "./contextApi/pokemonApi";
import PokemonCard from "./components/PokemonCard";
const SingleDataShow = lazy(() => import("./components/SingleDataShow"));
function App() {
  const { allpokemonDta } = useContextPokemonData();

  if (!allpokemonDta) {
    return null;
  }

  return (
    <div className="App">
      <h2>
        <Suspense fallback={<div className="text-light">LOADING...</div>}>
          <SingleDataShow />
        </Suspense>
      </h2>
      {allpokemonDta.map((pokemonName, index) => (
        <PokemonCard
          name={pokemonName.name}
          url={pokemonName.url}
          key={index}
        />
      ))}
    </div>
  );
}

export default App;
