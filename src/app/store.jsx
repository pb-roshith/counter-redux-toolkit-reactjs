import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feature/counter/counterslice'

export const store = configureStore({
    reducer:{
        counter : counterReducer,
    }
});