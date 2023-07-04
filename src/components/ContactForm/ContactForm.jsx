import PropTypes from 'prop-types';

import { Component } from 'react';
import { Button, Input, Text, Wrap } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.createContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Wrap>
          <Text>Name</Text>
          <label>
            <Input
              onChange={this.handleChange}
              value={name}
              type="text"
              name="name"
              placeholder="Enter a contact name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces.For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </Wrap>
        <Wrap>
          <Text>Number</Text>
          <label>
            <Input
              onChange={this.handleChange}
              value={number}
              type="tel"
              name="number"
              placeholder="Enter a contact number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </Wrap>

        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = { createContact: PropTypes.func.isRequired };
