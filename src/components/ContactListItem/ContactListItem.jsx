import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Item, Span } from './ContactListItem.styled';

const ContactListItem = ({ name, number, deleteContact, id }) => {
  return (
    <Span>
      <Item key={id}>
        {name}: {number}
      </Item>
      <Button onClick={() => deleteContact(id)}>Delete</Button>
    </Span>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
