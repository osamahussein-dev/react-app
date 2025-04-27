import { useState, useEffect } from "react";
import ContactForm from "./components/contactForm";
import ContactList from "./components/contactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  useEffect(() => {
    console.log(contacts);
    if (contacts.length > 0) {
      console.log(`New contact added: ${contacts[contacts.length - 1].name}`);
      console.log(`Total contacts now: ${contacts.length}`);
    }
  }, [contacts]);

  return (
    <div className="app-container">
      <h1>Contact Manager App</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
