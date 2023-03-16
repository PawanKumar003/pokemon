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
      {allpokemonDta.map((pokemonName, index) => (
        <PokemonCard
          name={pokemonName.name}
          url={pokemonName.url}
          key={index}
        />
      ))}
      <Suspense
        fallback={
          <div style={{ color: "#fff", fontSize: "2rem" }}>LOADING...</div>
        }
      >
        <SingleDataShow />
      </Suspense>
    </div>
  );
}

export default App;
