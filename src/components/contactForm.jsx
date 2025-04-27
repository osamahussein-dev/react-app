import React, { useState } from "react";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addContactSubmit = (e) => {
    e.preventDefault();

    let newContact = {
      name: name,
      email: email,
    };

    addContact(newContact);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={addContactSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
