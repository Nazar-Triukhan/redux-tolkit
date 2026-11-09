import styles from "./ContactItem.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

function ContactItem({
  contact,
  onEditContact,
}) {


  const dispatch = useDispatch()
  
  return (
    <li className={styles.item}>
      <div>
        <p className={styles.name}>{contact.name}</p>
        <p className={styles.number}>{contact.number}</p>
      </div>

      <div>
        <button
          className={styles.button}
          type="button"
          onClick={() => onEditContact(contact)}
        >
          Edit
        </button>

        <button
          className={styles.button}
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ContactItem;