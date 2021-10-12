import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import middleware from "./middleware";
import contactsReducer from "./contacts/contacts-reducer";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
