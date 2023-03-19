const reducer = (state, action) => {
  if (action.type === "GET_API_DATA") {
    return {
      ...state,
      allpokemonDta: action.payload,
    };
  }

  if (action.type === "GET_POKEMON_DATA") {
    return {
      ...state,
      singlePokemonData: action.payload,
    };
  }
};

export default reducer;
