import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { HiOutlinePhone, HiOutlineUserCircle } from 'react-icons/hi';
import { Contact, ContactWrapper, Button } from './ContactListItem.styled';
import { deleteContact } from 'redux/operations';

export function ContactListItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <Contact>
      <ContactWrapper>
        <p>
          <HiOutlineUserCircle size={20} />
          <span>{name}</span>
        </p>
        <p>
          <HiOutlinePhone size={20} />
          <span>{number}</span>
        </p>
      </ContactWrapper>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Contact>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
