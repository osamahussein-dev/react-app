import React from "react";
import "../css/contactItem.css";

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <li>
      <p>
        {contact.name} - {contact.email}
      </p>
      <button onClick={deleteContact}>Delete</button>
    </li>
  );
};

export default ContactItem;
