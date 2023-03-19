import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/PokemonReducer";
import axios from "axios";

const appContext = createContext();

const initialVal = {
  allpokemonDta: [],
  singlePokemonData: [],
};

const PokemonDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialVal);

  const callApiData = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=20`);
    dispatch({ type: "GET_API_DATA", payload: res.data.results });
  };

  const getUrl = (url) => {
    const getPokemonData = async () => {
      const res = await axios.get(url);
      dispatch({
        type: "GET_POKEMON_DATA",
        payload: res.data,
      });
    };
    getPokemonData();
  };

  useEffect(() => {
    callApiData();
  }, []);
  return (
    <appContext.Provider value={{ ...state, getUrl }}>
      {children}
    </appContext.Provider>
  );
};

const useContextPokemonData = () => {
  return useContext(appContext);
};

export { PokemonDataProvider, useContextPokemonData };
