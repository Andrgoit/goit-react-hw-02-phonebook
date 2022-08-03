import React, { Component } from "react";
import styled from "styled-components"
import { nanoid } from 'nanoid'

class Form extends Component{
    state = {
        name: '',
        number: ''
    }

    nameInputId = nanoid();
    numberInpytId = nanoid();

    handlerNameChange = (event) => {
        this.setState({ [event.target.name]:event.target.value });
    };

    handlerSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state);
        this.props.onSubmit(this.state)
        this.resetForm()
}
    
    resetForm = () => {
        this.setState({name:'', number:''})
    }
    render() {
        return (
            
            <StyledForm onSubmit={this.handlerSubmit}>
                <label htmlFor={ this.nameInputId}>Name 
                    <input value={this.state.name} onChange={this.handlerNameChange}
                type="text"
                name="name"
                id={this.nameInputId }
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required/>
                </label>
                
                <label htmlFor={this.numberInpytId}>Number
                    <input value={this.state.number} onChange={this.handlerNameChange}
                        type="tel"
                        name="number"
                        id={this.numberInpytId}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
/></label>
            <StyledSubmitButton type="submit">Add contact</StyledSubmitButton>
                </StyledForm>
        
        )
    }
}

const StyledForm = styled.form`
padding-bottom: 30px;
display:flex;
flex-direction:column`

const StyledSubmitButton = styled.button`
max-width:100px;
margin-top: 30px;
`

export default Form