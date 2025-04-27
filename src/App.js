import { useState, useEffect } from "react";
import ContactForm from "./components/contactForm";
import ContactList from "./components/contactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    console.log(contacts);
    if (contacts.length > 0) {
      console.log(`New contact added: ${contacts[contacts.length - 1].name}`);
      console.log(`Total contacts now: ${contacts.length}`);
    }
  }, [contacts]);

  return (
    <div>
      <h1>Contact Manager App</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
