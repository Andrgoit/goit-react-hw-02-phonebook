import React, { Component } from "react";
import Section from "./Section/Section";
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";


export class App extends Component {
  state = {
  contacts: [],
  
  }
  
  formSubmitHandler = (data) => {
    this.setState(prevState => {
      return {
        contacts:[ ...prevState.contacts, data]
      }
    });
    // console.log(data);
  };



  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <Section title="Phonebook">
          <Form onSubmit={ this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={this.state.contacts } />
        </Section>
      </div>
    );
  }
};
