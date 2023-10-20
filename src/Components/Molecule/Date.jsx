import Input from "../Atoms/Input";
import Label from "../Atoms/Label";
import StyleItems from "../Atoms/StyleItems";

function Date (){
    return (
        <>  
            <StyleItems>
            <Label value={"Fecha de Vencimiento: "} primary={"true"}></Label>
            <Input type={"date"} primary={"true"} secundary={"true"}></Input>


            </StyleItems>
        </>
    );
}

export default Date;