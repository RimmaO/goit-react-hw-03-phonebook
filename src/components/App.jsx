import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Toaster, toast } from 'react-hot-toast';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData) this.setState({ contacts: JSON.parse(localData) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    // for hot react notification
    if (prevState.contacts.length < this.state.contacts.length)
      toast.success('Create new contact');
    if (prevState.contacts.length > this.state.contacts.length)
      toast.error('Delete contact');
  }

  createContact = data => {
    const newContact = { ...data, id: nanoid() };
    console.log(newContact);

    this.state.contacts.find(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  handleChangeFilter = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  getFilterContacts = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Toaster />
        <Section title="Phonebook">
          <ContactForm createContact={this.createContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} handleChangeFilter={this.handleChangeFilter} />
          <ContactList
            contacts={this.getFilterContacts()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
