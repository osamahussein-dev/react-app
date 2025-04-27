import React from "react";
import ContactItem from "./contactItem";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <ContactItem
              key={index}
              contact={contact}
              deleteContact={() => deleteContact(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
