import React from "react";
import ContactItem from "./contactItem";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <ContactItem key={index} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
