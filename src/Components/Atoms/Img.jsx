import styled from "styled-components";

function Img (){
    return (
        <>
            <StyledImg></StyledImg>
        </>
    );
}

const StyledImg = styled.div`
    width: 25%;
    height: 80vh;   
    background-size: cover;
    background-image: url(https://colorlib.com/etc/regform/colorlib-regform-20/images/registration-form-4.jpg);
   

`;

export default Img;