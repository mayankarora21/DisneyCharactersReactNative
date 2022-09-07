import { configureStore } from "@reduxjs/toolkit";
import characterSliceReducer from './character-slice';

const store = configureStore({
    reducer: characterSliceReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})

export default store;