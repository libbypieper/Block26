import './App.css'
import { useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from "./components/SelectedContact";

const App = ()=> {
  const [contacts, setContacts] = useState(dummyContacts)
  console.log("Contacts: ", contacts)
}

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
      <ContactList />
      )}
    </>
  );
}



