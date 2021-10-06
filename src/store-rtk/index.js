import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import pokemonSlice from "./pokemon.store";

const reducers = combineReducers({ pokemon: pokemonSlice });

const store = configureStore({ reducer: reducers });

export default store;
