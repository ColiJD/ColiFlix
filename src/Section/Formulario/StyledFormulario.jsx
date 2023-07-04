import styled from "styled-components";
import { blanco } from "../../assets/base/Variables";
import { Button } from "../../assets/base";

const StyledFormulario = styled.section`
    display: flex;
    justify-content: center;
    color: ${blanco};
    background-color: #000;

    @media screen and (max-width:768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width:480px){
        margin: 0 2rem;
    }
`
const StyledForm = styled.form`
    width: 90%;
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 25%);
    border-radius: 20px;
    padding: 8px 2rem;;
    flex-wrap: wrap;


    @media screen and (max-width:480px){
        box-shadow: none;
        padding: 8px 5px;
    }
`
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    *:first-child {
      margin-right: 0.75rem;
        }

      @media screen and (max-width:480px){
        flex-direction: column;
    }
`
const StyDivBotones = styled.div`
   display: flex;
   justify-content: space-around;
`
const StyledBoton = styled(Button)`
    background-color: gray;
    color: black;
    margin: 0;

    @media screen and (max-width:480px){
        margin-top: 1.2rem;
    }
`

export { StyDivBotones, StyledBoton, StyledForm, StyledDiv, StyledFormulario }