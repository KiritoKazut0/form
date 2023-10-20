import styled from "styled-components";

function Title ({value}){
    return (
        <>
        <StyledTitle> {value} </StyledTitle>
        </>
    );
}

const StyledTitle = styled.span `
    display: block;
    margin-top: 40px;
    font-size: 20px;
    color:  black;
    font-family: 'Playfair Display', serif;
    margin-bottom: 30px;
    text-align: center;
`;

export default Title;