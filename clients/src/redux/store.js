// 48
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux.js";
// 73
import userReducer from "./userRedux.js";

// 83
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
  
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

// 84
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

// // 49
// export default configureStore({
//     reducer: {
//         cart: cartReducer,
//         // 74
//         user: userReducer
//     }
// })