import Label from "../Atoms/Label";
import Input from "../Atoms/Input";
import StyleItems from "../Atoms/StyleItems";

function ItemsRadio() {
    return (

        <>
          <StyleItems>
          <Input type={"radio"} secundary={"true"}  tercery={"true"}></Input>
            <Label value={"Aplica "} primary={"true"} ></Label>
            <Input type={"radio"} primary={"primary"} secundary={"true"} tercery={"true"}></Input>
            <Label value={"No Aplica"} primary={"true"} ></Label>
           
          </StyleItems>
        </>

    );
}





export default ItemsRadio;