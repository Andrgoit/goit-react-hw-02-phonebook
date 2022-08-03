import styled from "styled-components"
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'



const Contacts = ({ contacts, onDeleteContact }) => {
    
    return (
        <StyledContactList>
            {contacts.map(({id, name, number}) => {
                return <StyledContactItem key={id || nanoid()}>{name}: {number}
                    <StyledButtonDelite onClick={()=>onDeleteContact(id)}>Del</StyledButtonDelite></StyledContactItem>
            })}
        </StyledContactList >
   )
}

const StyledContactList = styled.ul`
width:300px;`;

const StyledContactItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
`

const StyledButtonDelite = styled.button`

margin-left:20px;`

Contacts.propTypes = {
    contacts: PropTypes.array
}

export default Contacts