import React from "react";

const ContactItem = ({ contact }) => {
  return (
    <ol>
      <li>
        <strong>{contact.name}</strong> - {contact.email}
      </li>
    </ol>
  );
};

export default ContactItem;
