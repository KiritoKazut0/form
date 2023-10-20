import styled from "styled-components";

function Input ({ type, primary, secundary, tercery} ){
    return (
        <>
            <StyledInput type={type} primary={primary} secundary={secundary} tercery={tercery} ></StyledInput>
        </>
    );
} 


const StyledInput = styled.input`
 display:block;
 margin-left: ${props => props.primary? "10px": "0px"} ;
 margin-right: ${props => props.secundary? "5px": "0px"} ;
 border-radius: ${props => props.secundary? "10px": "100px"} ;
 border: 1px solid black;
 width: ${props => props.tercery? "18px": "274px"};
 height: ${props => props.tercery? "30px": "35px"};
 margin-bottom: 13px;
 margin-top: 7px;
`;

/* typeValue: verificara si es de tipo 
    date: fecha,
    checks : checks box
    o de radioButton
*/ 

export default Input;