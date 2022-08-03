import styled from "styled-components";
import PropTypes from 'prop-types';

const Section = ({title, children})=>{
    return (
        <section>
            <StyledTitle>{title}</StyledTitle>
            { children}
        </section>
    )
}

export default Section

const StyledTitle = styled.h2`
`

Section.propTypes = {
    title:PropTypes.string.isRequired
}