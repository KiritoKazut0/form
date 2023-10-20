import styled from "styled-components";

function Label ({value, primary}){
    return (
        <>
            <StyledLabel primary={primary}> {value} </StyledLabel>
        </>
    );
}

const StyledLabel = styled.label `
    color: black;
    font-size: 14px;
    margin-bottom: 15px;
    margin-top: ${props => props.primary? "12px": "0px"} ;
    font-family: 'Playfair Display', serif;
    
`;

export default Label;