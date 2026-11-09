import { useState } from "react";
import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { useSelector, useDispatch } from "react-redux";



function App() {
  const contacts = useSelector((state) => state.contacts.contacts)
  const searchValue = useSelector((state) => state.contacts.searchValue)
  const [editingContact, setEditingContact] = useState(null);

  const editContact = (contact) => {
    setEditingContact(contact);
  };

  const cancelEdit = () => {
    setEditingContact(null);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="app">
      <h1>Phonebook</h1>

      <ContactForm
        editingContact={editingContact}
        onCancelEdit={cancelEdit}
      />

      <SearchBox  />

      <p>Кількість контактів: {contacts.length}</p>

      <ContactList
        contacts={filteredContacts}
        onEditContact={editContact}
      />
    </div>
  );
}

export default App;
