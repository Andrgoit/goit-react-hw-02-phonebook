import styled from "styled-components"
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'



const Contacts = ({ contacts }) => {
    
    return (
        <StyledContactList>
            {contacts.map(contact => {
                return <li key={nanoid()}>{contact.name}</li>
            })}
        </StyledContactList >
   )
}

const StyledContactList = styled.ul`
margin:0;
padding:0;
`;

Contacts.propTypes = {
    contacts: PropTypes.array
}

export default Contacts