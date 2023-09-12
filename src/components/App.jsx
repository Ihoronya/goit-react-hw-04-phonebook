import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    if (checkIsDuplicate(newContact)) return false;
    setContacts((prevContacts) => [...prevContacts, newContact]);
    return true;
  };

  const checkIsDuplicate = (newContact) => {
    const isExistContact = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    isExistContact && alert(`${newContact.name} is already in contacts`);

    return isExistContact;
  };

  const handleRemoveContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleFilterChange = (filter) => setFilter(filter);

  const getVisibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <ContactForm onAdd={handleAddContact} />

      <ContactList contacts={visibleContacts} onRemove={handleRemoveContact}>
        <Filter filter={filter} onChange={handleFilterChange} />
      </ContactList>
    </>
  );
};

export default App;
