import styled from "styled-components"
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'



const Contacts = ({ contacts }) => {
    
    return (
        <StyledContactList>
            {contacts.map(contact => {
                return <li key={nanoid()}>{contact.name}: { contact.number}</li>
            })}
        </StyledContactList >
   )
}

const StyledContactList = styled.ul``;

Contacts.propTypes = {
    contacts: PropTypes.array
}

export default Contacts