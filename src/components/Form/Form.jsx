import React, { Component } from "react";

class Form extends Component{
    state = {
        name:''
    }

    handlerNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handlerSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state);
        this.props.onSubmit(this.state)
this.resetForm()
}
    
    resetForm = () => {
        this.setState({name:''})
    }
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
            <label htmlFor="number">Name 
              <input value={this.state.name} onChange={this.handlerNameChange}
                type="text"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
/>
            </label>
            <button type="submit">Add contact</button>
          </form>
        )
    }
}

export default Form