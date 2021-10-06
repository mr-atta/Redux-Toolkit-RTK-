import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [{ name: "Picatchu" }],
  reducers: {
    add(state, action) {
      state.push({ name: action.payload });
    },
    remove(state, action) {
      return state.filter((pokemon) => pokemon.name !== action.payload);
    },
  },
});

export const { add, remove } = pokemonSlice.actions;

export const get = () => async (dispatch) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokemons = await response.json();
  pokemons.results.forEach((pokemon) => dispatch(add(pokemon.name)));
};

export default pokemonSlice.reducer;
