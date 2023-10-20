import styled from "styled-components";
import Title from "../Atoms/Title";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import Label from "../Atoms/Label";
import ItemsRadio from "./ItemsRadio";
import ItemsChecks from "./ItemsChecks";
import Date from "./Date";
function Formulario() {
    return (
        <>
            <StyledFormulario>
                <Title value={"REGISTRO DE PRODUCTOS"}> </Title>

                <Label value={"Nombre del producto: "} ></Label>
                <Input></Input>

                <Label value={"Marca del Producto:"} ></Label>
                <Input></Input>

                <Date></Date>

                <Label value={"Garantia del Producto: "}></Label>
                <ItemsRadio></ItemsRadio>
                
                <ItemsChecks></ItemsChecks>




                <Button value={"Registrar Producto"}></Button>

            </StyledFormulario>
        </>
    );


}

export default Formulario;

const StyledFormulario = styled.form`
    background: #ffffff;
    width: 34%;
   height: 80vh;
   padding: 0 4%;

  
    /* brad = marca */
    
`;


{/* <Label value={"Garantia: "} ></Label>
<Label value={"Sin garantia "} ></Label>
<Input type={"radio"}></Input>
<Label value={"Con garantia"} ></Label>
<Input type={"radio"}></Input> */}