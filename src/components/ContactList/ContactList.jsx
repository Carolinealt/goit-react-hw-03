import clsx from "clsx";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ contacts, filterValue }) => {
  
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <>
      <ul className={clsx(css.list)}>
        {filteredContacts.map((contact) => {
          return (
            <li key={contact.id} className={clsx(css.listItem)}>
              <Contact name={contact.name} number={contact.number} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
