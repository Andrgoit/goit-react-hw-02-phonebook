import styled from "styled-components";
import PropTypes from 'prop-types';

const Section = ({title, children})=>{
    return (
        <StyledSection>
            <StyledTitle>{title}</StyledTitle>
            { children}
        </StyledSection>
    )
}

export default Section

const StyledSection = styled.section`
width:500px`

const StyledTitle = styled.h2`
`

Section.propTypes = {
    title:PropTypes.string.isRequired
}