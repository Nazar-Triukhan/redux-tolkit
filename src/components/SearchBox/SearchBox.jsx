import styles from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchValue } from "../../redux/contactSlice";

function SearchBox() {

  const dispatch = useDispatch()

  const searchValue = useSelector((state) => state.contacts.searchValue)

  return (
    <div className={styles.search}>
      <label className={styles.label}>
        Search contacts
        <input
          className={styles.input}
          type="text"
          value={searchValue}
          onChange={(event) => dispatch(changeSearchValue(event.target.value))}
          placeholder="Enter contact name"
        />
      </label>
    </div>
  );
}

export default SearchBox;