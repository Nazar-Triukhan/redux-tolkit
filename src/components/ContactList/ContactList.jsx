import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactList.module.css";

function ContactList({
  contacts,
  onEditContact,
}) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onEditContact={onEditContact}
        />
      ))}
    </ul>
  );
}

export default ContactList;