import { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../../redux/contactSlice";

function ContactForm({
  editingContact,
  onCancelEdit,
}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
  const dispatch = useDispatch()

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setNumber(editingContact.number);
    } else {
      setName("");
      setNumber("");
    }
  }, [editingContact]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || number.trim() === "") {
      alert("Заповніть усі поля!");
      return;
    }

    if (editingContact) {
      const updatedContact = {
        ...editingContact,
        name: name.trim(),
        number: number.trim(),
      };

      dispatch(updateContact(updatedContact))
    } else {
      const newContact = {
        id: Date.now().toString(),
        name: name.trim(),
        number: number.trim(),
      };

     
      dispatch(addContact(newContact))
    }

    setName("");
    setNumber("");
  };

  const handleCancel = () => {
    setName("");
    setNumber("");
    onCancelEdit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter name"
        />
      </label>

      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          placeholder="Enter phone number"
        />
      </label>

      <button className={styles.button} type="submit">
        {editingContact ? "Save changes" : "Add contact"}
      </button>

      {editingContact && (
        <button
          className={styles.cancelButton}
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default ContactForm;