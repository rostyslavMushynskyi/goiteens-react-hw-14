import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contactsReducer";

const persistConfig = {
  key: "contacts",
  storage,
  whiteList: ["items"],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

export const persistor = persistStore(store);
