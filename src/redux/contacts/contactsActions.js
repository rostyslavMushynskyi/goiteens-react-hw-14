import { createAction } from "@reduxjs/toolkit";

export const addContactAction = createAction("ADD_CONTACTS");
export const removeContactAction = createAction("REMOVE_CONTACTS");

export const setQueryAction = createAction("SET_QUERY_CONTACTS");
