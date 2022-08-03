import React, { Component } from "react";
import Section from "./Section/Section";
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";
import Filter from './Filter/Filter'


export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter:'',
  }
  
  formSubmitHandler = (data) => {
    this.setState(prevState => {
      return {
        contacts:[ ...prevState.contacts, data]
      }
    });
    // console.log(data);
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };

  deleteContact = (contactId) => {
     this.setState(prevState=>({contacts: prevState.contacts.filter(contact=>contact.id !== contactId)}))
   }

  render() {

    const filteredContacts = this.state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));

    console.log(this.state.contacts);
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={ this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter filter={this.state.filter} onChange={this.changeFilter} />
          <Contacts contacts={filteredContacts} onDeleteContact={this.deleteContact} />
        </Section>
      </>
    );
  }
};
