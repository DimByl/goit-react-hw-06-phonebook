import { useSelector } from 'react-redux';
import { getContactsToShow } from '../../redux/contacts/contacts-selectors';
import ContactItem from "./ContactItem";
import styles from "./ContactList.module.scss";

const ContactList = () => {

  const contacts = useSelector(getContactsToShow);

  return contacts.length === 0 ? (
    <p className={styles.notification}>Contact book is empty</p>
  ) : (
    <ul className={styles.ContactList}>
      {contacts.map((contact) => {
        const { id } = contact;

        return (
          <ContactItem
            key={id}
            contact={contact}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;
