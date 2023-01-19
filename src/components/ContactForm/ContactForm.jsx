import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormForAddingContacts,
  FormControl,
  Label,
  Input,
  Error,
  Button,
} from './ContactForm.styled';

export function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      ...values,
    };

    if (
      contacts.find(
        ({ name }) =>
          name.toLowerCase() === newContact.name.trim().toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in your contacts.`);
      resetForm();
      return;
    }
    dispatch(addContact(newContact));
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      )
      .required('This field is required'),
    number: Yup.string()
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
        'Phone number must be digits'
      )
      .required('This field is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormForAddingContacts autoComplete="off">
        <FormControl>
          <Input
            id="name"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder=" "
          />
          <Label htmlFor="name">Name</Label>
          <Error component="div" name="name" />
        </FormControl>
        <FormControl>
          <Input
            id="number"
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder=" "
          />
          <Label htmlFor="number">Number</Label>
          <Error component="div" name="number" />
        </FormControl>
        <Button type="submit">Add contact</Button>
      </FormForAddingContacts>
    </Formik>
  );
}
