import clsx from "clsx";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ contacts, filterValue = "", onDelete }) => {
  const filtrating = (contacts) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };

  const filteredContacts = filterValue !== "" ? filtrating(contacts) : contacts;
  if (filteredContacts === null) {
    return;
  }
  console.log("filteredContacts :>> ", filteredContacts);
  return (
    <>
      <ul className={clsx(css.list)}>
        {filteredContacts.map((contact) => {
          return (
            <li key={contact.id} className={clsx(css.listItem)}>
              <Contact
                name={contact.name}
                number={contact.number}
                onDelete={onDelete}
                id={contact.id}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
