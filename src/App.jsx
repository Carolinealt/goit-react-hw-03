import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const contactData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contactDataValues, setContactDataValues] = useState(contactData);
  const [filterValue, setFilterValue] = useState("");
  const handleFilter = (e) => {
    setFilterValue(e.target.value);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox onChange={handleFilter} value={filterValue} />
      <ContactList contacts={contactDataValues} filterValue={filterValue} />
    </div>
  );
}

export default App;
