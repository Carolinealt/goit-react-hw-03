import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";

const contactData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  localStorage.clear();
  const localDataContacts = (contactData) => {
    const unparseData = localStorage.getItem("contacts");
    return unparseData !== "undefined" ? JSON.parse(unparseData) : contactData;
  };

  const [contactDataValues, setContactDataValues] = useState(() =>
    localDataContacts(contactData)
  );

  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contactDataValues));
  }, [contactDataValues]);

  const handleFilter = (e) => {
    setFilterValue(e.target.value);
  };

  const submitFormData = ({ name, number }) => {
    setContactDataValues((prevContact) => {
      return [...prevContact, { id: nanoid(), name, number }];
    });
  };

  const deleteFormContact = (id) => {
    setContactDataValues((prevValues) => {
      return prevValues.filter((contact) => contact.id !== id);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={submitFormData} />
      <SearchBox onChange={handleFilter} value={filterValue} />
      <ContactList
        contacts={contactDataValues}
        filterValue={filterValue}
        onDelete={deleteFormContact}
      />
    </div>
  );
}

export default App;
