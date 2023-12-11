import { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactsList from "./components/ContactList/ContactList.jsx";
import Filter from "./components/Filter/Filter.jsx";

function App() {
  const newContact = {
    id: nanoid(),
    name,
    number,
  };

  function addContact() {}

  function deleteContact() {}

  return (
    <Container>
      <Typography variant="h3">Phonebook</Typography>
      <ContactForm addContact={addContact} />
      <Filter filter={filter} setFilter={setFilter} />
      <ContactsList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </Container>
  );
}

export default App;
