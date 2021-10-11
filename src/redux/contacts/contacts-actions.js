import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const addNewContact = createAction(
  "contacts/addContact",
  (name, number) => ({
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  })
);
export const deleteContact = createAction("contacts/deleteContact");
export const changeFilter = createAction("contacts/changeFilter");
