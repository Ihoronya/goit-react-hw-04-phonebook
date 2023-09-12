import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onRemove, children }) => {
  const handleRemoveContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    onRemove(id);

    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div className={s.contacts}>
      <h2>Contacts</h2>
      {children}
      <ul>
        {contacts.length === 0 ? (
          <p>No contacts yet&#128521;</p>
        ) : (
          <>
            {contacts.map((contact) => {
              return (
                <li key={contact.id}>
                  <p>
                    <span>{contact.name} : </span>
                    {contact.number}
                  </p>
                  <button onClick={() => handleRemoveContact(contact.id)}>
                    🗑
                  </button>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ContactList;
