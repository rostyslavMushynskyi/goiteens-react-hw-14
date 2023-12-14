export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.query;

export const selectFilteredContacts = (state) =>
  getContacts(state).filter((contact) =>
    contact.name.toLowerCase().includes(getFilter(state).toLowerCase())
  );
