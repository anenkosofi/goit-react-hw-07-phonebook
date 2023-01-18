import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box.styled';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { PhonebookBox, ContactBox } from './App.styled';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

export function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Box>
      <GlobalStyle />
      <PhonebookBox>
        <h1>Phonebook</h1>
        <ContactForm />
      </PhonebookBox>
      <ContactBox>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </ContactBox>
    </Box>
  );
}
