import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContactAction,
  removeContactAction,
  setQueryAction,
} from "../contacts/contactsActions";

const contactsReducer = createReducer([], (builder) => {
  builder
    .addCase(addContactAction, (state, action) => {
      state.unshift(action.payload);
    })
    .addCase(removeContactAction, (state, action) => {
      return state.filter((contact) => contact.id !== action.payload); // Use correct filter condition
    });
});

const queryReducer = createReducer("", (builder) => {
  builder.addCase(setQueryAction, (_, action) => action.payload);
});

export default combineReducers({
  items: contactsReducer,
  query: queryReducer,
});
