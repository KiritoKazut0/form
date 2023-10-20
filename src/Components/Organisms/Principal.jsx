import styled from "styled-components";
import Formulario from "../Molecule/Formulario";
import Img from "../Atoms/Img";
function Principal (){
    return (
        <>
        <StyledContenedor> 
        <Img></Img>
        <Formulario> </Formulario>
       
        
        </StyledContenedor>
        </>
    );
}

const StyledContenedor = styled.div `
    width: 100%;
    height: 100vh;
    background: #e4a5a5;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Principal;