import { useSelector } from "react-redux";
import {selectFilter, selectFilteredContacts,} from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectLoading } from "../../redux/contacts/selectors";

export const ContactList = () => {
  const filteredList = useSelector(selectFilteredContacts);
  const startFilter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {!startFilter && filteredList.length === 0 && !isLoading && (
        <p className={styles.noContactsMess}>There are no contacts yet!</p>
      )}
      {startFilter && filteredList.length === 0 ? (
        <p className={styles.noContactsMess}>
          There are no contacts according to your search...
        </p>
      ) : (
        <ul className={styles.contactList}>
          {filteredList.map((item) => (
            <Contact
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
            />
          ))}
        </ul>
      )}
    </>
  );
};