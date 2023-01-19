import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactListItem } from '../ContactListItem';
import { Contacts } from './ContactList.styled';
import { Notification } from 'components/Notification';

export function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Contacts>
      {contacts.length ? (
        contacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))
      ) : (
        <Notification />
      )}
    </Contacts>
  );
}
