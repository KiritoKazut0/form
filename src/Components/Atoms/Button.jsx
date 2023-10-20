import styled from "styled-components";

function Button ({value}){
    return (
        <>
            <StyledButton> {value} </StyledButton>
        </>
    );
}

const StyledButton = styled.button`
color: white;
width: 145px;
height: 40px;
background: #839D38;
border: none;
margin-top: 20px;
margin-left: 30%;
font-weight: bold;
text-align: center; 
`;

export default Button;