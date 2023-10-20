import StyleItems from "../Atoms/StyleItems";
import Input from "../Atoms/Input";
import Label from "../Atoms/Label";

function ItemsChecks (){
    return (
        <>
            <StyleItems>
            <Input type={"checkbox"} secundary={"true"} tercery={"true"} ></Input>
            <Label value={"Aceptar Terminos y Condiciones"} primary={"true"}></Label>
            </StyleItems>
        </>
    );
}

export default ItemsChecks;