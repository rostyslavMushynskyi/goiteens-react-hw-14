import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactsList from "./components/ContactList/ContactList.jsx";
import Filter from "./components/Filter/Filter.jsx";

import {
  addContactAction,
  removeContactAction,
  setQueryAction,
} from "./redux/contacts/contactsActions.js";

import {
  getContacts,
  getFilter,
  selectFilteredContacts,
} from "./redux/contacts/contactsSelectors.js";

function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  function addContact(name, number) {
    const isDuplicateName = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      alert("Duplicate contact");
      return true;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContactAction(newContact));
  }

  function deleteContact(id) {
    dispatch(removeContactAction(id));
  }

  const setFilter = (newFilter) => {
    dispatch(setQueryAction(newFilter));
  };

  return (
    <Container>
      <Typography variant="h3">Phonebook</Typography>
      <ContactForm addContact={addContact} />
      <Filter filter={filter} setFilter={setFilter} />
      <ContactsList
        contacts={filteredContacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </Container>
  );
}

export default App;
