import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem';
import { Contacts } from './ContactList.styled';
import { Notification } from 'components/Notification';
import { getContacts, getFilter } from 'redux/selectors';

const getFilteredContacts = (contacts, filter) =>
  contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <Contacts>
      {filteredContacts.length ? (
        filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))
      ) : (
        <Notification />
      )}
    </Contacts>
  );
}
